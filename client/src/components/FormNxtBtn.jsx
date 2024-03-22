import React from 'react'
import style from './FormNxtBtn.module.css'
import NextBtn from './NextBtn'

const FormNxtBtn = () => {
  return (
    <div className={style.container}>
        <div className={style.language}>
            <div className={style.optionBox}>
                <input className={style.languageSelect} type='radio' name='language' value={'English'} defaultChecked/>
                <label>English</label>
            </div>
            <div className={style.optionBox}>
                <input className={style.languageSelect} type='radio' name='language' value={'हिंदी'} />
                <label>हिंदी</label>
            </div>
            <div className={style.optionBox}>
                <input className={style.languageSelect} type='radio' name='language' value={'ಕನ್ನಡ'} />
                <label>ಕನ್ನಡ</label>
            </div>
            <p className={style.message}>This allows you to experience the app in a language of your preference.</p>
            <div className={style.nxtBtn}>
                <NextBtn />
            </div>
        </div>
    </div>
  )
}

export default FormNxtBtn