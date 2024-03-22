import React from 'react'
import style from './Language.module.css'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'
import { setLoginType } from '../redux/slices/loginOption'
import { useDispatch } from 'react-redux'


const LoginOption = () => {

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    dispatch(setLoginType(e.target.value))
  }

  return (
    <div className={style.container}>
        <BackBtn />
        <h1 className={style.title}>How do you want to login?</h1>
        <div className={style.LoginMenu}>
        <div className={style.LoginOption}>
            <div className={style.optionBox}>
                <input className={style.languageSelect} type='radio' name='language' value={'newUser'} defaultChecked onChange={ handleLogin }/>
                <label>Register me as a new user</label>
            </div>
            <div className={style.optionBox}>
                <input className={style.languageSelect} type='radio' name='language' value={'phone'} onChange={ handleLogin }/>
                <label>Use my Phone Number</label>
            </div>
            <div className={style.optionBox}>
                <input className={style.languageSelect} type='radio' name='language' value={'yojanaCard'} onChange={ handleLogin }/>
                <label>Use my Yojana Card</label>
            </div>
            <div className={style.nextBtn}>
              <NextBtn />
            </div>
        </div>
    </div>
    </div>
  )
}

export default LoginOption