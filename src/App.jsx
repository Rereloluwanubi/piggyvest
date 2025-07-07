import React from "react";
import Header from "./static/Header";
import Footer from "./static/Footer";
import Hero from "./components/block/home/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PiggyBank from "./pages/PiggyBank";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";

const App = () => {
  return (
    <div className="bg-amber-500 max-tablet:bg-red-600">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/piggybank" element={<PiggyBank />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/Stories" element={<Stories />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
        <Hero />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
