import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../assets/images/Logo/Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Logo fill={styles.fill}/>
        <p className={styles.p}>&copy; {year} All rights reserved</p>
    </footer>
  )
}
