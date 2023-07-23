import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useLocation } from "react-router-dom"
import './index.css'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

export const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/api/posts/${path}`);
      setPost(res.data)
    }
    getPost();
  }, [path])
  
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
        {post.photo && 
          <img 
            className='singlePostImage'
            src={post.photo}
            alt=''
          />
        }
          <h1 className='singlePostTitle'> {post.title}
            <div className='singlePostEdit'>
              <BorderColorSharpIcon className='singlePostIcon' />
              <DeleteForeverSharpIcon className='singlePostIcon'/>
            </div>
          </h1>
          <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author : 
              <Link to={`/?user=${post.username}`} className='link'>
                <b>{post.username}</b>
              </Link></span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
          </div>
          <p className='singlePostDesc'>
              {post.desc}
          </p>
        </div>
    </div>
    )
}
