import { useState } from "react"
import styles from "./Navigation.module.scss"
import { navigation } from "../../data/data"
import g_logo from "../../assets/images/g_logo.png";
import Dropdown from "../Dropdown/Dropdown"
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next"
import { useNavigate } from 'react-router-dom'
import flag_sa from "../../assets/images/flag-sa.png"
import flag_sk from "../../assets/images/sk-flag.png"
import flag_gb from "../../assets/images/english-flag.png"
import flag_uzb from "../../assets/images/flag-uz.png"
import flag_ru from "../../assets/images/flag-ru.png"

const Navigation = ({ isTransparent }: { isTransparent: boolean }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState<number | null>();
    const prevActiveIndex = useSelector((state: any) => state.activeIndex);
    return (
        <nav className={`${styles.navigation} ${isTransparent ? styles.transparent : styles.nottransparent}`}>
            <img onClick={() => navigate("/")} src={g_logo} alt="g_logo" />
            <ul className={styles.parent}>
                {navigation.map((el, i) => (
                    <li className={`${styles.child} ${isTransparent ? styles.white : ""} ${prevActiveIndex?.parent?.name === el.name ? styles.active : ""}`} onMouseEnter={() => setActiveIndex(i)} onMouseLeave={() => setActiveIndex(null)} key={i}>
                        {t(el.name)}
                        {<Dropdown activeIndex={el} index={i} setFunc={setActiveIndex} show={activeIndex === i} children={el.children} />}
                    </li>
                ))}
            </ul>
            <div className={styles.items}>
                <input type="text" placeholder="Search" />
                <h5 className={`${isTransparent ? styles.white : ""}`}>Login</h5>
                <ul className={styles.language_pack}>
                    <div className={styles.img_container}>
                        <img title="Korean" src={flag_sk} alt="S.Korean Flag" />
                        <div className={styles.tooltip}>Korean</div>
                    </div>
                    <div className={styles.img_container}>
                        <img src={flag_gb} alt="English Flag" />
                        <div className={styles.tooltip}>English</div>
                    </div>
                    <div className={styles.img_container}>
                        <img src={flag_ru} alt="Russian Flag" />
                        <div className={styles.tooltip}>Russian</div>
                    </div>
                    <div className={styles.img_container}>
                        <img src={flag_sa} alt="Saudi Arabian Flag" />
                        <div className={styles.tooltip}>Arabic</div>
                    </div>
                    <div className={styles.img_container}>
                        <img src={flag_uzb} alt="Uzbek Flag" />
                        <div className={styles.tooltip}>Uzbek</div>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation


