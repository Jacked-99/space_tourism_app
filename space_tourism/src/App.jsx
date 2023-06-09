import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import RootPage from "./pages/RootPage";

function App() {
  const router = createBrowserRouter([
    {
      index: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: (
            <div>
              <h1>Hello there</h1>
            </div>
          ),
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
