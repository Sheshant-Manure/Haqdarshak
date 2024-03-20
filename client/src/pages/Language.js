import React from 'react'
import style from './Language.module.css'
import BackBtn from '../components/BackBtn.jsx'
import FormNxtBtn from '../components/FormNxtBtn.jsx'


const Language = () => {

  return (
    <div className={style.container}>
        <BackBtn />
        <h1 className={style.title}>Which language do you prefer?</h1>
        <FormNxtBtn />
    </div>
  )
}

export default Language