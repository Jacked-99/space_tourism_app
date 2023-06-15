import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import RootPage from "./pages/RootPage";
import Home from "./pages/Home/Home";
import { loader as planetLoader } from "./pages/Destination/Planet";
import Planet from "./pages/Destination/Planet";
import Crew from "./pages/Crew/Crew";
import { loader as crewLoader } from "./pages/Crew/Crew";
import TechnologyPage from "./pages/Technology/Technology";

function App() {
  const router = createBrowserRouter([
    {
      index: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/planets",

          children: [
            {
              path: ":planetName",
              element: <Planet />,
              loader: planetLoader,
            },
          ],
        },
        {
          path: "/crew",

          children: [
            { path: ":crewName", element: <Crew />, loader: crewLoader },
          ],
        },
        {
          path: "/tech",
          children: [
            {
              path: ":techName",
              element: <TechnologyPage />,
            },
          ],
        },
      ],
    },
    ,
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
