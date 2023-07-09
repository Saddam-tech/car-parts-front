
import styles from "./Carousel.module.scss";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react"
import '@coreui/coreui/dist/css/coreui.min.css'

const Carousel = ({ low }: { low?: boolean }) => {

    return (
        <section className={`${styles.carousel}`}>
            <CCarousel className={`${styles.slider} ${low ? styles.low : styles.high}`} transition="crossfade" interval={4000} controls indicators>
                <CCarouselItem>
                    <CImage className={styles.image} src="https://t4.ftcdn.net/jpg/05/11/10/45/360_F_511104500_QgSrSsX7nwAW6j5vFPc4Ftwy0LhvJdYu.jpg" alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className={styles.image} src="https://img.freepik.com/premium-psd/exclusive-tiers-facebook-cover-banner_496016-294.jpg" alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className={styles.image} src="https://images.trophydepot.com/QC/images/products/Auto%20Mechanic%203x5%20Grommet.jpg" alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </section>
    )
}

export default Carousel