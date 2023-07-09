import Carousel from '../../components/Carousel/Carousel'
import styles from "./AboutUs.module.scss"
import { useSelector } from 'react-redux'

const AboutUs = () => {
    const activeIndex = useSelector((state: any) => state.activeIndex);
    return (
        <section className={styles.main}>
            <Carousel low={true} />
            <div className={styles.card}>
                <h1>{activeIndex?.name}</h1>
                <p>Do More For Your Happy Life!! Carry On Tomorrow...</p>
            </div>
            <ul className={styles.navbar}>
                {activeIndex?.children.map((el: children, i: number) => (
                    <li key={i}>{el.name}</li>
                ))}
            </ul>
        </section>
    )
}

export default AboutUs