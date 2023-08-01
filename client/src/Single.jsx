import { projectFirestore } from './Firebase/config'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Single() {
  const { docid } = useParams()

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  // old function that executes single get request to firebase
  
  // useEffect(() => {
  //   setIsPending(true)
  //   projectFirestore
  //     .collection('Games')
  //     .doc(docid)
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         setIsPending(false)
  //         setData(doc.data())
  //       } else {
  //         setIsPending(false)
  //         setError('Could not find document')
  //       }
  //     })
  // }, [docid])


  // new function with real time updating the monitors any changes coming from database
  
  useEffect(() => {
    setIsPending(true)
    const unsub = projectFirestore
      .collection('Games')
      .doc(docid)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false)
          setData(doc.data())
        } else {
          setIsPending(false)
          setError('Could not find document')
        }
      })

      return () => unsub()
  }, [docid])

  return (
    <div>
      {error && <p>Error</p>}
      {isPending && <p>Loading...</p>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>key</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data)?.map(([k, v]) => {
              return (
                <tr key={data.id + k}>
                  <>
                    <td>{k}</td>
                    <td>{v}</td>
                  </>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Single
