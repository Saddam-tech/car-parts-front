import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";
const Dropdown = ({ show, children, index, setFunc }: navChildren) => {
    return (
        <ul onMouseEnter={() => setFunc(index)} className={!show ? styles.show : styles.dropdown}>
            {children.map((el: children, i: number) => (
                <Link to={el.path} className={!show ? styles.show : styles.children} key={i}>{el.name}</Link>
            ))}
        </ul>
    )
}

export default Dropdown