import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { jwtDecode } from "jwt-decode"; 

import './App.css'

function App() {
  const [d, setD] = useState([])
  const url='http://20.244.56.144/evaluation-service'
  const [accessToken,setAccessToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU3NTQ0LCJpYXQiOjE3NDQ5NTcyNDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjdhM2YxMTJiLWVjMzYtNDVmNS04NWYyLWJhNzM5ODk0N2YyOSIsInN1YiI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJheXVzaCBndXB0YSIsInJvbGxObyI6IjIyMTUwMDA0MzgiLCJhY2Nlc3NDb2RlIjoiQ05uZUdUIiwiY2xpZW50SUQiOiI3YTNmMTEyYi1lYzM2LTQ1ZjUtODVmMi1iYTczOTg5NDdmMjkiLCJjbGllbnRTZWNyZXQiOiJaakdGelpXVFRCYURVcW5uIn0.mCVh_12EDwtr0HpKAhiUcawjWneRiORGvlGuajSMFEY");
  const body={
    "email": "ayush.gupta4_cs22@gla.ac.in",
    "name": "ayush gupta",
    "rollNo": "2215000438",
    "accessCode": "CNneGT",
    "clientID": "7a3f112b-ec36-45f5-85f2-ba7398947f29",
    "clientSecret": "ZjGFzZWTTBaDUqnn"
    };

  const isTokenExpired = (token) => {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; 
    return decoded.exp < currentTime;
  };

  const refreshAccessToken = async () => {
  
    try {
      const response = await fetch(url+"/refresh-token", {
        method: "POST",
       body: JSON.stringify(body)
      });
      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.access_token);
        localStorage.setItem("accessToken", data.access_token);
        console.log(accessToken);
      } else {
        console.error("Failed to refresh token");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
    
    }
  };

  const fetchUser= async ()=>{
      if(isTokenExpired(accessToken)){
        refreshAccessToken()
      }
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
     
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>{ refreshAccessToken() }}>
          count is {d}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
     
    </>
  )
}

export default App
