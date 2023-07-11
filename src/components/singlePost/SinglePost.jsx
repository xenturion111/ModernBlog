import React from 'react'
import './index.css'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

export const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
          <img 
            className='singlePostImage'
            src='https://www.focusforhealth.org/wp-content/uploads/2019/07/Loneliness-Health-508101782.jpg'
            alt=''
          />
          <h1 className='singlePostTitle'>Loneliness
            <div className='singlePostEdit'>
              <BorderColorSharpIcon className='singlePostIcon' />
              <DeleteForeverSharpIcon className='singlePostIcon'/>
            </div>
          </h1>
          <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author: Reza</span>
            <span className='singlePostDate'>1 hour ago</span>
          </div>
          <p className='singlePostDesc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
    </div>
    )
}
