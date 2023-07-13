import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveIndex } from "../../store/main";
const Dropdown = ({ activeIndex, show, children, index, setFunc }: navChildren) => {
    const dispatch = useDispatch();
    return (
        <ul onMouseEnter={() => setFunc(index)} className={!show ? styles.show : styles.dropdown}>
            {children.map((el: children, i: number) => (
                <Link to={el.path.toUpperCase()} onClick={() => dispatch(setActiveIndex(activeIndex))} className={!show ? styles.show : styles.children} key={i}>{el.name}</Link>
            ))}
        </ul>
    )
}

export default Dropdown