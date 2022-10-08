import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import WelcomePage from './components/WelcomePage';

function App() {
const [profileName, setProfileName] = useState("Login")
const [data, setData]=useState("")

// let data = JSON.parse(localStorage.getItem("userDetails")) || null
  return (
    <div className="App">
      <Navbar data={data}/>
      {!data?<LoginForm setData={setData}/>:<WelcomePage setData={setData} transferData={data}/>}
    </div>
  );
}

export default App;
