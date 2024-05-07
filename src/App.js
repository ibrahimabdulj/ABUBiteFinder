import React from "react";
import {
  FindUs,
  Footer,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import TableReserve from "./container/TableReserve/TableReserve";
import Reviews from "./container/Gallery/Reviews";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Intro />
    <Laurels />
    <TableReserve />
    <Reviews />
    <FindUs />
    <Footer />
  </BrowserRouter>
);

export default App;
