import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Basket from "./pages/basket/Basket";
import Favorites from "./pages/favorites/Favorites";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/headerBasket",
    element: <Basket />,
  },
  {
    path: "/headerFavorite",
    element: <Favorites />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
