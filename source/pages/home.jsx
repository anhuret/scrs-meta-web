import React from 'react'
import styles from './home.module.css'
import logo from '../../public/cardano.svg'
import { Meta } from '../comps/meta.js'
import { Echo } from '../comps/echo.js'
import { Header } from '../comps/header.js'

export const Home = () => {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<Echo />
				<p className={styles.echo}>&#38;&#38;</p>
				<Meta />
			</main>

			<footer className={styles.footer}>
				<span>&copy; Copyright 2021, Southern Cross</span>
			</footer>
		</div>
	)
}
