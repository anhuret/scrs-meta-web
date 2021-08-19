// Auther: Ruslan Sendecky <r.sendecky@gmail.com>
// All rights reserved
// Use of this source code is governed by the MIT license
// See LICENSE for details

import React, { useState, useContext, createContext } from 'react'

const Store = createContext(null)

export const StoreProvider = ({ children }) => {
  const [burst, setBurst] = React.useState(false)
  const [tip, setTip] = React.useState('')

  const store = {
    burst: [burst, setBurst],
    tip: [tip, setTip],
  }

  return <Store.Provider value={store}>{children}</Store.Provider>
}

export const useStore = (l) => {
  const {
    [l]: [data, setData],
  } = useContext(Store)

  return [data, setData]
}
