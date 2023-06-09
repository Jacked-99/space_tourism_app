import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import RootPage from "./pages/RootPage";
import Home from "./pages/Home/Home";
import { loader as planetLoader } from "./pages/Destination/Planet";
import Planet from "./pages/Destination/Planet";

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
