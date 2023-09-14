import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../CheckOut/CheckOut";
import Bookings from "../Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/About/AboutUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/about",
          element:<AboutUs></AboutUs>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/signup",
          element:<SignUp></SignUp>
        },
        {
          path: "/checkout/:id",
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "/bookings",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>

        }
      ],
    },
  ]);

  export default router;