import Carousel from '../../components/Carousel/Carousel'
import styles from "./Ptnt&Cert.module.scss"
import { useSelector } from 'react-redux'
import Box from '../../components/Box/Box'
import { box_info } from '../../data/data'

const PtntAndCert = () => {
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
                    <h2>PATENT & CERTIFICATION</h2>
                    <hr />
                </div>
            </section>
        </section>
    )
}

export default PtntAndCert