import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../Pages/Home";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: ()=> fetch('/trending.json'),
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