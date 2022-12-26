import ReactDOM from "react-dom";

import React from "react";
import App from "./components/App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login Register/Login";
import Enquiries from "./components/UserHome/Enquiries Page/Enquiries";
import MyEnquiries from "./components/UserHome/Enquiries Page/MyEnquiries/MyEnquiries";
import Home from "./components/UserHome/Home/Home";



if (document.getElementById("employeeApp")) {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        , document.getElementById("employeeApp"));
}

if (document.getElementById("login")) {
    ReactDOM.render(
        <BrowserRouter>
            <Login/>
            {/*<Routes*/}
            {/*>*/}
            {/*    <Route  path="/login/user" element={ <Login/>} />*/}
            {/*    /!*<Route  path="/home" element={ <Home/>} />*!/*/}
            {/*    /!*<Route  path="/enquiry" element={<Enquiries/>} />*!/*/}
            {/*    /!*<Route  path="/myEnquiries" element={<MyEnquiries/>} />*!/*/}
            {/*</Routes>*/}

            </BrowserRouter>
            , document.getElementById("login"));
}
