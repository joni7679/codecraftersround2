import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../components/Services";
import Serivespage from "../pages/Serivespage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <AboutUs />,
    },
    {
        path: "/serives",
        element: <Serivespage/>,
    },
    {
        path: "*",
        element: <h1>404</h1>,
    }
]);