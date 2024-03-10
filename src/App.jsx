import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Basket from "./pages/basket/Basket";
import Favorites from "./pages/favorites/Favorites";
import Home from "./pages/home/home";
import PagesMain from "./pages/pagesMain";
import Pageskategory from "./pages/pageskategory";
import PagesNews from "./pages/pagesNews";
import PagesAboutus from "./pages/pagesAboutus";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pagesmain",
    element: <PagesMain />,
  },
  {
    path: "/pageskategory",
    element: <Pageskategory />,
  },
  {
    path: "/pagesNews",
    element: <PagesNews />,
  },
  {
    path: "/pagesAboutus",
    element: <PagesAboutus />,
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
