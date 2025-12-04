import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AllProducts from "../Pages/AllProducts";
import HomeLayout from "../layout/HomeLayout";
import ProductDetails from "../Components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('trending.json'),
      }
    ]
  },
  {
    path: '/allProduct',
    element: <AllProducts></AllProducts>,
    loader: ()=> fetch('/product.json'),
  },

  {
    path: '/productDetails/:id',
    element:<ProductDetails></ProductDetails>,
    loader: ()=> fetch('/product.json'),
  },
  {
    path: '/about',
    element: <About></About>
  },
  
  {
    path: "/*",
    element: <div>Error -404</div>
  }
]);

export default router;