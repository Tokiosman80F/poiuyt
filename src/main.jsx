import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Layout/Home.jsx";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";

import cartProductsLoader from "./assets/cartProductsLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
=======

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Home from "./components/Layout/Home.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
>>>>>>> 4bdd1a9331736c6b0d10133311b1824c8abd6e4b
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
<<<<<<< HEAD
        loader: cartProductsLoader,
      },
      { path: "/inventory", element: <Inventory></Inventory> },
      { path: "/login", element: <Login></Login> },
=======
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
>>>>>>> 4bdd1a9331736c6b0d10133311b1824c8abd6e4b
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <RouterProvider router={router}></RouterProvider>
=======
    <RouterProvider router={router} />
>>>>>>> 4bdd1a9331736c6b0d10133311b1824c8abd6e4b
  </React.StrictMode>
);
