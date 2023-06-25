import styles from "./Logobox.module.scss";

const LogoBox = () => {
    return (
        <div className={styles.main}>
            <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/explained-m/exlm-og.jpg" alt="logo" />
            <div className={styles.inner_box}>
                <p>ENGINE OIL</p>
            </div>
        </div>
    )
}

export default LogoBox
