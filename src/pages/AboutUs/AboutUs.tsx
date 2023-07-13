import Carousel from '../../components/Carousel/Carousel'
import styles from "./AboutUs.module.scss"
import { useSelector } from 'react-redux'
import Box from '../../components/Box/Box'

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
            <section className={styles["outer-wrapper"]}>
                <div className={styles.wrapper}>
                    <h2>ABOUT US</h2>
                    <hr />
                </div>
                <section className={styles["wrapper-2"]}>
                    <h4>Business Philosophy</h4>
                    <div className={styles.card_wrapper}>
                        <Box />
                        <Box />
                        <Box />
                    </div>
                </section>
            </section>
        </section>
    )
}

export default AboutUs