import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import {ReactComponent as Arrow } from '../../assets/images/dropdown/arrow.svg'

export default function Dropdown({summary, content}) {
    const [ rotate, setRotate ] = useState(true);

    const styleArrow = {
        transform: rotate ? 'rotate(0)' : 'rotate(180deg)'
    }

    return (
        <details className={styles.details}>
            <summary className={styles.summary} onClick={() => setRotate(!rotate)}>{summary} <Arrow style={styleArrow} /></summary>
            <p className={styles.content}>{content}</p>
        </details>
    )
}
