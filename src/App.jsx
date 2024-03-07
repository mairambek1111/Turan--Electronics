import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Basket from "./pages/basket/Basket";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
  {
    path: "/",
    element: <Home />,
  },


]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
