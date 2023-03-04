import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/images/Logo/logo.svg';

export default function Header() {
    return (
        <header className={styles.header}>
            <NavLink to='/'><Logo /></NavLink>

            <nav>
                <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.link} to='/'>Accueil</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.link} to='/about'>À propos</NavLink>   
            </nav>
        </header>
    )
}
