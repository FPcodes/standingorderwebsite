import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header id="mainheader">
      <nav className={styles.headernav}>
      <Image
          src="/images/wcpara.png" // Path to your image
          alt="Example"
          width={115} // Desired width
          height={115} // Desired height
        />
        <ul className={styles.headerul}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/socials">Socials</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;