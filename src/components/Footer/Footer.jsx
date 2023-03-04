import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from '../../assets/images/Logo/logo.svg';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Logo />
      <p>&copy; {year} All rights reserved</p>
    </footer>
  )
}
