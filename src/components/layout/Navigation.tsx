import { useState } from "react"
import styles from "./Navigation.module.scss"
import { navigation } from "../../data/data"
import Dropdown from "../Dropdown/Dropdown"

const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>();
    return (
        <nav className={styles.navigation}>
            <ul>
                {navigation.map((el, i) => (
                    <li onMouseEnter={() => setActiveIndex(i)} onMouseLeave={() => setActiveIndex(null)} key={i} className={styles.list_wrap}>
                        {el.name}
                        {<Dropdown show={activeIndex === i} children={el.children} />}
                    </li>
                ))}
            </ul>
            <div className={styles.items}>
                <input type="text" placeholder="Search" />
                <h5>Login</h5>
                <ul className={styles.language_pack}>
                    <li>English</li>
                    <li>Russian</li>
                    <li>Uzbek</li>
                    <li>Arabic</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
