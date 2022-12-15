import ReactDOM from "react-dom";

import React from "react";
import AppAdmin from "./components/AppAdmin";

if (document.getElementById("admin")) {
    ReactDOM.render(<AppAdmin />, document.getElementById("admin"));
}
