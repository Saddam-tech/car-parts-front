import styles from "./Backdrop.module.scss";

const Backdrop = ({ open, close }: BackdropProps) => {
    return (
        <div className={`${styles.main} ${open ? styles.show : ""}`} onClick={() => close(false)}></div>
    )
}

export default Backdrop

