import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../components/Services";
import Serivespage from "../pages/Serivespage";
import NotFound from "../pages/NotFound";
import AboutPage from "../pages/AboutPage";
import ContactForm from "../components/ContactForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/services",
        element: <Serivespage />,
    },
    {
        path: "/Contact",
        element: <ContactForm/>,
    },
    {
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);