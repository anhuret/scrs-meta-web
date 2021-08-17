import React, { useState } from 'react'
import { useStore } from '../store/store.js'
import css from '../style/statement.module.css'

export const Statement = () => {
  const [tip, setTip] = useStore('tip')

  return (
    <section className={css.statement}>
      <p>Welcome to Southern Cross !!!</p>
      <br />
      <br />
      <p>Secure, robast and reliable Cardano pool</p>
      <p>Top financial enterprise level security</p>
      <p>We strive for 24/7 365 operational uptime</p>
      <p>Redundant, containerised infrastructure</p>
      <br />
      <p>It was forged and made possible by experienced DevOps engineers</p>
      <p>Our goal is to make this pool a profitable home for your ADA</p>
      <p>Stake with us for your piece of mind and beautiful experience</p>
    </section>
  )
}
