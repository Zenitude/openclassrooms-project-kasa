import React, { useState } from 'react';
import styles from './Carousel.module.css';
import { ReactComponent as Previous } from '../../assets/images/carousel/previous.svg';
import { ReactComponent as Next } from '../../assets/images/carousel/next.svg';

export default function Carousel({pictures}) {
    const [ idImage, setIdImage ] = useState(0);

    const styleImage = {
        transition: `transform 1s ease-in-out`,
        transform: `translateX(-${idImage * 100}%)`
    }

    function switchImage(position, target) {
        if(target.getAttribute('id') === 'previous')
        {
            setIdImage(position- 1);
            position === 0
            ? setIdImage(pictures.length - 1)
            : setIdImage(position - 1);
        } else {
            setIdImage(position + 1);
            position === pictures.length - 1
            ? setIdImage(0)
            : setIdImage(position + 1);
        }
    }
   
    return (
        <div className={styles.carousel}>
            {
                pictures.length > 1
                && (
                    <button 
                        className={styles.previous} 
                        id='previous'
                        aria-label='previous image'
                        onClick={(event) => switchImage(idImage, event.target.parentElement)}
                    >
                        <Previous className={styles.arrows} />
                    </button>
                )
            }
            

            <figure className={styles.figures} style={styleImage}>
                {
                    pictures.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            data-index={pictures.indexOf(image)}
                            alt={"image du logement"}
                            className={styles.images}
                            aria-hidden
                        />
                    ))
                }
            </figure>

            {
                pictures.length > 1
                && (
                    <>
                        <button 
                            className={styles.next} 
                            id='next'
                            aria-label="next image"
                            onClick={(event) => switchImage(idImage, event.target.parentElement)}
                        >
                            <Next className={styles.arrows} />
                        </button>
                        <div className={styles.positionImage}><span>{idImage + 1}</span> / {pictures.length}<span></span></div>
                    </>
                )
            }
            
            
        </div>
    )
}
