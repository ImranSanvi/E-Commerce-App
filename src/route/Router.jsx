import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AllProducts from "../Pages/AllProducts";
import HomeLayout from "../layout/HomeLayout";
import ProductDetails from "../Components/ProductDetails";
import CartList from "../Pages/CartList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      }
    ]
  },
  {
    path: '/allProduct',
    element: <AllProducts></AllProducts>,
  },

  {
    path: '/productDetails/:id',
    element:<ProductDetails></ProductDetails>,
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: 'cartList',
    element: <CartList></CartList>
  },
  
  {
    path: "/*",
    element: <div>Error -404</div>
  }
]);

export default router;