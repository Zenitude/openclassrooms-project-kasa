import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import datas from '../../utils/datas/housing.json';
import styles from './Housing.module.css';
import Carousel from '../../components/Carousel/Carousel';
import Tag from '../../components/Tag/Tag';
import RatingStars from '../../components/RatingStars/RatingStars';
import Host from '../../components/Host/Host';
import Dropdown from '../../components/Dropdown/Dropdown';

export default function Housing() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ house ] = datas.filter(data => data.id === id);
    
    useEffect(() => {
        if(house === undefined) {
            navigate('/error-house');
        }
    })

    if(typeof house === 'object') {
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
                        <RatingStars rating={house.rating} />
                        <Host name={house.host.name} picture={house.host.picture}/>
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
