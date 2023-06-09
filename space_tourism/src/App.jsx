import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootPage from "./pages/RootPage";

function App() {
  const router = createBrowserRouter([
    {
      index: "/",
      element: <RootPage />,
      children: [{ index: true, element: <h1>Hello there</h1> }],
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
