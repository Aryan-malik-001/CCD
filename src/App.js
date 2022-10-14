import React from "react";
import "./App.css";
import Banner1 from "./components/banner1";
import Navbar from "./components/navbar";
import Categories from "./components/categories";
import Search from "./components/search";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Navbar />
      <Banner1 />
      <Categories />
      <Search />
      <Footer />
    </>
  );
}

export default App;
