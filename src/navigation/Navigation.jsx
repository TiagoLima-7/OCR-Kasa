import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Aboutus from "../pages/aboutus/Aboutus";
import Accomodations from "../pages/accomodations/Accomodations";
import Error404 from "../pages/error-404/Error404";
import Home from "../pages/home/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/accomodations/:id" element={<Accomodations />}></Route>
        <Route path="/about-us" element={<Aboutus />}></Route>
        <Route path="/error-404" element={<Error404 />}></Route>
        <Route path="/*" element={<Navigate replace to="/error-404" />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
