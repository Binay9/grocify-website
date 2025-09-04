import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";

const App = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home />,
        },

         {
            path:'/fruits',
            element: <Fruits />,
        },
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App