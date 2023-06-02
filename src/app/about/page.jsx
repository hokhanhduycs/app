import React from 'react'
import style from "./page.module.scss"
import Image from 'next/image'
import TeamKing from "public/team-working.png"
import Button from '@/components/button/Button'

const About = () => {
  return (
     <div className={style.about}>
        <div className={style.head}>
           <Image
              className={style.img}
              src={TeamKing}
              
              alt="team working"
           />
           <div className={style.text}>
              <h1 className={style.title}>Digital Storytellers</h1>
              <h2 className={style.desc}>
                 Handcrafting award winning digital experiences
              </h2>
           </div>
        </div>

        <div className={style.content}>
           <div className={style.item}>
              <h2 className={style.title}>Who are We?</h2>
              <p className={style.desc}>
                 To answer this question, let's take a look at
                 text-start.html—the starting point of our running example for
                 this article (a nice hummus recipe). You should save a copy of
                 this file on your local machine, as you'll need it for the
                 exercises later on. This document's body currently contains
                 multiple pieces of content. They aren't marked up in any way,
                 but they are separated with line breaks (Enter/Return pressed
                 to go onto the next line). However, when you open the document
                 in your browser, you'll see that the text appears as a big
                 chunk!
              </p>
           </div>
           <div className={style.item}>
              <h2 className={style.title}>What We Do?</h2>
              <p className={style.desc}>
                 To answer this question, let's take a look at
                 text-start.html—the starting point of our running example for
                 this article (a nice hummus recipe). You should save a copy of
                 this file on your local machine, as you'll need it for the
                 exercises later on. This document's body currently contains
                 multiple pieces of content. They aren't marked up in any way,
                 but they are separated with line breaks (Enter/Return pressed
                 to go onto the next line). However, when you open the document
                 in your browser, you'll see that the text appears as a big
                 chunk!
              </p>
              <Button text="Contact" url="/contact"/>
           </div>
        </div>
     </div>
  );
}

export default About