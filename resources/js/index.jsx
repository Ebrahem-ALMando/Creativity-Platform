import ReactDOM from "react-dom";

import React from 'react';
import App from "./components/App";





if (document.getElementById('employeeApp')) {
    ReactDOM.render(<App />, document.getElementById('employeeApp'));
}
