import React from 'react'
import { Echo } from '../comps/echo.js'
import css from './home.module.css'

export const Home = () => (
  <div className={css.home}>
    <header className={css.header}>
      <div className={css.prompt}>
        SCRS@cardano:~<span className={css.blink}>$</span>
      </div>
      <div className={css.logo}>
        <img src={'/cardano.svg'} className={css.spin} />
      </div>
    </header>

    <main className={css.main}>
      <Echo />
    </main>

    <footer className={css.footer}>
      <span>&copy; Copyright 2021, Southern Cross</span>
    </footer>
  </div>
)
