import React from 'react'
import { useStore } from '../store/store.js'
import { useNavigate } from 'react-router-dom'
import css from '../style/header.module.css'

export const Header = () => {
  const [tip, setTip] = useStore('tip')
  const navigate = useNavigate()
  return (
    <header className={css.header}>
      <div className={css.prompt}>
        SCRS@cardano:~<span className={css.blink}>$</span>
      </div>
      <div className={css.tip}>{tip}</div>
      <figure onClick={() => navigate('/')} className={css.logo}>
        <img src={'/images/cardano.svg'} className={css.spin} />
      </figure>
    </header>
  )
}
