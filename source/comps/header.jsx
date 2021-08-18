import React from 'react'
import { useStore } from '../store/store.js'
import { useNavigate } from 'react-router-dom'
import css from '../style/header.module.css'

export const Header = () => {
  const [tip, setTip] = useStore('tip')
  const [burst, setBurst] = useStore('burst')
  const navigate = useNavigate()
  const logoClick = () => {
    setTip('Southern Cross')
    navigate('/')
  }

  return (
    <header className={css.header}>
      <div className={css.prompt}>
        SCRS@cardano:~<span className={css.blink}>$</span>
      </div>
      <div className={css.tip}>{tip}</div>
      <figure
        onClick={logoClick}
        className={css.logo}
        onMouseEnter={() => setBurst(true)}
        onMouseLeave={() => setBurst(false)}
      >
        <img src={'/images/cardano.svg'} className={css.spin} />
      </figure>
    </header>
  )
}
