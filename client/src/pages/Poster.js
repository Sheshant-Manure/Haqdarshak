import React from 'react'
import style from './Poster.module.css'
import { useDispatch } from 'react-redux'
import { nextPageIndex } from '../redux/slices/pageIndex'

const Poster = () => {

  const dispatch = useDispatch()
  const nextPage = () => {
    dispatch(nextPageIndex())
  }

  return (
    <div className={style.container} onClick={nextPage}>
        <h1 className={style.title}>Getting<br/>benefits is<br/>now easy!</h1>
        <div className={style.line}></div>
        <img className={style.poster} src='https://s3-alpha-sig.figma.com/img/e933/55bf/cbeb65d70faad72abacdf8b8bbea0383?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6XbilwpB6mfRIqR8fuIfzb40DCY9B~IenJfFV8vPBLQauapnGQj7OOHU~ruAYi54QvQthClUl8hsWjscz5rsUdYm5xBBRI4rIsqgqk-ioUGQ~wvv~X4ZUmlQ3T7~SIlnpTib6kjXkB9Ih4wwwcweKYrPu2TQhqr5R-H0HRIu9ljXbOcI6owwsjDi0I~J-VjWZOEXYy5qdxLPwETr3wPKBGCBiCnQVlsQZrZj6uBE55IgY7zpoBZZTi8cVC-J5pEgeVbhCtJq9k~UdLmuuvZ2ZwPzjAitoNzAd0tIjXIPGoKb~pr9CVFtkLFTirwRtfVkkjwxOroaiLjT7Z42AN0Rg__'
            alt='poster' />
    </div>
  )
}

export default Poster