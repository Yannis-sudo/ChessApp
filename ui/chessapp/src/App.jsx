import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PlayEngine from './routes/PlayEngine'
import Home from './routes/Home'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playengines" element={<PlayEngine />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
