import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { jwtDecode } from "jwt-decode"; 

import './App.css'

function App() {
  const [d, setD] = useState([])
  const url='http://20.244.56.144/evaluation-service'
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU3NTQ0LCJpYXQiOjE3NDQ5NTcyNDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjdhM2YxMTJiLWVjMzYtNDVmNS04NWYyLWJhNzM5ODk0N2YyOSIsInN1YiI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJheXVzaCBndXB0YSIsInJvbGxObyI6IjIyMTUwMDA0MzgiLCJhY2Nlc3NDb2RlIjoiQ05uZUdUIiwiY2xpZW50SUQiOiI3YTNmMTEyYi1lYzM2LTQ1ZjUtODVmMi1iYTczOTg5NDdmMjkiLCJjbGllbnRTZWNyZXQiOiJaakdGelpXVFRCYURVcW5uIn0.mCVh_12EDwtr0HpKAhiUcawjWneRiORGvlGuajSMFEY";

  const fetchUser= async ()=>{
      try {
        const response= await fetch(url+"/users", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        })
        const data=await response.json()
        setD(data)
      } catch (error) {
        console.error(error)
      }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>{ fetchUser() }}>
          count is {d}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
