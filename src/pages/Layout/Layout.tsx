import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';
import styles from "./Layout.module.scss"
import Footer from '../../components/layout/Footer';


const Layout = () => {
    const location = useLocation

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <section className={styles.main}>
            <Navigation />
            <Outlet />
            <Footer />
        </section>
    )
}

export default Layout
