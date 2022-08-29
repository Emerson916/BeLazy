import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";

const Content = () => {
  return (
    <Suspense>
    <Routes>
      {routes?.map((route, idx) => {
        return (
          route.element && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={(props) => (
                <>
                  <route.element {...props} />
                </>
              )}
            />
          )
        );
      })}
      {console.log("ROTAS", routes)}
      {/* <Redirect from="/" to="/app/home" /> */}
    </Routes>
    </Suspense>
  );
};

export default Content;
