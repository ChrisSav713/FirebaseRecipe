import React, { useRef } from 'react'
import { projectFirestore } from './Firebase/config'
import { useNavigate } from 'react-router-dom'

function CreateSingle() {
  let navigate = useNavigate()

  const platformsRef = useRef()
  const idRef = useRef()
  const release_datesRef = useRef()
  const urlRef = useRef()
  const nameRef = useRef()
  const total_ratingRef = useRef()
  const invovled_companiesRef = useRef()
  const age_ratingsRef = useRef()
  const categoryRef = useRef()
  const genresRef = useRef()
  const themesRef = useRef()
  const websitesRef = useRef()
  const summaryRef = useRef()

  const handleAdd = async (e) => {
    e.preventDefault()
    const doc = {
      platforms: platformsRef.current.value,
      id: idRef.current.value,
      release_dates: release_datesRef.current.value,
      url: urlRef.current.value,
      name: nameRef.current.value,
      total_rating: total_ratingRef.current.value,
      involved_companies: invovled_companiesRef.current.value,
      age_ratings: age_ratingsRef.current.value,
      category: categoryRef.current.value,
      genres: genresRef.current.value,
      themes: themesRef.current.value,
      websites: websitesRef.current.value,
      summary: summaryRef.current.value
    }
    try {
      await projectFirestore
        .collection('Games')
        .add(doc)
        .then((a) => {
          console.log(a)
          navigate('/')
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className='border-b border-gray-900/10 pb-12'>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          New Game
        </h2>

        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <label
              htmlFor='platforms'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Platforms
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='platforms'
                ref={platformsRef}
                id='platforms'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='id'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              id
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='id'
                ref={idRef}
                id='id'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='release_dates'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              release_dates
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='release_dates'
                id='release_dates'
                ref={release_datesRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='url'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              url
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='url'
                id='url'
                ref={urlRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='name'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='name'
                id='name'
                ref={nameRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='total_rating'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              total_rating
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='total_rating'
                id='total_rating'
                ref={total_ratingRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='involved_companies'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              involved_companies
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='involved_companies'
                id='involved_companies'
                ref={invovled_companiesRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='age_ratings'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              age_ratings
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='age_ratings'
                id='age_ratings'
                ref={age_ratingsRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='category'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              category
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='category'
                id='category'
                ref={categoryRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='genres'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              genres
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='genres'
                id='genres'
                ref={genresRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='themes'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              themes
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='themes'
                id='themes'
                ref={themesRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='websites'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              websites
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='websites'
                id='websites'
                ref={websitesRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label
              htmlFor='summary'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              summary
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='summary'
                id='summary'
                ref={summaryRef}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </div>
        <button
          className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          type='button'
          onClick={(e) => handleAdd(e)}
        >
          Add Game
        </button>
      </div>
    </div>
  )
}

export default CreateSingle
