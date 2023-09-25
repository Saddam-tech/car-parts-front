import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Index from "./pages/Index/Index";
import AboutUs from "./pages/AboutUs/AboutUs";
import Organization from "./pages/Organization/Organization";
import History from "./pages/History/History";
import PtntAndCert from "./pages/Ptnt&Cert/Ptnt&Cert";
import ContactUs from "./pages/ContactUs/ContactUs";
import Products from "./pages/Products/Products";
import { product_list_1, product_list_2, product_list_3 } from "./data/data";
import NewsnNotice from "./pages/News&Notice/News&Notice";
import Inquiry from "./pages/Inquiry/Inquiry";
import Catalogue from "./pages/Catalogue/Catalogue";


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
        { path: "suspension-parts", element: <Products products={product_list_1} path="suspension-parts" /> },
        { path: "engine-parts", element: <Products products={product_list_3} path="engine-parts" /> },
        { path: "domo-bearings", element: <Products products={product_list_2} path="domo-bearings" /> },
        { path: "news&notice", element: <NewsnNotice /> },
        { path: "catalogue-download", element: <Catalogue /> },
        { path: "inquiry", element: <Inquiry /> },
    ]
}])
export default router;

