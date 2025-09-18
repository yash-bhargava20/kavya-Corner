import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SideBar from "./Components/SideBar";
import Contact from "./Pages/Contact";
import Books from "./Pages/Books";
import Services from "./Pages/Services";
import SideBarMobile from "./Components/SideBarMobile";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="md:w-1/4 md:block hidden">
          <SideBar />
        </div>
        <div className="">
          <SideBarMobile />
        </div>

        <div className="w-full md:w-3/4   mt-12 md:mt-0 overflow-y-auto bg-white ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element={<Books />} />
            <Route path="/services" element={<Services />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
