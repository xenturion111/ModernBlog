import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm'>
            <label>Username</label>
            <input className='registerInput' type='text' placeholder='Input Your Username'/>
            <label>Email</label>
            <input className='registerInput' type='text' placeholder='Input Your Email'/>
            <label>Password</label>
            <input className='registerInput' type='password' placeholder='Input Your password'/>
            <button className='registerButton'>returnegister</button>
            <button className='registerLoginButton'>
              <Link className='link' to='/login'>login</Link>
            </button>
        </form>
    </div>
  )
}

export default Register