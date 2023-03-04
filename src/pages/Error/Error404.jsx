import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SVG404} from '../../assets/images/error/404.svg';
import styles from './Error404.module.css';

export default function Error404() {
  return (
    <main className={styles.main}>
      <SVG404 />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className={styles.link} to='/'>Retourner sur la page d'accueil</Link>
    </main>
  )
}
