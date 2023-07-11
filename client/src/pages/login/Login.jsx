import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
            <label>Email</label>
            <input className='loginInput' type='text' placeholder='Input Your Email'/>
            <label>Password</label>
            <input className='loginInput' type='password' placeholder='Input Your password'/>
            <button className='loginButton'>login</button>
            <button className='loginRegisterButton'>
            <Link className='link' to='/register'>register</Link>
            </button>
        </form>
    </div>
  )
}

export default Login