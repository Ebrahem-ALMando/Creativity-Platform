import React from 'react';
import NavBar from "./Headr/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import BannerHome from "./Body/BannerHome";
import '../../../public/App.css'
import Services from "./Body/Services";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Courses from "./Body/Courses";
import Contact from "./Body/Contact";
const App =()=> {
    return (
        <div className="App">
            <NavBar/>
            <ToastContainer/>
            <BannerHome/>
            <Services/>
            <Courses/>
            <Contact/>
        </div>
    );
}

export default App;


