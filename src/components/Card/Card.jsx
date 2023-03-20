import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ id, title, cover }) {

    const coverCard = {
        background: `var(--linear), url(${cover}) no-repeat center`,
        backgroundSize: 'cover'
    }

    return (
        <Link className={styles.hostingCard} to={`/housing/${id}`} style={coverCard}>
            <h2>{title}</h2>
        </Link>
    )
}
