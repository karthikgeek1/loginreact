import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import WelcomePage from './components/WelcomePage';

function App() {
let user = JSON.parse(localStorage.getItem("userDetails")) || null
const [data, setData]=useState(user)

  return (
    <div className="App">
      <Navbar data={data}/>
      {!data?<LoginForm setData={setData}/>:<WelcomePage setData={setData}/>}
    </div>
  );
}

export default App;
