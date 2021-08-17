import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/store.js'
import css from '../style/space.module.css'

export const Space = () => {
  const [tip, setTip] = useStore('tip')
  const [burst, setBurst] = useStore('burst')
  useEffect(() => setTip(''), [])
  const navigate = useNavigate()

  return (
    <section className={css.space}>
      <figure
        onClick={() => navigate('/metadata')}
        onMouseEnter={() => setTip('Metadata')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.start}`}
      >
        <img src={'/images/star.svg'} />
      </figure>
      <figure
        onClick={() => navigate('/updates')}
        onMouseEnter={() => setTip('Updates')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.starb}`}
      >
        <img src={'/images/star.svg'} />
      </figure>
      <figure
        onClick={() => navigate('/statement')}
        onMouseEnter={() => setTip('Statement')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.starl}`}
      >
        <img src={'/images/star.svg'} />
      </figure>
      <figure
        onClick={() => navigate('/statistics')}
        onMouseEnter={() => setTip('Statistics')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.starr}`}
      >
        <img src={'/images/star.svg'} />
      </figure>
      <figure
        onClick={() => navigate('/about')}
        onMouseEnter={() => setTip('About')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.starm}`}
      >
        <img src={'/images/star.svg'} />
      </figure>
    </section>
  )
}
