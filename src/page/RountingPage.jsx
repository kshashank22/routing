import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../components/home/home'
import About from '../components/about/about'
import NavBar from '../components/navbar/NavBar'
import './RoutingPage.css'

function RountingPage() {
  return (
    <div className='mainContainer'>
        <NavBar/>
        <div className='components'>
        <Routes>
            <Route exact path='/' Component={Home}>

                <Route exact path="mess" Component={About}/>
            </Route>
            <Route exact path='/about' Component={About}></Route>
        </Routes>
        </div>
    </div>
  )
}

export default RountingPage
