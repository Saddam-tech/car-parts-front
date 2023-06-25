import styles from "./Navigation.module.scss"

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>COMPANY</li>
                <li>PRODUCTS</li>
                <li>CUSTOMER SERVICE</li>
                <li>INQUIRY</li>
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
