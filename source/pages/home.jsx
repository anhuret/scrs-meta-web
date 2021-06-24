import React from 'react'
import styles from './home.module.css'
import logo from '../../public/cardano.svg'
import { Meta } from '../comps/meta.js'
import { Echo } from '../comps/echo.js'
import { Header } from '../comps/header.js'

export const Home = () => (
  <div className={styles.home}>
    <Header />

    <main className={styles.main}>
      <Echo />
      <span className={styles.echo}>&#38;&#38;</span>
      <Meta />
    </main>

    <footer className={styles.footer}>
      <span>&copy; Copyright 2021, Southern Cross</span>
    </footer>
  </div>
)
