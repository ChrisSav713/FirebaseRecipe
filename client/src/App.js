import './App.css'
import Home from './Home'
import React from 'react'
import Single from './Single'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateSingle from './CreateSingle'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single/:docid' element={<Single />} />
          <Route path='/create/' element={<CreateSingle />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
