import React from 'react'
import './index.css'
import PersonIcon from '@mui/icons-material/Person';
import Sidebar from '../../components/sidebar/Sidebar'


const Settings = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        {/* <Sidebar /> */}
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>
            Update
          </span>
          <span className='settingsDeleteTitle'>
            Delete
          </span>
        </div>
        <form className='settingForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
          <img className='writeImg' src='https://assets.editorial.aetnd.com/uploads/2009/11/augustus-caesar-587488458.jpg' />
          <label htmlFor='fileInput'>
            <PersonIcon className='settingsPPIcon'/>
          </label>
          <input type='file' id='fileInput' style={{display: 'none'}} />
          </div>
          <label>Username</label>
          <input  type='text' placeholder='Reza'/>
          <label>Email</label>
          <input  type='email' placeholder='reza.gmail.com,'/>
          <label>password</label>
          <input  type='password'/>
          <button className='settingsSubmit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Settings