import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import CatNews from "../Pages/CatNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import Singlepage from "../layouts/Singlepage";
import PrivateRouter from "../Provider/PrivateRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    hydrateFallbackElement : <h1>Loading...</h1>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/news.json");
          const data = await res.json();
          return data;
        },
        element: <CatNews />, 
      },
      {
        path: "category/:id",
        loader: async () => {
          const res = await fetch("/news.json");
          const data = await res.json();
          return data;
        },
        element: <CatNews />,
      },
   
    ],
  },
  {
    path:'login',
    Component : AuthLayout,
    children :[
      {
        index : true,
        Component : Login
      },
      {
        path : '/login/register',
        Component : Register
      }
    ]
  },{
    path : 'news/:id',
    element : <PrivateRouter><Singlepage></Singlepage></PrivateRouter>,

  }

]);

export default routes;
