import { createBrowserRouter } from "react-router-dom";
import About from "../pages/AboutUs";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);