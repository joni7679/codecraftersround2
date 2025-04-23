import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

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
        path: "*",
        element: <h1>404</h1>,
    }
]);