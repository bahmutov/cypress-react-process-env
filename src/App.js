import React from 'react'
import './App.css'

function App() {
  const env = window.process?.env || process.env
  console.log(env)
  return (
    <div className="App">
      <h1>{env.REACT_APP_TITLE}</h1>
      <h3>{process.env.REACT_APP_DESCRIPTION}</h3>

      {process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_DEV_MODE
        : process.env.REACT_APP_PRO_MODE}
    </div>
  )
}

export default App
