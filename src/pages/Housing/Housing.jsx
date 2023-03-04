import React from 'react';
import { useParams } from 'react-router-dom';
import { TbStarFilled, TbStar } from "react-icons/tb";
import datas from '../../utils/datas/housing.json';
import styles from './Housing.module.css';
import Carousel from '../../components/Carousel/Carousel';
import Tag from '../../components/Tag/Tag';
import Dropdown from '../../components/Dropdown/Dropdown';

export default function Housing() {
    const { id } = useParams();
    const [ house ] = datas.filter(data => data.id === id);
    let stars = [];

    function displayStars(nbStars) {
        
        for(let i = 1 ; i <= nbStars ; i++)
        {
            stars.push(1);
        }
    
        for(let i = 1 ; i <= 5 - nbStars ; i++)
        {
            stars.push(0);
        }
        
    }
   
    if(typeof house !== 'object')
    {
        return ('hoho')
    } else {
        return (
        
            <main>
    
                <Carousel pictures={house.pictures}/>

                <div className={styles.infos}>
                    <div className={styles.titlesAndTags}>
                        <div>
                            <h1>{house.title}</h1>
                            <h2>{house.location}</h2>
                        </div>
                        <div>
                            {
                                house.tags.map(tag => <Tag key={`${house.id}-${tag}`} tag={tag} />)
                            }
                        </div>
                    </div>

                    <div className={styles.starsAndProfile}>                    
                        <div>
                            {displayStars(house.rating)}
                            {
                                stars.map((el) => (
                                    el === 1
                                    ? (<TbStarFilled />)
                                    : (<TbStar />)
                                ))
                            }
                        </div>
                        <div>
                            <h3><span>{house.host.name.split(' ')[0]}</span> <span>{house.host.name.split(' ')[1]}</span></h3>
                            <img src={house.host.picture} alt={`avatar de ${house.host.name}`} />
                        </div>
                    </div>
                </div>
    
                <div className={styles.dropdowns}>
                    <Dropdown summary={`Description`} content={house.description}/>
                    <Dropdown summary={`Équipements`} content={house.equipments}/>
                </div>
    
            </main>
        )
    }
    
}
