import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SpecificBrand from "../pages/Home/SpecificBrand/SpecificBrand/SpecificBrand";

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
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: `/allBrand/:brand`,
            loader: async ({ params }) => {
                return fetch(`http://localhost:5000/allBrand/${params.brand}`);
              },
            element: <SpecificBrand></SpecificBrand>  
        },
        {
            path: '*',
            element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);