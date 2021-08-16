import React, { useState } from 'react'

import css from './home.module.css'

export const Footer = () => {
  return (
    <footer className={css.foot}>
      <span>Слава Україні! Героям слава!</span>
      <span>&copy; Copyright 2021, Southern Cross</span>
    </footer>
  )
}
