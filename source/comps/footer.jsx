import React from 'react'

import css from '../style/footer.module.css'

export const Footer = () => {
  let d = new Date()
  let p = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  return (
    <footer className={css.footer}>
      <span>Слава Україні! Героям слава!</span>
      <span>Southern Cross - Cardano Pool, {p}</span>
    </footer>
  )
}
