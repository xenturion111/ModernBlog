import React from 'react'
import './index.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
          <span className='sidebarTitle'>About Me</span>
          <img 
          width={250}
          src='https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg'
          alt=''
          />
          <p> Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s
          </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Philosophy</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Philosophy</li>
            <li className='sidebarListItem'>Music</li>
          </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
            <GitHubIcon className='sidebarIcon'/>
            <InstagramIcon className='sidebarIcon'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar