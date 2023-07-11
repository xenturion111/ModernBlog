import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/home/home'
import TopBar from './components/topbar/TopBar'
import Write from './pages/write/Write'
import Settings from './pages/settings/settings'
import Login from './pages/login/Login'
import Register from './pages/register/register'
import Single from './pages/single/Single'


function App() {
  const user = false;
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route exact path='/' element={ <Home />} />
        <Route path='/register' element={ user ? <Home /> : <Register />} />
        <Route path='/login' element={ user ? <Home /> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/settings' element={ user ? <Settings /> : <Settings />} />
        <Route path='/post/:postId' element={ <Single />} />
      </Routes>
    </div>
  )
}

export default App
