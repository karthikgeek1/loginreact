import React, {useState} from 'react'

const WelcomePage = ({transferData, setData}) => {
  return (
    <div>
      <h1>welcome {transferData.username}</h1>
      <button onClick={()=>setData(null)}>Logout</button>
    </div>
  )
}

export default WelcomePage
