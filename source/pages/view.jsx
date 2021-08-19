import React, { useState, useEffect } from 'react'
import Mark from 'react-markdown'
import { useStore } from '../store/store.js'
import { cap } from '../entry/utils.js'
import css from '../style/view.module.css'

export const View = (props) => {
  const [mark, setMark] = useState('')
  const [tip, setTip] = useStore('tip')
  useEffect(() => {
    setTip(cap(props.name))
    getMark(props.name).then(setMark).catch(console.log)
  }, [])

  return (
    <section className={css.view}>
      <pre>
        <Mark>{mark}</Mark>
      </pre>
    </section>
  )
}

const getMark = async (name) => {
  let path = `/markdown/${name}.md`
  let r = await fetch(path)
  if (!r.ok) {
    throw new Error(await r.text())
  }
  return await r.text()
}
