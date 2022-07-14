import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComp } from "./components";
import { Home, Search } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <NavbarComp />
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/success" element={<Search />} exact />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}