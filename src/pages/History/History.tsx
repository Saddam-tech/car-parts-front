import Carousel from '../../components/Carousel/Carousel'
import styles from "./History.module.scss"
import { useSelector } from 'react-redux'
import Box from '../../components/Box/Box'
import { box_info } from '../../data/data'

const History = () => {
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
                    <section className={styles["content-wrap"]}>
                        <p>
                            2023. 01 : Contracted for the exclusive export right to see Olex brand Engine Oil. <br />

                            2022. 12 : Awarded in an Export Medal of US 5,000,000$ in 59th Trade Day, Korea.  <br />

                            2022. 04 : Certified as “A Inno-Biz Enterprise” by SMBA, Korea. <br />

                            2022. 02 : Obtained a patent of "The Drive Shaft Assembly for Fuel & Electric Vehicle” (NO. 10-2367496). <br />

                            2021. 07 : Set up “ Engine Oil Division”.

                        </p>

                        <p>
                            2019. 12 : Awarded in an Export Medal of US 3,000,000$ in 56th Trade Day, Korea. <br />

                            2019. 01 : Set up “Construction Material Division”. <br />

                            2017. 07 : Established “Factory II” for “Wheel Hub Bearing”. <br />

                            2016. 10 : Certified as “A Promissing Small & Medium Enterprise” by Gyeonggi Governor, Korea. <br />

                            2015. 10 : Certified as “A Venture Enterprise” by GIBO, Korea. <br />

                            2013. 06 : Certified as “A Promising Export Firm” by SMBA, Korea. <br />

                            2011. 06 : Obtained a patent of "The Hand Carry Alternator Tester “ (NO. 10-1047048).</p>

                        <p>
                            2010. 09 : Obtained a patent of "The One Way Clutch Pulley” (NO. 10-0982418). <br />

                            2010. 04 : Certified “R&D Team” for Automotive Parts by KOITA, Korea. <br />

                            2008. 11 : Certified ISO 9001 & 14001 for Automotive Parts Manufacturing. <br />

                            2007. 09 : Established “ Factory I” for Alternator & Starter Motor. <br />

                            2003. 01 : Moved a Main Office in Goyang City, Gyeonggi Province, Korea.</p>

                        <p>
                            1998. 11 : Awarded in an Export Medal of US 1,000,000$ in 35th Trade Day, Korea. <br />

                            1998. 07 : Established WATO KOREA CORP. in Seoul, Korea. <br />

                            1997. 01 : Established WATO KOREA INC. in Seoul, Korea.

                        </p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default History