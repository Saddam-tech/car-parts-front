import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div>Layout</div>
    )
}

export default Layout