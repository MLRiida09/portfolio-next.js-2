"use client";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

function NavMenu({ assets, theme }) {
  return (
    <ul className="sidebar-menu">
      <li>
        <Link href="/">
        <Image src={theme === "dark" ? assets.user_dark : assets.user}
        width={20}
        height={20} alt="user" 
        />
        Home
        </Link>
      </li>
      <li>
        <Link href="/Certificates">
          <Image src={theme === "dark" ? assets.cap_dark : assets.cap}
           width={20}
            height={20} alt="certificates" 
            />
          Certificates
        </Link>
      </li>
      <li>
        <Link href="/Project">
          <Image src={theme === "dark" ? assets.project_dark : assets.project}
           width={20}
            height={20} alt="project" 
            />
          Project
        </Link>
      </li>
      <li>
        <Link href="/Blog">
          <Image src={theme === "dark" ? assets.blog_dark : assets.blog}
           width={20}
            height={20} alt="blog" 
            />
          Blog
        </Link>
      </li>
    </ul>
  );
}
export default NavMenu 
