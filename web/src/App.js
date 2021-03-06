import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/users/Home";
import Login from "./views/users/Login";
import Register from "./views/users/Register";
import HomeForAdmin from "./views/admin/HomeForAdmin";
import CardDetails from "./views/users/CardDetails";
import AddingSeason from "./views/admin/AddingSeason";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cardDetails/:id" element={<CardDetails />} />
        <Route path="/homeForAdmin" element={<HomeForAdmin />} />
        <Route path="/addingSeason/" element={<AddingSeason />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
