import Carousel from '../../components/Carousel/Carousel'
import styles from "./Organization.module.scss"
import { useSelector, useDispatch } from 'react-redux'
import Box from '../../components/Box/Box'
import { box_info } from '../../data/data'
import { setSubActiveIndex } from '../../store/main'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const Organization = () => {
    const { t } = useTranslation();
    const activeIndex = useSelector((state: any) => state.activeIndex);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function navigateHandler(child: sub_active_path) {
        navigate(`/${child.path.toUpperCase()}`);
        dispatch(setSubActiveIndex(child))
    }
    return (
        <section className={styles.main}>
            {/* <Carousel low={true} />
            <div className={styles.card}>
                <h1>{t(activeIndex?.parent?.name)}</h1>
                <p>{t("SUB_HEADER")}</p>
            </div> */}
            <ul className={styles.navbar}>
                {activeIndex?.parent?.children.map((el: children, i: number) => (
                    <li onClick={() => navigateHandler(el)} className={`${el.name === activeIndex?.child?.name ? styles.blue : styles.white}`} key={i}>{t(el.name)}</li>
                ))}
            </ul>
            <section className={`${styles["outer-wrapper"]} ${styles["a-white"]}`}>
                <div className={styles.wrapper}>
                    <h2>{t(activeIndex?.child?.name)}</h2>
                    <hr />
                </div>
                {/* <section className={styles["wrapper-2"]}>
                    <img className={styles["org-structure-img"]} src={org_structure} alt="chart" />
                </section> */}
            </section>
            <section className={`${styles["outer-wrapper"]} ${styles["c-white"]}`}>
                {/* <div className={styles.wrapper}>
                    <h2>{t("PARTNERS")}</h2>
                    <hr />
                </div> */}
                <section className={styles["wrapper-2"]}>
                    <div className={styles.card_wrapper}>
                        {box_info.map((el, i) => (
                            <Box
                                key={i}
                                content={t(el.content)}
                                img_src={el.img_src}
                            />
                        ))}
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Organization