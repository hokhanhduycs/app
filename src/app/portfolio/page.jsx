import React from 'react'

import style from "./page.module.scss"
import Link from 'next/link'
const Portfolio = () => {
  return (
     <div className={style.portfolio}>
        <h2 className={style.title}>Choose a gallery</h2>
        <div className={style.items}>
           <Link href="/portfolio/websites" className={style.item}>
              <span className={style.title}>Websites</span>
           </Link>
           <Link href="/portfolio/motions" className={style.item}>
              <span className={style.title}>Motions</span>
           </Link>
           <Link href="/portfolio/designs" className={style.item}>
              <span className={style.title}>Design</span>
           </Link>
        </div>
     </div>
  );
}

export default Portfolio