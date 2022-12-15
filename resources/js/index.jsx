import ReactDOM from "react-dom";

import React from "react";
import App from "./components/App";
// import AppAdmin from "./components/AppAdmin";

if (document.getElementById("employeeApp")) {
    ReactDOM.render(<App />, document.getElementById("employeeApp"));
}

// if (document.getElementById("admin")) {
//     ReactDOM.render(<AppAdmin />, document.getElementById("admin"));
// }
