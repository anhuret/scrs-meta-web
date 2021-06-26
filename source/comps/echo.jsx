import React from 'react'
import ReactDOM from 'react-dom'
import css from '../pages/home.module.css'

export const Echo = () => (
  <div className={css.echo}>
    <pre>
      cat {'<<'} EOF {'>'} PoolStatement.txt
      <br />
      <br /> Welcome to Southern Cross !!!
      <br />
      <br /> Secure and reliable Cardano pool
      <br /> Forged and made possible by
      <br /> Experienced DevOps geeks
      <br /> Our life goal is to make this
      <br /> A profitable home for your ADA
      <br /> Stake with us for your piece of mind
      <br />
      <br />
      EOF
    </pre>
  </div>
)
