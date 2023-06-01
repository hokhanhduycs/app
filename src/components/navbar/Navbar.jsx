"use client";

import Link from "next/link";
import React from "react";

import style from "./navbar.module.scss";

const links = [
   {
      id: 1,
      title: "Home",
      url: "/",
   },
   {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
   },
   {
      id: 3,
      title: "Blog",
      url: "/blog",
   },
   {
      id: 4,
      title: "About",
      url: "/about",
   },
   {
      id: 5,
      title: "Contact",
      url: "/contact",
   },
   {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
   },
];
const Navbar = () => {
   return (
      <div className={style.nav}>
         <Link href="/" className={style.logo}>
            Khanh Duy
         </Link>
         <div className={style.menus}>
            {links.map((link) => (
               <Link href={link.url} key={link.id} className={style.menu}>
                  {link.title}
               </Link>
            ))}
            <button
               onClick={() => {
                  console.log("logged out");
               }}
               className={style.logout}
            >
               Logout
            </button>
         </div>
      </div>
   );
};

export default Navbar;
