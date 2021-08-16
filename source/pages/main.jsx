import React, { useState } from 'react'
import { useStore } from '../store/store.js'
import css from './home.module.css'

export const Main = () => {
  const [tip, setTip] = useStore('tip')

  return (
    <main className={css.main}>
      <section className={css.space}>
        <figure
          onMouseEnter={() => setTip('Metadata')}
          onMouseLeave={() => setTip('')}
          className={`${css.star} ${css.start}`}
        >
          <img src={'/images/star.svg'} />
        </figure>
        <figure
          onMouseEnter={() => setTip('Updates')}
          onMouseLeave={() => setTip('')}
          className={`${css.star} ${css.starb}`}
        >
          <img src={'/images/star.svg'} />
        </figure>
        <figure
          onMouseEnter={() => setTip('Statement')}
          onMouseLeave={() => setTip('')}
          className={`${css.star} ${css.starl}`}
        >
          <img src={'/images/star.svg'} />
        </figure>
        <figure
          onMouseEnter={() => setTip('Statistics')}
          onMouseLeave={() => setTip('')}
          className={`${css.star} ${css.starr}`}
        >
          <img src={'/images/star.svg'} />
        </figure>
        <figure
          onMouseEnter={() => setTip('About')}
          onMouseLeave={() => setTip('')}
          className={`${css.star} ${css.starm}`}
        >
          <img src={'/images/star.svg'} />
        </figure>
      </section>
    </main>
  )
}
