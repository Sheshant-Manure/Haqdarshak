import React, { useState } from 'react'
import style from './DistPin.module.css';
import BackBtn from '../components/BackBtn';
import NextBtn from '../components/NextBtn';

import { useDispatch } from 'react-redux';
import { setDistrict, setPincode } from '../redux/slices/location'

const DistPin = () => {

  const dispatch = useDispatch();
  const [pin, setPin] = useState('')
  const handlePin = (e) => {
    setPin(e.target.value);
    console.log(pin)
  }

  return (
    <div className={style.container}>
        <BackBtn />
        <h1 className={style.title}>Where are you from?</h1>
        <div className={style.formContainer}>
            <div className={style.language}>
                <div className={style.optionBox}>
                <select className={style.district} onChange={(e)=>dispatch(setDistrict(e.target.value))} >
                    <option value="">Select District</option>
                    <option value="Adilabad">Adilabad</option>
                    <option value="Bhadradri Kothagudem">Bhadradri Kothagudem</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Jagtial">Jagtial</option>
                    <option value="Jangaon">Jangaon</option>
                    <option value="Jayashankar Bhupalpally">Jayashankar Bhupalpally</option>
                    <option value="Jogulamba Gadwal">Jogulamba Gadwal</option>
                    <option value="Kamareddy">Kamareddy</option>
                    <option value="Karimnagar">Karimnagar</option>
                    <option value="Khammam">Khammam</option>
                    <option value="Kumuram Bheem">Kumuram Bheem</option>
                    <option value="Mahabubabad">Mahabubabad</option>
                    <option value="Mahabubnagar">Mahabubnagar</option>
                    <option value="Mancherial">Mancherial</option>
                    <option value="Medak">Medak</option>
                    <option value="Medchal–Malkajgiri">Medchal–Malkajgiri</option>
                    <option value="Nagarkurnool">Nagarkurnool</option>
                    <option value="Nalgonda">Nalgonda</option>
                    <option value="Narayanpet">Narayanpet</option>
                    <option value="Nirmal">Nirmal</option>
                    <option value="Nizamabad">Nizamabad</option>
                    <option value="Peddapalli">Peddapalli</option>
                    <option value="Rajanna Sircilla">Rajanna Sircilla</option>
                    <option value="Ranga Reddy">Ranga Reddy</option>
                    <option value="Sangareddy">Sangareddy</option>
                    <option value="Siddipet">Siddipet</option>
                    <option value="Suryapet">Suryapet</option>
                    <option value="Vikarabad">Vikarabad</option>
                    <option value="Wanaparthy">Wanaparthy</option>
                    <option value="Warangal Rural">Warangal Rural</option>
                    <option value="Warangal Urban">Warangal Urban</option>
                    <option value="Yadadri Bhuvanagiri">Yadadri Bhuvanagiri</option>
                    <option value="Mulugu">Mulugu</option>
                </select>
                </div>
                <div className={style.optionBox}>
                    <label>Pincode</label><br />
                    <input className={style.pincode} type='number' value={ pin } name='pincode' onChange={ handlePin } />
                </div>
                <div className={style.nxtBtn}>
                    <NextBtn onClick={()=>dispatch(setPincode(pin))} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DistPin