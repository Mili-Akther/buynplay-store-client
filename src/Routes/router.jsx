import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Shop from "../Pages/Shop";
import Register from "../Pages/Register";
import Hero from "../Components/Sections/Hero";
import MyEquipmentList from "../Pages/MyEquipmentList";
import AddEquipment from "../Pages/AddEquipment";
import PrivateRoute from "./PrivateRoute";
import AllSportsEquipment from "../Pages/AllSportsEquipment";
import UpdateEquipment from "../Pages/UpdateEquipment";


const router = createBrowserRouter([
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
            element: <Hero />,
            loader: () => fetch("/slides.json"),
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/all-sports-equipment",
        element: <AllSportsEquipment></AllSportsEquipment>,
      },
      {
        path: "/add-equipment",
        element: 
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>   
      },
      {
        path: "/updateEquipment/:id",
        element: 
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>,
          loader: ({params}) =>fetch(`http://localhost:5000/equipment/${params.id}`)
        
      },
      {
        path: "/my-equipment",
        element: 
          <PrivateRoute>
            <MyEquipmentList></MyEquipmentList>
          </PrivateRoute>,
          loader: () => fetch('http://localhost:5000/equipment')
                 
      },
    ],
  },
]);

export default router;
