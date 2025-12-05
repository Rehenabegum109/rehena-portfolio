import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Homepage from "../HomePage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children: [
      {
        path:'/',
        element:<Homepage></Homepage>
      }
    ]

  },
]);
