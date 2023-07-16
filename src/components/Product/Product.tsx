import styles from "./Product.module.scss"
const Product = ({ name, img_src }: product_info) => {
    return (
        <section className={styles.product}>
            <img src={img_src} alt="product-img" />
            <h3>{name}</h3>
        </section>
    )
}

export default Product

