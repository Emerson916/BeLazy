import React from "react";

const Home = React.lazy(() => import("./views/Home"));

const routes = [
  { path: "/app/home", name: "Home View", element: Home },
];

export default routes;
