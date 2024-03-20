import React from 'react'
import style from './Language.module.css'
import BackBtn from '../components/BackBtn.jsx'

const Language = () => {
  return (
    <div className={style.container}>
        <BackBtn />
        <h1 className={style.title}>Which language do you prefer?</h1>
    </div>
  )
}

export default Language