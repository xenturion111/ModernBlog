import React from 'react'
import './index.css'
import AddIcon from '@mui/icons-material/Add';

const Write = () => {
  return (
    <div className='write'>
        <form className='writeForm'>
          <img className='writeImg' src='https://assets.editorial.aetnd.com/uploads/2009/11/augustus-caesar-587488458.jpg' />
          <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
              <AddIcon className='writeIcon'/>
            </label> 
            <input type='file' id='fileInput' style={{display: "none"}}/>
            <input type='text' placeholder='title' className='writeInput' autoFocus={true} />
          </div>
          <div className='writeFormGroup'>
            <textarea placeholder='Tell Your Story' type='text' className='writeInput writeText' ></textarea>
          </div>
          <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write