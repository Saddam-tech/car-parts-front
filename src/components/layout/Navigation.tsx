import { useState } from "react"
import styles from "./Navigation.module.scss"
import { lng_params, navigation } from "../../data/data"
import g_logo from "../../assets/images/g_logo.png";
import Dropdown from "../Dropdown/Dropdown"
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next"
import { useNavigate } from 'react-router-dom'
import { setLngActiveIndex } from "../../store/main";
import Drawer from "../Drawer/Drawer";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Backdrop from "../Backdrop/Backdrop";

const Navigation = ({ isTransparent }: { isTransparent: boolean }) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState<number | null>();
    const dispatch = useDispatch();
    const [drawer, setDrawer] = useState<boolean>(false);

    const prevActiveIndex = useSelector((state: any) => state.activeIndex);
    const lngActiveIndex = useSelector((state: any) => state.lngActiveIndex);

    function languageChangeHandler(lng: string, index: number) {
        i18n.changeLanguage(lng);
        dispatch(setLngActiveIndex(index));
    }
    return (
        <>
            <Drawer drawer={drawer} setDrawer={setDrawer} />
            <Backdrop open={drawer} close={setDrawer} />
            <nav className={`${styles.navigation} ${isTransparent ? styles.transparent : styles.nottransparent}`}>
                <MenuSharpIcon onClick={() => setDrawer(true)} className={styles["burger-menu"]} sx={{ color: "#ffffff", fontSize: "34px" }} />
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
                    <input type="text" placeholder={t("search")} />
                    <h5 className={`${isTransparent ? styles.white : ""}`}>{t("login")}</h5>
                    <ul className={styles.language_pack}>
                        {lng_params.map((el, i) => (
                            <div key={i} className={styles.img_container}>
                                <img className={lngActiveIndex === i ? styles.grayscale : ""} onClick={() => languageChangeHandler(el.short_name, i)} title={el.prompt} src={el.flag} alt={el.prompt} />
                                <div className={styles.tooltip}>{t(el.name)}</div>
                            </div>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation


