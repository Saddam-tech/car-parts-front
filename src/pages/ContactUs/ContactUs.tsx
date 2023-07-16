import Carousel from '../../components/Carousel/Carousel'
import styles from "./ContactUs.module.scss"
import KaKaoMap from '../../components/KakaoMap/KakaoMap'
import { map_coordinates, contact_info } from '../../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { setSubActiveIndex } from '../../store/main'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {
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
            <section className={styles["outer-wrapper"]}>
                <div className={styles.wrapper}>
                    <h2>{activeIndex?.child?.name}</h2>
                    <hr />
                </div>
                <section className={styles["wrapper-2"]}>
                    <h4><span>I&nbsp;</span>COMPANY INFO</h4>
                    <KaKaoMap posX={map_coordinates["posX"]} posY={map_coordinates["posY"]} />
                </section>
                <section className={styles.credentials}>
                    {contact_info.map((el, i) => (
                        <div className={styles["inner-card"]}>
                            {el.icon}
                            <h3>{el.header}</h3>
                            <p>{el.p}</p>
                        </div>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default ContactUs