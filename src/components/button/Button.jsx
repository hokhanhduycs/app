import Link from 'next/link';
import React from 'react'
import style from "./button.module.scss"

const Button = ({text, url}) => {
  return (
     <Link href={url}>
        <button className={style.button}>{text}</button>
     </Link>
  );
}

export default Button