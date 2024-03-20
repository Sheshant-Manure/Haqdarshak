import React from 'react'
import style from './BackBtn.module.css'
import LeftArrow from '../assets/icons/arrow.png'

import { useDispatch } from 'react-redux';
import { previousPageIndex } from '../redux/slices/pageIndex';

const BackBtn = () => {

  const dispatch = useDispatch();
  const previousPage = () => {
    dispatch(previousPageIndex())
  }

  return (
    <button className={style.leftArrowBtn} onClick={previousPage} >
        <img className={style.arrowImg} src={ LeftArrow } alt='Left Arrow' />
    </button>
  )
}

export default BackBtn