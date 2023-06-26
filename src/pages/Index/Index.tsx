import Carousel from '../../components/Carousel/Carousel'
import LogoBox from '../../components/Logobox/Logobox'
import styles from "./Index.module.scss"


const Index = () => {
    return (
        <section className={styles.main}>
            <Carousel />
            <div className={styles.logo_wrap}>
                {new Array(6).fill("*").map((el, i) => (
                    <LogoBox key={i} />
                ))}
            </div>
        </section>
    )
}

export default Index