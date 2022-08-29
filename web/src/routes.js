import React from "react";

const Home = React.lazy(() => import("./views/Home"));
const Login = React.lazy(() => import("./pages/Login"));

const routes = [
  { path: "/app/home", name: "Home View", element: Home },
  { path: "/app/login", name: "teste", element: Login },
];

export default routes;
