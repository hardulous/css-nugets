import Navbar from "./React-Side-Bar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import s from "./Styles/ReactSidebar.css";
import Home from './React-Side-Bar/Home'
import Product from './React-Side-Bar/Product'
import Reports from './React-Side-Bar/Reports'

function ReactSidebar() {

  return (

    <>

      <Router>

        <Navbar />

        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Product/>}/>
            <Route path="/reports" element={<Reports/>}/>

        </Routes>

      </Router>

    </>

  );
}

export default ReactSidebar;
