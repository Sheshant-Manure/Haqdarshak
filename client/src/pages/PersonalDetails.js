import React from 'react'
import style from './PersonalDetails.module.css'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'

const PersonalDetails = () => {
  return (
    <div className={style.container}>
        <BackBtn />
        <h1 className={style.title}>Personal Details</h1>
        <div className={style.formContainer}>
        <div className={style.language}>
            <small><b>Name</b></small> 
            <div className={style.optionBox}>
                <input className={style.name} type='text' placeholder='Enter you Full Name'/>
            </div>
            <small><b>Gender</b></small> 
            <div className={style.gender}>
                <div className={style.genderOption}>
                    <input className={style.gen} type='radio' name='gender' value={'male'} defaultChecked/>
                    <label>Male</label>
                </div>
                <div className={style.genderOption}>
                    <input className={style.gen} type='radio' name='gender' value={'male'}/>
                    <label>Female</label>
                </div>
                <div className={style.genderOption}>
                    <input className={style.gen} type='radio' name='gender' value={'male'}/>
                    <label>Other</label>
                </div>
            </div>
            <small><b>DOB/Age</b></small> 
            <div className={style.dobContainer}>
                <div className={style.birthday}>
                    <input className={style.dob} type='date' placeholder='Enter you Birthday'/>
                </div>
                <span>OR</span>
                <div className={style.ageContainer}>
                    <input className={style.age} type='number' placeholder='Age'/>
                </div>
            </div>
            <p className={style.message}>This information helps us suggest schemes that are right for you.</p>
            <p className={style.disclaimer}>By creating an account, I agree to Haqdarshak’s Terms of Service & Privacy Policy</p>
        </div>
        <div className={style.nxtBtn}>
            <NextBtn />
        </div>
        </div>
    </div>
  )
}

export default PersonalDetails