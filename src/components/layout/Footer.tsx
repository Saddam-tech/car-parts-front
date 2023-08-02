import styles from "./Footer.module.scss"
import { useNavigate } from "react-router-dom";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from "react-i18next"
import f_logo from "../../assets/images/f_logo.png";
import { navigation } from "../../data/data";
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
                <p>{t("tel")} 02 6949 5745 | {t("Fax")} 02 6949 5746 | {t("EMAIL")} : boskos@naver.com | khon.uzbek@gmail.com</p>
                <p>{t("address")} : 서울 동대문구 답십리동 961-9</p>
            </div>
            <ArrowCircleUpIcon onClick={scrollTop} fontSize="large" sx={{ color: "#b7b7b7", cursor: "pointer", }} />
        </section>
    )
}

export default Footer

