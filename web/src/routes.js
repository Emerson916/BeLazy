import React from "react";

const HomeView = React.lazy(() => import("./views/Home"));

const routes = [{ path: "/app/home", name: "Home View", component: HomeView }];

export default routes;
