import ReactDOM from "react-dom";

import React from "react";
import AppAdmin from "./components/AppAdmin";
import {BrowserRouter} from "react-router-dom";

if (document.getElementById("admin")) {
    ReactDOM.render(
        <BrowserRouter>
        <AppAdmin />
        </BrowserRouter>
        , document.getElementById("admin"));
}
