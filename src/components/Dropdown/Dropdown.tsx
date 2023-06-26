import styles from "./Dropdown.module.scss";
const Dropdown = ({ show, children }: navChildren) => {
    return (
        <ul className={styles.dropdown}>
            {children.map((el, i) => (
                <li className={!show ? styles.show : ""} key={i}>{el}</li>
            ))}
        </ul>
    )
}

export default Dropdown