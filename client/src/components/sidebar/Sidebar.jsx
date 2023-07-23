import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link} from "react-router-dom"
import './index.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
   
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
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
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