import styles from "./Logobox.module.scss";

const LogoBox = ({ name, img }: logo_box_data_type) => {
    return (
        <div className={styles.main}>
            <img src={img} alt="logo" />
        </div>
    )
}

export default LogoBox
