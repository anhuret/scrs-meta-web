import React from 'react'
import ReactDOM from 'react-dom'
import styles from '../pages/home.module.css'

export const Echo = () => (
  <div className={styles.echo}>
    <pre>
      cat {'<<'} EOF {'>'} Message.txt
      <br />
      <br /> Welcome to Southern Cross !!!
      <br /> Secure and reliable Cardano pool
      <br /> Forged and made possible by experienced DevOps geeks
      <br /> Our goal is to make this a good home for your ADA
      <br /> Stake with us for your piece of mind
      <br />
      <br />
      EOF
    </pre>
  </div>
)
