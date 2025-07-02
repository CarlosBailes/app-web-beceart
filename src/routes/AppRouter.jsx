import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/NavBar";
import Contact from "../pages/Contact";
import MyWorks from "../pages/MyWorks";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myworks" element={<MyWorks />} />
      </Routes>
    </BrowserRouter>
  );
}
