import styles from '../assets/styles/Home.module.scss'
import background from '../assets/images/videofile.mp4'
import jsonFile from '../assets/api/jsonData.json'
import Layout from '../Components/layouts/Layout'
import Card from '../Components/Card'
import { useViewport } from '../utils/useViewport'

function Home() {
    const windowWidth = useViewport()

    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.background}>
                    <video className={styles.background__image} src={background} autoPlay muted loop/>
                    {windowWidth <= 650 ? <h1 className={styles.background__title}>Villa<br/>Hélène</h1>
                    : <h1 className={styles.background__title}>Villa Hélène</h1>
                    }
                </div>
                <section className={styles.gallery}>
                    <div className={styles.gallery__container}>
                        {jsonFile.map((inputValue => <Card value={inputValue} key={inputValue.id} />))}
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Home