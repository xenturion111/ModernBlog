import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import './index.css'
import { Link, Outlet } from "react-router-dom"

const TopBar = () => {
  const user = false;

  return (
    <div className='top'>
      <div className='topLeft'> 
        <GitHubIcon className='topIcon'/>
        <InstagramIcon className='topIcon'/>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to="/" >HOME</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/" >ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/" >CONTACT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/write" >WRITE</Link>
          </li>
          <li className='topListItem'>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <AccountCircleSharpIcon className='topImage'/>
        ) : (
          <ul className='topList'> 
            <li className='topListItem'>
              <Link className='link' to="/login" >LOGIN</Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to="/register" >REGISTER</Link>
            </li>
          </ul>
        )}
        <SearchSharpIcon className='topSearchIcon'/>
      </div>
      <Outlet />
    </div>
  );
};

export default TopBar