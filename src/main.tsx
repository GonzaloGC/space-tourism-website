import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import "./index.css";
// import { Destination } from "./routes/Destination.tsx";
import { Home } from "./routes/Home.tsx";
import { DestinationMoon } from "./routes/DestinationMoon.tsx";
import { DestinationMars } from "./routes/DestinationMars.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/destination",
        element: <DestinationMoon />,
        children:[
          {
            path: "/destination/destinationmoon",
            element: <DestinationMars/>,
          },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
