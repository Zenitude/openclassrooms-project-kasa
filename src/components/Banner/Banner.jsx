import React from 'react';
import styles from './Banner.module.css';
import bgAbout from '../../assets/images/banners/banner-about.webp';
import bgHome from '../../assets/images/banners/banner-home.webp';

export default function Banner({page}) {

  const bgStyle = {
    background: `var(--linear), url("${page === 'home' ? bgHome : bgAbout}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
  }

  return (
    <section className={styles.banner} style={bgStyle}>
        {page === 'home' && <h1 className={styles.h1}>Chez vous, partout et ailleurs</h1>}
    </section>
  )
}
