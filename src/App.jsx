import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

  <Routes>

    <Route element={<MainLayout />}>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/contact" element={<Contact />} />

    </Route>

  </Routes>

</BrowserRouter>
  );
}

export default App;