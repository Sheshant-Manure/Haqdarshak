import React from 'react'

// Pages in sequence
import Landing from './pages/Landing'
import Poster from './pages/Poster'
import Language from './pages/Language'
import LoginOption from './pages/LoginOption'
import LoginType from './pages/LoginType'
import DistPin from './pages/DistPin'
import Phone from './pages/Phone'
import OTPVerification from './pages/OTPVerification'
import PersonalDetails from './pages/PersonalDetails'
import Home1 from './pages/Home1'

import style from './App.module.css'
import Smartphone from './assets/images/smartphone.png'
import { useSelector } from 'react-redux'

const App = () => {

  let pages = [<Landing />, <Poster />, <Language />, <LoginOption />, <LoginType />, <DistPin />, <Phone />, <OTPVerification />, <PersonalDetails />, <Home1 />]
  const index = useSelector((state)=>state.activePage.index);

  return (
    <div className={style.app}>
      <img className={style.smartphone} src={Smartphone} alt="Smartphone" /> 
      <div className={style.content}>
        { pages[index] }
      </div>   
    </div>
    )
}

export default App