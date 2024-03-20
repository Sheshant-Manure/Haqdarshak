import React from 'react'

// Pages in sequence
import Landing from './pages/Landing'
import Poster from './pages/Poster'
import Language from './pages/Language'
import LoginOption from './pages/LoginOption'

import style from './App.module.css'
import Smartphone from './assets/images/smartphone.png'
import { useSelector } from 'react-redux'
import LoginType from './pages/LoginType'

const App = () => {

  let pages = [<Landing />, <Poster />, <Language />, <LoginOption />, <LoginType />]
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