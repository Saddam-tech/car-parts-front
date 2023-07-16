import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex, setSubActiveIndex } from "../../store/main";
import { useTranslation } from "react-i18next"
const Dropdown = ({ activeIndex, show, children, index, setFunc }: navChildren) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const prevActiveIndex = useSelector((state: any) => state.activeIndex);
    function dispatchHandler(child: sub_active_path) {
        dispatch(setActiveIndex(activeIndex))
        dispatch(setSubActiveIndex(child))
    }
    return (
        <ul onMouseEnter={() => setFunc(index)} className={!show ? styles.show : styles.dropdown}>
            {children.map((el: children, i: number) => (
                <Link
                    to={el.path.toUpperCase()}
                    onClick={() => dispatchHandler(el)}
                    className={`${!show ? styles.show : styles.children} ${prevActiveIndex?.child?.name === el.name ? styles.active : ""}`}
                    key={i}
                >
                    {t(el.name)}
                </Link>
            ))}
        </ul>
    )
}

export default Dropdown