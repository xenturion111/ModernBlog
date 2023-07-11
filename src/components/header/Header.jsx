import React from 'react'
import './index.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>

      <img className='headerImg' src='https://uploads-ssl.webflow.com/60babc2f4a97cece9858d8e7/63cf08c348df148dd95a7efe_hq720.jpeg' alt=''/>
    </div>
  )
}

export default Header