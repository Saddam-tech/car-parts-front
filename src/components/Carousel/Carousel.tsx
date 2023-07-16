
import styles from "./Carousel.module.scss";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react"
import '@coreui/coreui/dist/css/coreui.min.css'

const Carousel = ({ low }: { low?: boolean }) => {

    return (
        <section className={`${styles.carousel}`}>
            <CCarousel className={`${styles.slider} ${low ? styles.low : styles.high}`} transition="crossfade" interval={4000} controls indicators>
                <CCarouselItem>
                    <CImage className={styles.image} src="https://myfitment.com/wp-content/uploads/2022/02/Where-To-Sell-Auto-Parts.jpg" alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className={styles.image} src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/08/06125648/Where-to-Buy-Car-Spare-Parts-in-Dubai-Cover-20210806.jpg" alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className={styles.image} src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2023/01/20100238/How-to-Choose-Quality-Spare-Parts-for-Your-Car-_-Cover-1-20-1-23.jpg" alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </section>
    )
}

export default Carousel