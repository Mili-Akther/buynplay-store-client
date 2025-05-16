import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,   
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <></>,
          },
         
        ],
      },
     


    ],
  },
]);

export default routes;
