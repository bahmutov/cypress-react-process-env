import React from 'react'
import './App.css'

// original source code
// function App() {
//   return (
//     <div className="App">
//       <h1>{process.env.REACT_APP_TITLE}</h1>
//       <h3>{process.env.REACT_APP_DESCRIPTION}</h3>

//       {process.env.NODE_ENV === 'development'
//         ? process.env.REACT_APP_DEV_MODE
//         : process.env.REACT_APP_PRO_MODE}
//     </div>
//   )
// }

// testable from Cypress
function App() {
  const env = { ...process.env, ...window.process?.env }
  return (
    <div className="App">
      <h1>{env.REACT_APP_TITLE}</h1>
      <h3>{env.REACT_APP_DESCRIPTION}</h3>

      {env.NODE_ENV === 'development'
        ? env.REACT_APP_DEV_MODE
        : env.REACT_APP_PRO_MODE}
    </div>
  )
}

export default App
