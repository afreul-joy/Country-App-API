import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../src/Pages/Shared//Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Meals from "./Pages/Meals/Meals";
import Countries from "./Pages/Countries/Countries";
import CountryDetails from "./Pages/Countries/CountryDetails/CountryDetails";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/meals" element={<Meals></Meals>}></Route>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        <Route path="/countries/:ccn3" element={<CountryDetails></CountryDetails>}></Route>
      </Routes>
    </>
  );
}

export default App;
