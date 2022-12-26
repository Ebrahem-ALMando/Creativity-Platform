import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../public/App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router-dom";
import Home from "./UserHome/Home/Home";
import Enquiries from "./UserHome/Enquiries Page/Enquiries";
import MyEnquiries from "./UserHome/Enquiries Page/MyEnquiries/MyEnquiries";
import Login from "./Login Register/Login";


const App =()=> {

    return (
        <div className="App">
            <ToastContainer/>
            <Routes>
                {/*<Route  path="/login/user" element={ <Login/>} />*/}
                <Route  path="/" element={ <Home/>} />
                <Route  path="/home" element={ <Home/>} />
                <Route  path="/enquiry" element={<Enquiries/>} />
                <Route  path="/myEnquiries" element={<MyEnquiries/>}/>
            </Routes>

        </div>
    );
}

export default App;


