import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';
import styles from "./Layout.module.scss"
import Footer from '../../components/layout/Footer';


const Layout = () => {
    const location = useLocation
    const [isTransparent, setIsTransparent] = useState<boolean>(true);

    function handleScroll() {
        if (window.scrollY === 0) {
            setIsTransparent(true)
        } else {
            setIsTransparent(false)
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <section className={styles.main}>
            <Navigation isTransparent={isTransparent} />
            <Outlet />
            <Footer />
        </section>
    )
}

export default Layout
