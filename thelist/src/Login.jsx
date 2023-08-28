import React , {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');
  
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlfor = "username">username</label>
        <input value = {username} onChange={(e) => setUsername(e.target.value)} type = "username" placeholder = "yahoo335" id = "username" name = "username" />

        <label htmlfor = "passcode">passcode</label>
        <input value = {passcode} onChange={(e) => setPasscode(e.target.value)} type = "password" placeholder = "*****" id = "passcode" name = "passcode" />

        <button onClick = {() => {
            navigate("/home")
          }}>login</button>
    </form>
    <button onClick = { () => props.onFormSwitch('register')}>dont have an account? register here!</button>
    </>
  )
}
