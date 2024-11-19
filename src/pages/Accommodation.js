import styles from '../assets/styles/Accommodation.module.scss'
import jsonFile from "../assets/api/jsonData.json"
import Layout from "../Components/layouts/Layout"
import Slideshow from "../Components/Slideshow"
import Collapse from "../Components/Collapse"
import { Navigate, useParams } from "react-router-dom"

function Accommodation() {
    const param = useParams()
    const dataArray = jsonFile.filter((value) => {
        return parseInt(value.id) === parseInt(param.id)
    })
    
    let data = null
    let collapses = []

    //Test if th url is correct
    if(dataArray.length === 1) {
        data = dataArray[0] 
    } else {
        return (<Navigate to="/error"/>)
    }
   
    collapses = [
        {
            id: 0,
            title: "Description",
            content: data.description, 
        },
        {
            id: 1,
            title: "Equipements",
            content: data.piece
        }
    ]

    return (
        <Layout>
            <div className={styles.container}>
                <Slideshow images={data.pictures}/>
                <div className={styles.content}>
                    <section className={styles.content__description}>
                        <h1 className={styles.content__description__title}>{data.title}</h1>
                    </section>
                    <section className={styles.content__owner}>
                            <p>{`${data.space}m² / ${data.total}`}</p>
                            <p>{data.price}€</p>
                    </section>
                </div>
                <div className={styles.collapse}>
                    {collapses.map(inputValue => <Collapse inputValue={inputValue}  key={inputValue.id}/>)}
                </div>
            </div>
        </Layout>
    )
}

export default Accommodation