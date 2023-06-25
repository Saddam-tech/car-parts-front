
import styles from "./Carousel.module.scss";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react"
import '@coreui/coreui/dist/css/coreui.min.css'

const Carousel = () => {

    return (
        <section className={styles.carousel}>
            <CCarousel className={styles.slider} controls indicators>
                <CCarouselItem>
                    <CImage className={styles.image} src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000" alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className={styles.image} src="https://static.vecteezy.com/system/resources/thumbnails/003/192/961/small/website-banner-template-design-vector.jpg" alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className={styles.image} src="https://t3.ftcdn.net/jpg/05/00/19/42/360_F_500194267_ZePYA1x6XhyZEoqs5H1bZ32Q7UCblCRE.jpg" alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </section>
    )
}

export default Carousel