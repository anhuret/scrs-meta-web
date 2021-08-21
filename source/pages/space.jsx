import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/store.js'
import css from '../style/space.module.css'

export const Space = () => {
  const [tip, setTip] = useStore('tip')
  const [burst, setBurst] = useStore('burst')
  useEffect(() => setTip(''), [])
  const navigate = useNavigate()
  const star = '/images/star.svg'

  return (
    <section className={css.space}>
      <figure
        onClick={() => navigate('/about')}
        onMouseEnter={() => setTip('About')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.start}`}
      >
        <span className={`${burst ? css.show : ''} ${css.tip}`}> About </span>
        <img src={star} />
      </figure>
      <figure
        onClick={() => navigate('/updates')}
        onMouseEnter={() => setTip('Updates')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.starb}`}
      >
        <span className={`${burst ? css.show : ''} ${css.tip}`}>Updates</span>
        <img src={star} />
      </figure>
      <figure
        onClick={() => navigate('/statement')}
        onMouseEnter={() => setTip('Statement')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.starl}`}
      >
        <span className={`${burst ? css.show : ''} ${css.tip}`}>Statement</span>
        <img src={star} />
      </figure>
      <figure
        onClick={() => navigate('/statistics')}
        onMouseEnter={() => setTip('Statistics')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.starr}`}
      >
        <span className={`${burst ? css.show : ''} ${css.tip}`}>
          Statistics
        </span>
        <img src={star} />
      </figure>
      <figure
        onClick={() => navigate('/metadata')}
        onMouseEnter={() => setTip('Metadata')}
        onMouseLeave={() => setTip('')}
        className={`${burst ? css.burst : ''} ${css.star} ${css.starm}`}
      >
        <span className={`${burst ? css.show : ''} ${css.tip}`}>
          {' '}
          Metadata{' '}
        </span>
        <img src={star} />
      </figure>
    </section>
  )
}
