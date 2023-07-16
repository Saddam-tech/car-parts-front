import { useState } from "react"
import styles from "./Navigation.module.scss"
import { navigation } from "../../data/data"
import g_logo from "../../assets/images/g_logo.png";
import Dropdown from "../Dropdown/Dropdown"
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next"
import { useNavigate } from 'react-router-dom'

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
                    <li className={`${isTransparent ? styles.white : ""}`}>Korean</li>
                    <li className={`${isTransparent ? styles.white : ""}`}>English</li>
                    <li className={`${isTransparent ? styles.white : ""}`}>Russian</li>
                    <li className={`${isTransparent ? styles.white : ""}`}>Uzbek</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
