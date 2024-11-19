import styles from '../assets/styles/Slideshow.module.scss'
import arrowLeft from '../assets/images/arrow-left.png'
import arrowRight from '../assets/images/arrow-right.png'
import { useState } from 'react'
import { useViewport } from '../utils/useViewport'
import { URL } from '../utils/constants'

function Slideshow({images}) {
    let numberImages = images.length
    const [counter, setCounter] = useState(1)
    const windowWidth = useViewport()

    function handleNext() {
        if(counter === numberImages) setCounter(1)
        else setCounter((value) => (value+1))
    }

    function handlePrevious() {
    setCounter((value) => (value-1) ? value-1 : numberImages)
    }

    return (
        <div className={styles.slideContainer}>
            
            {numberImages !== 1
                ? images.map((image, index) => {
                if(counter === 1) {
                    if(index === numberImages-1) return <img height={415} key={index} src={URL+image} className={styles.images+" "+styles.activePrevious} alt="photos appartements"/>
                    
                } else if(counter === numberImages) {
                    if(index === 0) return <img height={415} key={index} src={URL+image} className={styles.images+" "+styles.activeNext} alt="photos appartements"/>
                }

                if(index === counter-1) return <img height={415} key={index} src={URL+image} className={styles.images+" "+styles.active} alt="photos appartements"/>
                else if(index === counter) return <img height={415} key={index} src={URL+image} className={styles.images+" "+styles.activeNext} alt="photos appartements"/>
                else if(index === counter-2) return <img height={415} key={index} src={URL+image} className={styles.images+" "+styles.activePrevious} alt="photos appartements"/>
                else return <img height={415} key={index} src={URL+image} className={styles.images} alt="photos appartements"/>
                })
                
                : <img height={415} src={URL+images[0]} className={styles.images+" "+styles.active} alt="photos appartements"/>
            }


            {numberImages !== 1 ? 
                <><button onClick={handlePrevious} className={styles.btn+" "+styles.previous}><img src={arrowLeft} alt="flèche de gauche"/></button>
                <button onClick={handleNext} className={styles.btn+" "+styles.next}><img src={arrowRight} alt="flèche de droite"/></button></>
                : null
            }
            
            {((windowWidth > 650) && (numberImages !== 1 )) ? <div className={styles.slide}>{counter+"/"+numberImages}</div> : null}
        </div>
    )
}

export default Slideshow