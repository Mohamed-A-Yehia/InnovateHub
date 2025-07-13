import { createBrowserRouter, RouterProvider } from "react-router";

// Project Files
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/services",
        element: <Services />,
        // loader: LOADER_
        // errorElement: <Error/>
      },
      {
        path: "/services/:serviceId",
        element: <Services />,
        // loader: LOADER_
        // errorElement: <Error/>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
