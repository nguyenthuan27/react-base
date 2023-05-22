/* eslint-disable import/no-anonymous-default-export */
import { Navigate, useRoutes } from "react-router-dom";
import PublicLayout from "../layout/index";
import Home from "../page/home";
import Login from "../page/login/login";
import Product from "../page/product";

const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const router = useRoutes(routes);
  return router;
};

export default Router;
