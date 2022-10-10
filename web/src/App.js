import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import CardDetails from "./views/CardDetails";
// import DefaultLayout from "./layout/DefaultLayout";
import Home from "./views/Home";

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// );

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

const App = () => (
  <>
    <Header />
    <HashRouter>
      {/* <React.Suspense fallback={loading}> */}
      <React.Suspense>
        <Routes>
          <Route
            exact
            path="/register"
            name="Register Page"
            element={<Register />}
          />
          <Route exact path="/" name="Login Page" element={<Login />} />
          {/* <Route exact path="/app/home" name="Home" element={<DefaultLayout />} /> */}
          <Route exact path="/app/home" name="Home" element={<Home />} />
          <Route
            exact
            path="/app/details/:id"
            name="Home"
            element={<CardDetails />}
          />
        </Routes>
      </React.Suspense>
    </HashRouter>
  </>
);

export default App;
