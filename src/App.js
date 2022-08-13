import React, { useEffect, useState } from "react";
import Home from './Home';
import Signin from './Signin';
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './App.css';
import NavBar from './NavBar';
import AddProject from './dashboard/AddProject';
import UpdateProject from './dashboard/UpdateProject';
import ScaleLoader from "react-spinners/ScaleLoader";
import Cursor from './Cursor';
import Projects from './Projects';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  return (
    <BrowserRouter>
      <Cursor />
      {loading ?
        <div className="preloaderr">
          <ScaleLoader color={'#f87765'} loading={loading} height={100} margin={10} />
        </div> :
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/AddProject" element={<AddProject />} />
            <Route path="/UpdateProject/:id" element={<UpdateProject />} />
          </Routes>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
