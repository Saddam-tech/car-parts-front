import styles from "./Box.module.scss"
const Box = ({ header, content, img_src }: box_info) => {
    return (
        <section className={styles.box}>
            <h5>{header}</h5>
            <div className={styles.inner}>
                <img src={img_src} alt="box-img" />
                <p>
                    {content}
                </p>
            </div>
        </section>
    )
}

export default Box

