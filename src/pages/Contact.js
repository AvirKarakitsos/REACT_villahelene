import styles from "../assets/styles/Contact.module.scss"
import Layout from "../Components/layouts/Layout"
import map from "../assets/images/map.png"

function Contact() {
    

    return (
        <Layout>
            <main className={styles.container}>
               <section className={styles.container__info}>
                    <p>Pour tout renseignement</p>
                    <p>Nous contacter à ce numéro : <strong>+33 56 78 89 21</strong></p>
               </section>
               <section className={styles.container__map}>
                    <p>1229 4 Rue Du Prince Ramaharo - Ampasambazaha - Bp</p>
                    <p>Fianarantsoa 301 Madagascar</p>
                    <div className={styles.container__map__image}>
                        <img src={map} alt="localisation de la villa"/>
                    </div>
               </section>
            </main>
        </Layout>
    )
}

export default Contact