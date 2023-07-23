import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import './index.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'



const homePage = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();


  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await axios.get(`/api/posts/${search}`);
      setPosts(res.data)
      }
      fetchPosts();
    }, [search])


  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
    
  )
}

export default homePage