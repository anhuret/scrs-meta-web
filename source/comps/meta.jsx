import React from 'react'
import ReactDOM from 'react-dom'
import css from '../pages/home.module.css'

export const Meta = () => (
  <div className={css.echo}>
    <span> cat poolMetadata.json</span>
    {/* prettier-ignore */}
    <pre>
			<br/> &#123;
			<br/>  "ticker": "SCRS",
			<br/>  "name": "Southern Cross",
			<br/>  "description": "Robust pool from the heart of a desert",
			<br/>  "homepage": "https://scrs.irregular.one/"
			<br/> &#125;
		</pre>
  </div>
)
