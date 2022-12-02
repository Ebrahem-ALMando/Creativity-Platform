import React from 'react';
import NavBar from "./Headr/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import BannerHome from "./Body/BannerHome";
import '../../../public/App.css'
import {Banner} from "./Body/BannerNew";

const App =()=> {
    return (
        <div className="App">
            <NavBar/>
            {/*<Banner/>*/}
            <BannerHome/>

        </div>
    );
}

export default App;


