import styles from "./News&Notice.module.scss"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSubActiveIndex } from '../../store/main'
import { useTranslation } from "react-i18next"

const NewsnNotice = () => {
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
                {/* <section className={styles["wrapper-2"]}>
                    <h4><span>I&nbsp;</span>{t("sub-sub-header")}</h4>
                    <div className={styles.card_wrapper}>
                        {box_info.map((el, i) => (
                            <Box
                                key={i}
                                header={t(el.header)}
                                content={t(el.content)}
                                img_src={el.img_src}
                            />
                        ))}
                    </div>
                </section> */}
            </section>
        </section>
    )
}

export default NewsnNotice