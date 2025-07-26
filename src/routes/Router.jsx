import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import OurMenu from "../pages/ourmenu/OurMenu";
import ContactUs from "../pages/contact us/ContactUs";
import OurShop from "../pages/ourshop/OurShop";
import ShopingCarts from "../pages/shopingcart/ShopingCarts";
import Login from "../pages/login/Login";
import Register from "../pages/register/register";
import PriveteRoute from "./PriveteRoute";
import Deshboard from "../layout/Deshboard";

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
        element: <PriveteRoute><ContactUs></ContactUs></PriveteRoute>
      },
      {
        path: '/ourshop/:category',
        element: <OurShop></OurShop>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '/deshboard',
    element: <Deshboard></Deshboard>,
    children: [
      {
        path: '/deshboard',
        element: <h1>home</h1>
      },
      {
        path: '/deshboard/reservation',
        element: <h1>This is Reservation page</h1>
      },
      {
        path: '/deshboard/payments',
        element: <h1>This is payment page</h1>
      },
      {
        path: '/deshboard/cart',
        element: <ShopingCarts></ShopingCarts>
      },
      {
        path: '/deshboard/review',
        element: <h1>This is review page</h1>
      },
      {
        path: '/deshboard/bookings',
        element: <h1>This is bookings page</h1>
      },

    ]
  }
]);