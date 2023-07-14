import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Index from "./pages/Index/Index";
import AboutUs from "./pages/AboutUs/AboutUs";
import Organization from "./pages/Organization/Organization";
import History from "./pages/History/History";


const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        { path: "", element: <Index /> },
        { path: "aboutus", element: <AboutUs /> },
        { path: "org&prtns", element: <Organization /> },
        { path: "history", element: <History /> },
    ]
}])

export default router;

