import React from 'react';
import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';
import styles from './About.module.css';
import dropdowns from '../../utils/datas/about.json';

export default function About() {
  return (
    <main>
      <Banner page={'about'} />
      <div className={styles.containerDropdown}>
        {
          dropdowns.map(({ summary, content }) => (
            <Dropdown summary={summary} content={content}/>
          ))
        }
      </div>
    </main>
  )
}
