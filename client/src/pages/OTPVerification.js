import React from 'react'
import style from './OTPVerification.module.css'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'

const OTPVerification = () => {
  return (
    <div className={style.container}>
        <BackBtn />
        <h1 className={style.title}>Do you want to proceed without OTP verification?</h1>
        <div className={style.formContainer}>
        <div className={style.language}>
            <div className={style.optionBox}>
                <input className={style.languageSelect} type='radio' name='language' value={'English'} defaultChecked/>
                <label>Yes</label>
            </div>
            <div className={style.optionBox}>
                <input className={style.languageSelect} type='radio' name='language' value={'English'}/>
                <label>No, I want to complete OTP verification</label>
            </div>
        </div>
        <p className={style.message}>This allows you to experience the app in a language of your preference.</p>
        <div className={style.nxtBtn}>
        <NextBtn />
        </div>
        </div>
    </div>
  )
}

export default OTPVerification