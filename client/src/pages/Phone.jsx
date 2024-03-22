import React from 'react'
import style from './Phone.module.css'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'

const Phone = () => {
  return (
    <div className={style.container}>
      <BackBtn />
      <h1 className={style.title}>What is your mobile number?</h1>
      <div className={style.formContainer}>
        <input className={style.mobNumber} type='number' placeholder='Enter Mobile Number' />
      </div>
      <p className={style.message}>This is used to create an account in your name on the Haqdarshak app.</p>
      <div className={style.NextBtnContainer}>
        <NextBtn />
      </div>
    </div>
  )
}

export default Phone