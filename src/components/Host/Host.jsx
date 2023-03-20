import React from 'react';
import styles from './Host.module.css';

export default function Host({name, picture}) {
  return (
    <div className={styles.host}>
       <h3><span>{name.split(' ')[0]}</span> <span>{name.split(' ')[1]}</span></h3>
       <img src={picture} alt={`avatar de ${name}`} />
    </div>
  )
}
