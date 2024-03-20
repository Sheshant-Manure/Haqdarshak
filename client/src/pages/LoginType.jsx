import React from 'react'
import Location from './Location'
import Phone from './Phone'
import YojanaCard from './YojanaCard'
import { useSelector } from 'react-redux'

const LoginType = () => {

  const loginType = useSelector((state)=>state.loginOption.type)

  return (<>
    { loginType === 'newUser' ? <Location /> : loginType === 'phone' ? <Phone/> : <YojanaCard /> }
    </>)
}

export default LoginType