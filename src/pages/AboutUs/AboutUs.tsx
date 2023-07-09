import Carousel from '../../components/Carousel/Carousel'
import styles from "./AboutUs.module.scss"


const AboutUs = () => {
    return (
        <section className={styles.main}>
            <Carousel low={true} />
            <div className={styles.card}>
                <h1>Company</h1>
                <p>Do More For Your Happy Life!! Carry On Tomorrow...</p>
            </div>
            <ul className={styles.navbar}>

            </ul>
        </section>
    )
}

export default AboutUs