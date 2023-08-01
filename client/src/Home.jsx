import { projectFirestore } from './Firebase/config'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/outline'
function Home() {
  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  // old one time firebase get method
  // useEffect(() => {
  //   setIsPending(true)
  //   projectFirestore
  //     .collection('Games')
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.empty) {
  //         setError('No documents to load')
  //         setIsPending(false)
  //       } else {
  //         let results = []
  //         snapshot.docs.forEach((doc) => {
  //           results.push({ docid: doc.id, ...doc.data() })
  //         })
  //         setData(results)
  //         setIsPending(false)
  //       }
  //     })
  //     .catch((err) => {
  //       setError(err.message)
  //       setIsPending(false)
  //     })
  // }, [])

  // new real time firebase get
  useEffect(() => {
    setIsPending(true)
    const unsub = projectFirestore.collection('Games').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No documents to load')
          setIsPending(false)
        } else {
          let results = []
          snapshot.docs.forEach((doc) => {
            results.push({ docid: doc.id, ...doc.data() })
          })
          setData(results)
          setIsPending(false)
        }
      },
      (err) => {
        setError(err.message)
        setIsPending(false)
      }
    )

    return () => unsub()
  }, [])

  // const handleUpdate = (e) => {
  //   projectFirestore.collection('Games')
  //   .get(docid)
  //   .update({
  //     title: 'Changed Title'
  //   })
  // }

  const handleAdd = (e) => {
    e.preventDefault()
    navigate('/create/')
  }

  const handleDelete = (docid) => {
    projectFirestore.collection('Games').get(docid).delete()
  }

  return (
    <div>
      <h1>Home</h1>
      <button
        type='button'
        onClick={handleAdd}
        className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Add New Game
      </button>
      {error && <p>Error</p>}
      {isPending && <p>Loading...</p>}
      {data && (
        <div className='flex flex-row'>
          <table className='divide-y divide-gray-300'>
            <thead className=''>
              <tr>
                <th className='w-40 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>
                  key
                </th>
                <th className='w-40 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>
                  value
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {data.map((item) => {
                return (
                  <>
                    <tr key='123456789'>
                      <td>
                        <Link
                          className='font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline'
                          to={`single/${item.docid}`}
                        >
                          {item.docid}
                        </Link>
                        <TrashIcon
                          className='w-6 h-6'
                          onClick={() => handleDelete(item.docid)}
                        />
                      </td>
                    </tr>

                    {Object.entries(item).map(([k, v]) => {
                      return (
                        <tr key={item.id + k} className=''>
                          <td className='w-40 whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {k}
                          </td>
                          <td className='w-40 whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {v}
                          </td>
                        </tr>
                      )
                    })}
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Home
