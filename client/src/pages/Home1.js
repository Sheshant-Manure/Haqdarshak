import React from 'react'
import style from './Home1.module.css'

const Home1 = () => {
  return (
    <div className={style.container}>
        <p className={style.p1}>Welcome to</p>
        <img className={style.logo} width={'184px'} src='https://s3-alpha-sig.figma.com/img/3295/8156/e158d56b60027371bb00c5e5b755c330?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xly2u4dYFbYSZE98qbD4UZT5ugzr6u0EU9l4yrrt5udhnszTep3pArBmYnWyD25qLuLcB~n0xvYhm~4c~LnUlu1s6CuHPxhYF0ZBRxPCT5VCQEdWm16A7HCu9eKSR-lsCefZ7yKqWSJ2E5GmKfZEjhB8kxvCwD8VD8RPveKipYUV~kPPaAE1FT2plwo7bgCmSEDVxSkdXQ-HYMhi~sVib~~yMkyRzSvTMFt7vucHcNLyOVkzgddLZQEmPoHveltuebiFaYFnnX2zhV6G1B9-zZ1Hu-~GCJtAKmF0s5wma53PDMDQtLXnHU7ff3ZubV0IwzsGrwCyl4-iaTxkLe5SxA__'
             alt='logo' />
        <p className={style.p2}>Your profile has been created successfully!</p>
    </div>
  )
}

export default Home1