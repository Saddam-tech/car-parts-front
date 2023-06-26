import Carousel from '../../components/Carousel/Carousel'
import LogoBox from '../../components/Logobox/Logobox'
import styles from "./Index.module.scss"
import { logo_box_data } from '../../data/data'


const Index = () => {
    return (
        <section className={styles.main}>
            <Carousel />
            <div className={styles.logo_wrap}>
                {logo_box_data.map((el, i) => (
                    <LogoBox name={el.name} img={el.img} key={i} />
                ))}
            </div>
        </section>
    )
}

export default Index