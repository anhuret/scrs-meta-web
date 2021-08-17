import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/store.js'
import css from '../style/space.module.css'

export const Space = () => {
  const [tip, setTip] = useStore('tip')
  useEffect(() => setTip(''), [])
  const navigate = useNavigate()
  return (
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
        onClick={() => navigate('/statement')}
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
  )
}
