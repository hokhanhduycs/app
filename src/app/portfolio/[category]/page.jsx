import React from 'react'

import style from "./page.module.scss"
import Image from 'next/image'
import Button from '@/components/button/Button'
const Category = ({params}) => {
  return (
     <div className={style.category}>
        <h2 className={style.title}>{params.category}</h2>
        <div className={style.items}>
           <div className={style.item}>
              <div className={style.content}>
                 <h3 className={style.title}>Test title</h3>
                 <p className={style.desc}>Test descripsion</p>
                 <Button url="#" text="See More" />
              </div>
              <div className={style.imgContainer}>
                 <Image
                    className={style.img}
                    src="/test.png"
                    width={500}
                    height={500}
                    alt="test"
                 />
              </div>
           </div>

           <div className={style.item}>
              <div className={style.content}>
                 <h3 className={style.title}>Test title</h3>
                 <p className={style.desc}>Test descripsion</p>
                 <Button url="#" text="See More" />
              </div>
              <div className={style.imgContainer}>
                 <Image
                    className={style.img}
                    src="/test.png"
                    width={500}
                    height={500}
                    alt="test"
                 />
              </div>
           </div>

           <div className={style.item}>
              <div className={style.content}>
                 <h3 className={style.title}>Test title</h3>
                 <p className={style.desc}>Test descripsion</p>
                 <Button url="#" text="See More" />
              </div>
              <div className={style.imgContainer}>
                 <Image
                    className={style.img}
                    src="/test.png"
                    width={400}
                    height={400}
                    alt="test"
                 />
              </div>
           </div>
        </div>
     </div>
  );
}

export default Category