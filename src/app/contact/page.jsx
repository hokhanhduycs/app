import React from 'react'
import Image from 'next/image'

import style from "./page.module.scss"
import ContactImg from "public/contact.png";
import Button from '@/components/button/Button';

const Contact = () => {
  return (
     <div className={style.contact}>
        <h1 className={style.title}>Let's keep in touch</h1>
        <div className={style.content}>
           <div className={style.imgContainer}>
              <Image src={ContactImg} alt="contact" className={style.img} />
           </div>
           <form className={style.form}>
              <input type="text" placeholder="Name" className={style.input} />
              <input type="text" placeholder="Email" className={style.input} />
              <textarea
                 placeholder="Message"
                 className={style.textAres}
                 cols="30"
                 rows="10"
              ></textarea>
              <Button url="/#" text="Send"/>
           </form>
        </div>
     </div>
  );
}

export default Contact