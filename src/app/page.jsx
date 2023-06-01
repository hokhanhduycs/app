import Image from 'next/image'
import style from './page.module.scss'
import Hero from "public/hero.png"

export default function Home() {
  return (
     <div className={style.home}>
        <div className={style.text}>
           <h1 className={style.title}>
              Compiled client and server successfully in 1088 ms.
           </h1>
           <p className={style.desc}>
              Warn Fast Refresh had to perform a full reload when
              src\app\page.module.scss.
           </p>
           <button className={style.button}>See Our Word</button>
        </div>
        <Image className={style.img} src={Hero} alt="image home" />
     </div>
  );
}
