import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import OurMenu from "../pages/ourmenu/OurMenu";
import ContactUs from "../pages/contact us/ContactUs";
import OurShop from "../pages/ourshop/OurShop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/ourmenu',
            element: <OurMenu></OurMenu>
        },
        {
            path: '/contactus',
            element: <ContactUs></ContactUs>
        },
        {
            path: '/ourshop',
            element: <OurShop></OurShop>
        }
    ]
  },
]);