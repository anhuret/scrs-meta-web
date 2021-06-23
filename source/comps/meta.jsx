import React from 'react'
import ReactDOM from 'react-dom'
import styles from '../pages/home.module.css'

export const Meta = () => (
	<div className={styles.echo}>
		<span> cat poolMetadata.json</span>
		{/* prettier-ignore */}
		<pre>
		  <br/>{"{"}
			<br/>    "ticker": "SCRS",
			<br/>    "name": "Southern Cross",
			<br/>    "description": "Secure, reliable pool from the heart of a lifelesslifeless  desert",
			<br/>    "homepage": "https://scrs.irregular.one/"
			<br/>{"}"}
	  </pre>
	</div>
)
