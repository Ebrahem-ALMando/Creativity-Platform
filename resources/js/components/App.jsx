import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../public/App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./Headr/NavBar";
import BannerHome from "./Body/BannerHome";
import Services from "./Body/Services";
import Courses from "./Body/Courses";
import Contact from "./Body/Contact";
import Footer from "./Footer/Footer";

const App =()=> {
    return (
        <div className="App">
            <NavBar/>
            <ToastContainer/>
            <BannerHome/>
            <Services/>
            <Courses/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;


