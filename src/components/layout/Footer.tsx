import styles from "./Footer.module.scss"
import { useNavigate } from "react-router-dom";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from "react-i18next"
import f_logo from "../../assets/images/f_logo.png";
import { navigation, version } from "../../data/data";
import { setActiveIndex, setSubActiveIndex } from "../../store/main";
const Footer = () => {
    const { t } = useTranslation();
    const activeIndex = useSelector((state: any) => state.activeIndex);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function navigateHandler(child: active_path) {
        navigate(`/${child.children[0]?.path.toUpperCase()}`);
        dispatch(setActiveIndex(child))
        dispatch(setSubActiveIndex(child.children[0]))
    }
    function scrollTop() {
        window.scrollTo(0, 0);
    }
    return (
        <section className={styles.main}>
            <img onClick={() => navigate("/")} src={f_logo} alt="logo" />
            <div className={styles.credentials}>
                <ul>
                    {navigation.map((el, i) => (
                        <li onClick={() => navigateHandler(el)} className={activeIndex?.parent?.name === el.name ? styles.active : ""} key={i}>{t(el.name)}</li>
                    ))}
                </ul>
                <p>{t("tel")} Korea: 02 6949 5745 <br /> Uzbekistan: +998555005655, +998972550070 <br /> {t("Fax")} Korea: 02 6949 5746 <br /> {t("EMAIL")} : boskos@naver.com | khon.uzbek@gmail.com</p>
                <p>{t("address")} Korea: 서울 동대문구 답십리동 961-9 <br /> Uzbekistan: Toshkent shahar Sergili tumani, Sergeli mashina bozori, 2.4.-Blok 22-magazin</p>
                <p>Telegram: BOSKOS_UZ</p>
                <p>Instagram: BOSKOS_UZ</p>
                <p>Version: {version}</p>
            </div>
            <ArrowCircleUpIcon className={styles.icon} onClick={scrollTop} fontSize="large" sx={{ color: "#b7b7b7", cursor: "pointer", }} />
        </section>
    )
}

export default Footer

