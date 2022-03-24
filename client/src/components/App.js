import './App.css'
import React from 'react'
import Navbar from './Navbar.tsx'

const App = () => {
  return (
    <div className="flex w-full content-center justify-center">
      <Navbar />
    <h1 className="text-3xl font-bold underline">
      Hello world! this is a test
    </h1>
    </div>
  )
}

export default App