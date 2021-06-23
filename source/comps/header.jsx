import React from 'react'
import ReactDOM from 'react-dom'
import styles from '../pages/home.module.css'

export const Header = () => (
	<header className={styles.header}>
		<div className={styles.prompt}>
			SCRS@cardano:~<span className={styles.blink}>$</span>
		</div>
		<div className={styles.gear}>
			<img src={'/cardano.svg'} className={styles.logo} />
		</div>
	</header>
)
