import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ id, title }) {


    return (
        <Link className={styles.hostingCard} to={`/housing/${id}`}>
            <h2 className={styles.hostingTitle}>{title}</h2>
        </Link>
    )
}
