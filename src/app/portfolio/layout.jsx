import React from 'react'
import style from "./page.module.scss"
const Layout = ({children}) => {
  return (
    <div>
        <h1 className={style.mainTitle}>Out Words</h1>
        {children}
    </div>
  )
}

export default Layout