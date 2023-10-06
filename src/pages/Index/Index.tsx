import Carousel from '../../components/Carousel/Carousel'
import LogoBox from '../../components/Logobox/Logobox'
import styles from "./Index.module.scss"
import { logo_box_data } from '../../data/data'
import { useTranslation } from "react-i18next"
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const Index = () => {
    const { t } = useTranslation();
    return (
        <section className={styles.main}>
            <Carousel />
            <div className={styles.card}>
                <h1>{t("main_title")}</h1>
                <p>{t("main_subtitle")}</p>
            </div>
            <div className={styles.logo_wrap}>
                {logo_box_data.map((el, i) => (
                    <LogoBox name={el.name} img={el.img} key={i} />
                ))}
            </div>
            <a href="./Boskos-catalog.pdf" download>
                {t("CATALOG")} <FileDownloadIcon />
            </a>
        </section>
    )
}

export default Index
