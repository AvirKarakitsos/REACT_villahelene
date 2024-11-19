import { Link } from "react-router-dom"
import styles from '../assets/styles/Error.module.scss'
import Layout from "../Components/layouts/Layout"

function Error() {
    return (
        <Layout>
            <div className={styles.container}>
                <p className={styles.container__error}>404</p>
                <p className={styles.container__message}>Oups! La page que vous demandez n'existe pas.</p>
                <p className={styles.container__link}><Link to="/">Retourner sur la page d'accueil</Link></p>
            </div>
        </Layout>
    )
}

export default Error