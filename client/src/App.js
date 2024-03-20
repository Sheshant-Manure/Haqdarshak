import React from 'react'
import Landing from './pages/Landing'
import Poster from './pages/Poster'
import Language from './pages/Language'
import style from './App.module.css'
import Smartphone from './assets/images/smartphone.png'

import { useDispatch, useSelector } from 'react-redux';
import { nextPageIndex } from './redux/slices/pageIndex';


const App = () => {

  const pages = [<Landing />, <Poster />, <Language />]
  const dispatch = useDispatch();
  const nextPage = () => {
    if(index < pages.length - 1) 
      dispatch(nextPageIndex())
  }

  const index = useSelector((state)=>state.activePage.index);
  console.log(index)

  return (
    <div className={style.app}>
      <img className={style.smartphone} src={Smartphone} alt="Smartphone" /> 
      <div className={style.content} onClick={nextPage} >
        { pages[index] }
      </div>   
    </div>
    )
}

export default App