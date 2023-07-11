import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import './index.css'

const TopBar = () => {
  return (
    <div className='top'>
        <div className='topLeft'> 
            <GitHubIcon className='topIcon'/>
            <InstagramIcon className='topIcon'/>
        </div>
        <div className='topCenter'>
           <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
           </ul>
        </div>
        <div className='topRight'>
            <AccountCircleSharpIcon className='topImage'/>
            <SearchSharpIcon className='topSearchIcon'/>
        </div>
    </div>
  )
}

export default TopBar