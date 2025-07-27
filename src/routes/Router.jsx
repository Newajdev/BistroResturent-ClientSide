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
import PriveteRoute from "./PriveteRoute";
import Deshboard from "../layout/Deshboard";
import Register from "../pages/register/Register";
import AllUsers from "../pages/deshboard/allusers/AllUsers";
import AddItem from "../pages/deshboard/additems/AddItem";
import AdminRoute from "./AdminRoute";

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
    element: <PriveteRoute><Deshboard></Deshboard></PriveteRoute>,
    children: [
      {
        path: '/deshboard/home',
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
      // ----------------Admin Routes------------------------------
      {
        path: '/deshboard/adminhome',
        element: <h2>This Is Admin Home</h2>
      },
      {
        path: '/deshboard/additems',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: '/deshboard/manageitems',
        element: <h2>This Is manage your Items</h2>
      },
      {
        path: '/deshboard/managebookings',
        element: <h2>This Is manage Bookings</h2>
      },
      {
        path: '/deshboard/alluser',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },

    ]
  }
]);