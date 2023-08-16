import styles from "./Backdrop.module.scss";

const Backdrop = ({ close, children }: BackdropProps) => {
    return (
        <div className={styles.main} onClick={() => close(false)}>{children}</div>
    )
}

export default Backdrop

