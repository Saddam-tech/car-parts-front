import styles from "./Box.module.scss"
const Box = () => {
    return (
        <section className={styles.box}>
            <h5>MISSION</h5>
            <div className={styles.inner}>
                <img src="https://t4.ftcdn.net/jpg/05/11/10/45/360_F_511104500_QgSrSsX7nwAW6j5vFPc4Ftwy0LhvJdYu.jpg" alt="box-img" />
                <p>
                    WATO should be one team with Buyer & Supplier, You & Me…
                    WATO will always effort to grow with our Buyer & Suppliers.
                </p>
            </div>
        </section>
    )
}

export default Box

