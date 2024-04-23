import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPge from "../Pages/ErrorPage/ErrorPge";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/carsAndMotorcycles",
        element: <Home></Home>,
      },
      {
        path: "/musicAndBooks",
        element: <Home></Home>,
      },
      {
        path: "/artsAndCrafts",
        element: <Home></Home>,
      },
      {
        path: "/momsAndBabies",
        element: <Home></Home>,
      },
      {
        path: "/softwares",
        element: <Home></Home>,
      },
      {
        path: "/homeAndGarden",
        element: <Home></Home>,
      },
      {
        path: "/electronics",
        element: <Home></Home>,
      },
      {
        path: "/kidsAndToy",
        element: <Home></Home>,
      },
      {
        path: "/clothingAndShoes",
        element: <Home></Home>,
      },
      {
        path: "/beautyAndHealth",
        element: <Home></Home>,
      },
      {
        path: "/sports",
        element: <Home></Home>,
      },
      {
        path: "/jewellery",
        element: <Home></Home>,
      },
    ],
    errorElement:<ErrorPge></ErrorPge>
  },
]);
