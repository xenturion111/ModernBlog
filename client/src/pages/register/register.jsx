import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  }
  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
              className='registerInput' 
              type='text' 
              placeholder='Input Your Username'
              onChange={e => setUsername(e.target.value)}
              />
            <label>Email</label>
            <input 
              className='registerInput' 
              type='text' 
              placeholder='Input Your Email'
              onChange={e => setEmail(e.target.value)}
              />
            <label>Password</label>
            <input 
              className='registerInput' 
              type='password' 
              placeholder='Input Your password'
              onChange={e => setPassword(e.target.value)}
              />
            <button className='registerButton' type='submit'>Register</button>
            <button className='registerLoginButton'>
              <Link className='link' to='/login'>login</Link>
            </button>
        </form>
    </div>
  )
}

export default Register