import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import RootPage from "./pages/RootPage";
import Home from "./pages/Home/Home";

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
