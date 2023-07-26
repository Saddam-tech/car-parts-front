import Carousel from '../../components/Carousel/Carousel'
import styles from "./Inquiry.module.scss"
import { useSelector, useDispatch } from 'react-redux'
import Box from '../../components/Box/Box'
import { box_info } from '../../data/data'
import { useNavigate } from 'react-router-dom'
import { setSubActiveIndex } from '../../store/main'
import { useTranslation } from "react-i18next"

const Inquiry = () => {
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
            <Carousel low={true} />
            <div className={styles.card}>
                <h1>{t(activeIndex?.parent?.name)}</h1>
                <p>{t("SUB_HEADER")}</p>
            </div>
            <ul className={styles.navbar}>
                {activeIndex?.parent?.children.map((el: children, i: number) => (
                    <li
                        onClick={() => navigateHandler(el)}
                        className={`${el.name === activeIndex?.child?.name ? styles.blue : styles.white}`}
                        key={i}
                    >
                        {t(el.name)}
                    </li>
                ))}
            </ul>
            <section className={styles["outer-wrapper"]}>
                <div className={styles.wrapper}>
                    <h2>{t(activeIndex?.child?.name)}</h2>
                    <hr />
                </div>
                <section className={styles["wrapper-2"]}>
                    <h4><span>I&nbsp;</span>{t("inquiry-header")}</h4>
                    <div className={styles["input-wrapper"]}>
                        <div className={styles["input-sub-wrapper"]}>
                            <label htmlFor="name">Name</label>
                            <input id='name' type="text" />
                        </div>
                        <div className={styles["input-sub-wrapper"]}>
                            <label htmlFor="companyname">Company Name</label>
                            <input id='companyname' type="text" />
                        </div>
                        <div className={styles["input-sub-wrapper"]}>
                            <label htmlFor="country">Country</label>
                            <input id='country' type="text" />
                        </div>
                        <div className={styles["input-sub-wrapper"]}>
                            <label htmlFor="email">Email</label>
                            <input id='email' type="text" />
                        </div>
                        <div className={styles["input-sub-wrapper"]}>
                            <label htmlFor="message">Message</label>
                            <input id='message' type="text" />
                        </div>
                    </div>
                    <button>Submit</button>
                </section>
            </section>
        </section>
    )
}

export default Inquiry