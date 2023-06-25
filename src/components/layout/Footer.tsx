import styles from "./Footer.module.scss"
const Footer = () => {
    return (
        <section className={styles.main}>
            <img src="https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png" alt="logo" />
            <div className={styles.credentials}>
                <ul>
                    <li>COMPANY</li>
                    <li>PRODUCTS</li>
                    <li>CUSTOMER SERVICE</li>
                    <li>INQUIRY</li>
                </ul>
                <p>Tel.+82-31-967-1500 | Fax. +82-31-967-2900 | E-Mail : wato@wato.co.kr</p>
                <p>ADD : 32-11, Munbong-gil 62beon-gil, Ilsandong-gu, Goyang-si, Gyeonggi-do, South Korea. 10257</p>
            </div>
            <button>UP</button>
        </section>
    )
}

export default Footer