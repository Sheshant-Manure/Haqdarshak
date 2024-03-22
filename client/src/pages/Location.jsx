import React from 'react';
import style from './Location.module.css';
import BackBtn from '../components/BackBtn';
import NextBtn from '../components/NextBtn'
import { useDispatch } from 'react-redux';
import { setLatitude, setLongitude, setState } from '../redux/slices/location';

const Location = () => {
  
  const dispatch = useDispatch();
  const getUserLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(setLatitude(position.coords.latitude));
                dispatch(setLongitude(position.coords.longitude));
            }
        );
      }
  }
  
  return (
    <div className={style.container}>
      <BackBtn />
      <h1 className={style.title}>Choose location</h1>
      <div className={style.location}>
        <select className={style.location} onChange={(e)=>dispatch(setState(e.target.value))}>
          <option value="">Select State</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <div className={style.ORcontainer}>
        <div className={style.line}></div>
        <h1 className={style.OR}>OR</h1>
        <div className={style.line}></div>
      </div>
      </div>
      <button className={style.currentLocation} onClick={ () => getUserLocation() }>
        Use current location
      </button>
      <p className={style.message}>This is used to give you information more accurate to your area.</p>
      <div className={style.nextBtn}>
        <NextBtn />
      </div>
    </div>
  );
};

export default Location;