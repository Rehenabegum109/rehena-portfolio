import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./Component/Router/Router";
import { RouterProvider } from "react-router/dom";
import './index.css';



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);