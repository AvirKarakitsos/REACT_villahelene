import { Link } from "react-router-dom"
import styles from "../assets/styles/Card.module.scss"
import { URL } from "../utils/constants"

function Card({value}) {
    return (
        <article className={styles.articles} key={value.id}>
            <Link to={"/accommodation/"+value.id}>
                <img className={styles.articles__image} src={URL+value.cover} alt="logement"/>
                <div className={styles.articles__title}>
                    <h2>{value.title}</h2>
                    <p>{`${value.space}m²`}</p>
                </div>
            </Link>
        </article>    
    )
}

export default Card