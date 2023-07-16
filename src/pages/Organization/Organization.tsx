import Carousel from '../../components/Carousel/Carousel'
import styles from "./Organization.module.scss"
import { useSelector, useDispatch } from 'react-redux'
import org_structure from "../../assets/images/firm-structure.png"
import Box from '../../components/Box/Box'
import { box_info } from '../../data/data'
import { setSubActiveIndex } from '../../store/main'
import { useNavigate } from 'react-router-dom'

const Organization = () => {
    const activeIndex = useSelector((state: any) => state.activeIndex);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function navigateHandler(child: sub_active_path) {
        navigate(`/${child.path.toUpperCase()}`);
        dispatch(setSubActiveIndex(child))
    }
    return (
        <section className={styles.main}>
            <Carousel low={true} />
            <div className={styles.card}>
                <h1>{activeIndex?.parent?.name}</h1>
                <p>Do More For Your Happy Life!! Carry On Tomorrow...</p>
            </div>
            <ul className={styles.navbar}>
                {activeIndex?.parent?.children.map((el: children, i: number) => (
                    <li onClick={() => navigateHandler(el)} className={`${el.name === activeIndex?.child?.name ? styles.blue : styles.white}`} key={i}>{el.name}</li>
                ))}
            </ul>
            <section className={`${styles["outer-wrapper"]} ${styles["a-white"]}`}>
                <div className={styles.wrapper}>
                    <h2>{activeIndex?.child?.name}</h2>
                    <hr />
                </div>
                <section className={styles["wrapper-2"]}>
                    <img src={org_structure} alt="chart" />
                </section>
            </section>
            <section className={`${styles["outer-wrapper"]} ${styles["c-white"]}`}>
                <div className={styles.wrapper}>
                    <h2>PARTNERS</h2>
                    <hr />
                </div>
                <section className={styles["wrapper-2"]}>
                    <div className={styles.card_wrapper}>
                        {new Array(3).fill("*").map((_, i) => (
                            <Box
                                key={i}
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

export default Organization