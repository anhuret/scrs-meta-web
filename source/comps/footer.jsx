import React from 'react'

import css from '../style/footer.module.css'

export const Footer = () => {
  let d = new Date().getFullYear()
  return (
    <footer className={css.footer}>
      <span>Слава Україні! Героям слава!</span>
      <span>Southern Cross - Cardano Pool, {d}</span>
    </footer>
  )
}
