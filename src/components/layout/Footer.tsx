import styles from "./Footer.module.scss"
import { useNavigate } from "react-router-dom";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const Footer = () => {
    const navigate = useNavigate();
    function scrollTop() {
        window.scrollTo(0, 0);
    }
    return (
        <section className={styles.main}>
            <img onClick={() => navigate("/")} src="https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png" alt="logo" />
            <div className={styles.credentials}>
                <ul>
                    <li>COMPANY</li>
                    <li>PRODUCTS</li>
                    <li>CUSTOMER SERVICE</li>
                    <li>INQUIRY</li>
                </ul>
                <p>Tel.+82-31-967-1500 | Fax. +82-31-967-2900 | E-Mail : wato@wato.co.kr</p>
                <p>ADD : 32-11, Munbong-gil 62beon-gil, Ilsandong-gu, Goyang-si, Gyeonggi-do, South Korea. 10257</p>
            </div>
            <ArrowCircleUpIcon onClick={scrollTop} fontSize="large" sx={{ color: "#b7b7b7", cursor: "pointer", }} />
        </section>
    )
}

export default Footer

