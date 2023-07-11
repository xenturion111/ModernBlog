import React from 'react'
import './index.css'

export const Post = () => {
  return (
    <div className='post'>
        <img className='postImg'
            src='https://www.focusforhealth.org/wp-content/uploads/2019/07/Loneliness-Health-508101782.jpg'
            alt=''
        />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Philosopy</span>
                <span className='postCat'>Tech</span>
            </div>
            <span className='postTitle'>
                Lorem Ipsum is simply dummy
            </span>
            <hr />
            <span className='postDate'>
                1 hour ago
            </span>
            <p className='postDesc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            has been the industry's standard dummy text ever since the 1500s.
            </p>
        </div>
    </div>
  )
}
