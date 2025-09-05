import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import Seafood from "./components/Seafood/Seafood";
import AllProduct from "./components/AllProducts/AllProduct";
import Layout from "./components/Layout/Layout";

const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />, 
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/fruits',
                    element: <Fruits />,
                },

                {
                    path: '/dairy',
                    element: <Dairy />,
                },

                {
                    path: '/seafood',
                    element: <Seafood />,
                },
                {
                    path: '/allproducts',
                    element: <AllProduct />,
                },
            ]
        }
    ])

return (
    <RouterProvider router={router} />
)
}

export default App