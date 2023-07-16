import Carousel from '../../components/Carousel/Carousel'
import styles from "./AboutUs.module.scss"
import { useSelector } from 'react-redux'
import Box from '../../components/Box/Box'
import { box_info } from '../../data/data'

const AboutUs = () => {
    const activeIndex = useSelector((state: any) => state.activeIndex);
    return (
        <section className={styles.main}>
            <Carousel low={true} />
            <div className={styles.card}>
                <h1>{activeIndex?.parent?.name}</h1>
                <p>Do More For Your Happy Life!! Carry On Tomorrow...</p>
            </div>
            <ul className={styles.navbar}>
                {activeIndex?.parent?.children.map((el: children, i: number) => (
                    <li className={`${el.name === activeIndex?.child?.name ? styles.blue : styles.white}`} key={i}>{el.name}</li>
                ))}
            </ul>
            <section className={styles["outer-wrapper"]}>
                <div className={styles.wrapper}>
                    <h2>{activeIndex?.child?.name}</h2>
                    <hr />
                </div>
                <section className={styles["wrapper-2"]}>
                    <h4><span>I&nbsp;</span>Business Philosophy</h4>
                    <div className={styles.card_wrapper}>
                        {new Array(3).fill("*").map((_, i) => (
                            <Box
                                key={i}
                                header={box_info.header}
                                content={box_info.content}
                                img_src={box_info.img_src}
                            />
                        ))}
                    </div>
                </section>
            </section>
        </section>
    )
}

export default AboutUs