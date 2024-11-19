import styles from'../assets/styles/Header.module.scss'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useViewport } from '../utils/useViewport'

function Header() {
    const [home, setHome] = useState("")
    const [contact, setContact] = useState("")
    const location = useLocation()
    const windowWidth = useViewport()

    //Assign the good strings depending on the viewport
    useEffect(()=> {
        if(windowWidth <= 650) {
            setHome("ACCUEIL")
            setContact("CONTACT")
        } else {
            setHome("Accueil")
            setContact("Contact")
        }

    },[windowWidth])
    
    return (
        <header className={styles.header}>
            <h2>Villa Hélène</h2>
            <nav className={styles.header__navbar}>
                {location.pathname === "/"
                && <ul className={styles.header__navbar__list}>
                     <li>{home}</li>
                     <li><Link to='/contact'>{contact}</Link></li>
                </ul>
                }
                {location.pathname === "/contact"
                && <ul className={styles.header__navbar__list}>
                     <li><Link to='/'>{home}</Link></li>
                     <li>{contact}</li>
                </ul>
                }
                {location.pathname !== "/" && location.pathname !== "/contact"
                && <ul className={styles.header__navbar__list}>
                     <li><Link className={styles.link} to='/'>{home}</Link></li>
                     <li><Link className={styles.link} to='/contact'>{contact}</Link></li>
                </ul>
                }

            </nav>
        </header>
    )
}

export default Header