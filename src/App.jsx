import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Basket from "./pages/basket/Basket";
import Favorites from "./pages/favorites/Favorites";
import Home from "./pages/home/home";
import Pageskategory from "./pages/pageskategory";
import PagesNews from "./pages/pagesNews";
import PagesAboutus from "./pages/pagesAboutus";
import Details from "./pages/details/Details.jsx";
import Admin from "./components/Admin/Admin.jsx";
import AdminDetails from "./components/Admin/AdminDetails/AdminDetails.jsx";
import Apple from "./pages/apple/Apple.jsx";
import Register from "./components/Register/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  {
    path: "/product/:id",
    element: <Details />,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/admin/:category/:id",
    element: <AdminDetails/>,
  },
  {
    path: "/brand/:brandName",
    element: <Apple/>,
  },
  {path: "/register",
    element: <Register />,
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
