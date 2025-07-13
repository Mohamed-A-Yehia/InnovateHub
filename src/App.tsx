import { createBrowserRouter, RouterProvider } from "react-router";

// Project Files
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
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
      {
        path: "/contact",
        element: <Contact />,
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
