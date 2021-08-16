import React, { useState } from 'react'
import { useStore } from '../store/store.js'
import css from './home.module.css'

export const Header = () => {
  const [tip, setTip] = useStore('tip')

  return (
    <header className={css.header}>
      <div className={css.prompt}>
        SCRS@cardano:~<span className={css.blink}>$</span>
      </div>
      <div className={css.tip}>{tip}</div>
      <div className={css.logo}>
        <img src={'/images/cardano.svg'} className={css.spin} />
      </div>
    </header>
  )
}
