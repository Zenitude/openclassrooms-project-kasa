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
                        id='previous'
                        className={styles.previous}
                        aria-label='previous image'
                        onClick={(event) => switchImage(idImage, event.target.parentElement)}
                    >
                        <Previous className={styles.arrows} />
                    </button>
                )
            }
            

            <figure class={styles.figure} style={styleImage}>
                {
                    pictures.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            data-index={pictures.indexOf(image)}
                            alt={"image du logement"}
                            aria-hidden
                            className={styles.images}
                        />
                    ))
                }
            </figure>

            {
                pictures.length > 1
                && (
                    <>
                        <button  
                            id='next'
                            aria-label="next image"
                            className={styles.next}
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
