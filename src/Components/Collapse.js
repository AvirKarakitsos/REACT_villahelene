import styles from "../assets/styles/Collapse.module.scss"
import arrow from "../assets/images/arrow.png"
import { useState } from "react"

function Collapse({inputValue}) {
    const [isOpen, setIsOpen] = useState(false)
    let number = inputValue.content.length
    
    return (
        <div className={styles.bar}>     
            <div className={styles.bar__title}>
                <p>{inputValue.title}</p>
                { isOpen
                    ? <img src={arrow} alt="flèche" onClick={() => setIsOpen(false)}/>
                    : <img 
                        className={styles.iconeOpen} 
                        src={arrow} 
                        alt="flèche" 
                        onClick={() => setIsOpen(true)}/>
                    }
            </div>
           
            <div 
                className={isOpen 
                    ? 
                    (((number > 3) && (number < 10)) || (number > 250)) 
                        ? styles.collapseOpen160+" "+styles.bar__content
                        : styles.collapseOpen90+" "+styles.bar__content
                    : styles.bar__content}>
                {Array.isArray(inputValue.content) ? 
                    <ul>
                        {inputValue.content.map((equipment,index)=><li key={index}>{equipment}</li>)}
                    </ul> 
                    : <p>{inputValue.content}</p>}
            </div>
        </div>
        )
    }

export default Collapse