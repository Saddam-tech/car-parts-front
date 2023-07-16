import Carousel from '../../components/Carousel/Carousel'
import styles from "./Products.module.scss"
import { useSelector } from 'react-redux'
import Product from '../../components/Product/Product'

const Products = ({ products, path }: product_list) => {
    const activeIndex = useSelector((state: any) => state.activeIndex);
    return (
        <section className={styles.main}>
            <Carousel low={true} />
            <div className={styles.card}>
                <h1>{activeIndex?.parent?.name}</h1>
                <p>Do More For Your Happy Life!! Carry On Tomorrow...</p>
            </div>
            <ul className={styles.navbar}>
                {activeIndex?.children.map((el: children, i: number) => (
                    <li key={i}>{el.name}</li>
                ))}
            </ul>
            <section className={styles["outer-wrapper"]}>
                <div className={styles.wrapper}>
                    <h2>{activeIndex?.child?.name}</h2>
                    <hr />
                </div>
                <section className={styles["wrapper-2"]}>
                    <div className={styles.card_wrapper}>
                        {products.map((el, i) => (
                            <Product
                                key={i}
                                name={el}
                                img_src={require(`../../assets/images/${path}/p-${i}.png`)}
                            />
                        ))}
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Products