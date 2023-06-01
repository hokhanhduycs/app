import React from "react";

import style from "./footer.module.scss"
import Image from "next/image";

const Footer = () => {
   return (
      <div className={style.footer}>
         <div className={style.license}>
            Copyright © 2023 Khanh Duy. All rights reserved.
         </div>
         <div className={style.social}>
            <Image
               src="/1.png"
               width={15}
               height={15}
               className={style.icon}
               alt="fb"
            />
            <Image
               src="/2.png"
               width={15}
               height={15}
               className={style.icon}
               alt="ig"
            />
            <Image
               src="/3.png"
               width={15}
               height={15}
               className={style.icon}
               alt="w"
            />
            <Image
               src="/4.png"
               width={15}
               height={15}
               className={style.icon}
               alt="yb"
            />
         </div>
      </div>
   );
};

export default Footer;
