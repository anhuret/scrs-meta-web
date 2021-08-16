import React from 'react'
import { Echo } from '../comps/echo.js'
import css from './home.module.css'

import { Draw } from './canvas.js'

export const Home = () => (
  <div className={css.home}>
    <header className={css.header}>
      <div className={css.prompt}>
        SCRS@cardano:~<span className={css.blink}>$</span>
      </div>
      <div className={css.logo}>
        <img src={'/images/cardano.svg'} className={css.spin} />
      </div>
    </header>

    <main className={css.main}>
      <section className={css.space}>
        <figure className={css.start}>
          <img src={'/images/star.svg'} />
        </figure>
        <figure className={css.starb}>
          <img src={'/images/star.svg'} />
        </figure>
        <figure className={css.starl}>
          <img src={'/images/star.svg'} />
        </figure>
        <figure className={css.starr}>
          <img src={'/images/star.svg'} />
        </figure>
        <figure className={css.starm}>
          <img src={'/images/star.svg'} />
        </figure>
      </section>
    </main>

    <footer className={css.footer}>
      <span>&copy; Copyright 2021, Southern Cross</span>
    </footer>
  </div>
)
