import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/login/Signup";
import About from "../pages/home/About";
import Checkout from "../pages/checkout/Checkout";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Main/>,
    children: [
      {
        path: '/', 
        element: <Home/>
      },
      {
        path: '/about', 
        element: <About/>
      },
      {
        path: '/login', 
        element: <Login/>
      },
      {
        path: '/signup', 
        element: <Signup/>
      },
      {
        path: '/checkout/:id',  
        element: <Checkout/>, 
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings', 
        element: <PrivateRoute><Bookings /></PrivateRoute>
      }
    ] 
  }
])

export default router; 