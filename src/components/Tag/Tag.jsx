import React from 'react';
import styles from './Tag.module.css';

export default function Tag({tag}) {
  return (
    <div className={styles.tag}>
      {tag}
    </div>
  )
}
