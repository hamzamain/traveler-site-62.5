import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Contects from "../../pages/Contects/Contects";
import Destination from "../../pages/Destination/Destination";
import ErrorRoutes from "../../pages/ErrorPages/ErrorRoutes/ErrorRoutes";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contects",
        element: <Contects></Contects>,
      },
      {
        path: "*",
        element: <ErrorRoutes></ErrorRoutes>,
      },
    ],
  },
]);
