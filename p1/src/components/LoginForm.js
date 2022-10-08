import React, { useState } from 'react'
import './LoginForm.css'
const LoginForm = (props) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const handlesubmit=(e)=>{
    e.preventDefault()
    let data = {
      'username': userName,
      'password': password
    }
    localStorage.setItem("userDetails", JSON.stringify(data))
    props.setData(JSON.parse(localStorage.getItem("userDetails")))
  }
  return (
    <div className='main-cont'>
      <form>
        <div className='form-cont'>
      <h1>Login To Continue</h1>
          <div>
            <input type='text' defaultValue={userName} placeholder="username" onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <input type='password' defaultValue={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <button onClick={(e)=>handlesubmit(e)}>Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
