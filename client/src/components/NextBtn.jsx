import React from 'react'
import style from './NextBtn.module.css'
import { useDispatch } from 'react-redux'
import { nextPageIndex } from '../redux/slices/pageIndex';

const NextBtn = () => {

  const dispatch = useDispatch();
  const nextPage = () => {
    dispatch(nextPageIndex())
  }

  return (
    <div className={style.container}>
        <button className={style.NxtBtn} onClick={nextPage} >Next</button>
    </div>
  )
}

export default NextBtn