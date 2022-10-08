import React, {useState} from 'react'

const WelcomePage = ({transferData, setData}) => {
  let user=JSON.parse(localStorage.getItem("userDetails"))
  const handleLogout=()=>{
    localStorage.removeItem("userDetails")
    setData("")
  }
  return (
    <div>
      <h1>welcome {user.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default WelcomePage
