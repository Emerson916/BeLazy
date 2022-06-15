import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/users/Home";
import Login from "./views/users/Login";
import Register from "./views/users/Register";
import HomeForAdmin from "./views/admin/HomeForAdmin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

        <Route path="/homeForAdmin" element={<HomeForAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
