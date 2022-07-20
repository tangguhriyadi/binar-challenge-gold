import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComp} from "./components";
import { Home, Search, Detail } from "./pages";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <NavbarComp />
       
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/search" element={<Search />} exact />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}