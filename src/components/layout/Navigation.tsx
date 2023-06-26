import { useEffect, useState } from "react"
import styles from "./Navigation.module.scss"
import { navigation } from "../../data/data"
import Dropdown from "../Dropdown/Dropdown"

const Navigation = ({ isTransparent }: { isTransparent: boolean }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>();

    return (
        <nav className={`${styles.navigation} ${isTransparent ? styles.transparent : styles.nottransparent}`}>
            <ul className={styles.parent}>
                {navigation.map((el, i) => (
                    <li className={`${styles.child} ${isTransparent ? styles.white : ""}`} onMouseEnter={() => setActiveIndex(i)} onMouseLeave={() => setActiveIndex(null)} key={i}>
                        {el.name}
                        {<Dropdown index={i} setFunc={setActiveIndex} show={activeIndex === i} children={el.children} />}
                    </li>
                ))}
            </ul>
            <div className={styles.items}>
                <input type="text" placeholder="Search" />
                <h5 className={`${isTransparent ? styles.white : ""}`}>Login</h5>
                <ul className={styles.language_pack}>
                    <li className={`${isTransparent ? styles.white : ""}`}>English</li>
                    <li className={`${isTransparent ? styles.white : ""}`}>Russian</li>
                    <li className={`${isTransparent ? styles.white : ""}`}>Uzbek</li>
                    <li className={`${isTransparent ? styles.white : ""}`}>Arabic</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
