import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import "./index.css";
// import { Destination } from "./routes/Destination.tsx";
import { Home } from "./routes/Home/Home.tsx";
import { DestinationMoon } from "./routes/Destination/DestinationMoon.tsx";
import { DestinationMars } from "./routes/Destination/DestinationMars.tsx";
import { DestinationTitan } from "./routes/Destination/DestinationTitan.tsx";
import { DestinationEuropa } from "./routes/Destination/DestinationEuropa.tsx";
import { Crew } from "./routes/Crew/Crew.tsx";

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
        element: <Root />,
        children:[
          {
            path: "/destination/moon",
            element: <DestinationMoon/>,
          },
          {
            path: "/destination/mars",
            element: <DestinationMars/>,
          },
          {
            path: "/destination/europa",
            element: <DestinationEuropa/>,
          },
          {
            path: "/destination/titan",
            element: <DestinationTitan/>,
          },
        ],
      },
      {
        path: "/crew",
        element: <Crew />,
        children:[
          
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
