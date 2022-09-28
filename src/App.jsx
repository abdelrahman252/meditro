import "./App.scss";
import Header from "./components/navbar/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarForBack from "./components/navbarForBack/NavbarForBack";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <NavbarForBack /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Login />} path="/login"  />
        <Route element={<Signup />} path="/signup" />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
