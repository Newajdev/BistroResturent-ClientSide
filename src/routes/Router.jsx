import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import OurMenu from "../pages/ourmenu/OurMenu";
import ContactUs from "../pages/contact us/ContactUs";
import OurShop from "../pages/ourshop/OurShop";
import ShopMenu from "../pages/ourmenu/ShopMenu";
import ShopingCarts from "../pages/shopingcart/ShopingCarts";
import Login from "../pages/login/Login";
import Register from "../pages/register/register";
import PriveteRoute from "./PriveteRoute";

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
            path: '/ourshop/:category',
            element: <PriveteRoute><OurShop></OurShop></PriveteRoute>
        },
        {
            path: '/shopingcart',
            element: <ShopingCarts></ShopingCarts>
        }
    ]
  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path:'/register',
    element: <Register></Register>
  },
]);