import React from "react";
import Novels from "./components/Novel";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavbarTop from "./components/NavbarTop";
import Comics from "./components/Comic";
import Genre from "./components/Genre";
import GenreHoror from "./components/GenreHoror";
import GenreFantasi from "./components/GenreFantasi";
import GenreKerajaan from "./components/GenreKerajaan";
import Belanja from "./components/Belanja";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Comics" element={<Comics />} />
        <Route path="/Novels" element={<Novels />} />
        <Route path="/Genre" element={<Genre />} />
        <Route path="/Genre/Horor" element={<GenreHoror />} />
        <Route path="/Genre/Fantasi" element={<GenreFantasi />} />
        <Route path="/Genre/Kerajaan" element={<GenreKerajaan />} />
        <Route path="/Alert/Belanja" element={<Belanja />} />
        <Route path="/Alert/Cart" element={<Cart />} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
