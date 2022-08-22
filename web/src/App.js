import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

const App = () => (
  <HashRouter>
    <React.Suspense fallback={loading}>
    {/* <React.Suspense> */}
    <Routes>
      <Route path="/register" name="Register Page" element={<Register />} />
      <Route path="/" name="Login Page" element={<Login />} />
      <Route exact path="/app" name="Home" element={<DefaultLayout />} />
    </Routes>
    </React.Suspense>
  </HashRouter>
);

export default App;
