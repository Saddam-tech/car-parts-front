import Carousel from '../../components/Carousel/Carousel'
import styles from "./ContactUs.module.scss"
import { useSelector } from 'react-redux'
import KaKaoMap from '../../components/KakaoMap/KakaoMap'
import { map_coordinates } from '../../data/data'

const ContactUs = () => {
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
                    <h2>CONTACT US</h2>
                    <hr />
                </div>
                <section className={styles["wrapper-2"]}>
                    <h4>Company Info</h4>
                    <KaKaoMap posX={map_coordinates["posX"]} posY={map_coordinates["posY"]} />
                </section>
            </section>
        </section>
    )
}

export default ContactUs