import styles from "./Dropdown.module.scss";
const Dropdown = ({ show, children, index, setFunc }: navChildren) => {
    return (
        <ul onMouseEnter={() => setFunc(index)} className={!show ? styles.show : styles.dropdown}>
            {children.map((el, i) => (
                <li className={!show ? styles.show : styles.children} key={i}>{el}</li>
            ))}
        </ul>
    )
}

export default Dropdown