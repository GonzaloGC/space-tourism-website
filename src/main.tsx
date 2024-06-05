import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { Home } from "./routes/Home/Home.tsx";
import { DestinationMoon } from "./routes/Destination/DestinationMoon.tsx";
import { DestinationMars } from "./routes/Destination/DestinationMars.tsx";
import { DestinationTitan } from "./routes/Destination/DestinationTitan.tsx";
import { DestinationEuropa } from "./routes/Destination/DestinationEuropa.tsx";
import { CrewDouglas } from "./routes/Crew/CrewDouglas.tsx";
import { CrewMark } from "./routes/Crew/CrewMark.tsx";
import { CrewVictor } from "./routes/Crew/CrewVictor.tsx";
import { CrewAnousheh } from "./routes/Crew/CrewAnousheh.tsx";


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
        element: <Root />,
        children:[
          {
            path: "/crew/douglashurley",
            element: <CrewDouglas/>,
          },
          {
            path: "/crew/mark",
            element: <CrewMark/>,
          },
          {
            path: "/crew/Victor",
            element: <CrewVictor/>,
          },
          {
            path: "/crew/anousheh",
            element: <CrewAnousheh/>,
          },
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
