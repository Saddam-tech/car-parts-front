import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Index from "./pages/Index/Index";
import AboutUs from "./pages/AboutUs/AboutUs";
import Organization from "./pages/Organization/Organization";
import History from "./pages/History/History";
import PtntAndCert from "./pages/Ptnt&Cert/Ptnt&Cert";
import ContactUs from "./pages/ContactUs/ContactUs";
import Products from "./pages/Products/Products";
import { product_list_1 } from "./data/data";
import { product_list_2 } from "./data/data";


const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        { path: "", element: <Index /> },
        { path: "aboutus", element: <AboutUs /> },
        { path: "org&prtns", element: <Organization /> },
        { path: "history", element: <History /> },
        { path: "patent&cert", element: <PtntAndCert /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "cp-tech", element: <Products products={product_list_1} path="cp-tech" /> },
        { path: "domo-bearings", element: <Products products={product_list_2} path="domo-bearings" /> },
    ]
}])
export default router;

