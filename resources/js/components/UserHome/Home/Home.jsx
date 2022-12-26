import NavBar from "../Headr/NavBar";
import BannerHome from "../Body/BannerHome";
import Services from "../Body/Services";
import Courses from "../Body/Courses";
import Contact from "../Body/Contact";
import Footer from "../Footer/Footer";
import React, {useEffect, useState} from "react";

const Home=(props)=>{
    const [userData,setUserData]=useState('');
// useEffect(()=>{
// // getIdUser();
// },[])
    // const getIdUser=()=>{
    // axios.get('/get/id/user/data').then((response)=>{
    //     if(response.data){
    //     console.log(response.data)
    //     setUserData(response.data);
    //     }
    //     else {
    //         setUserData(false);
    //     }
    //
    //
    // })
    // }
    return(
        <React.Fragment>
            <NavBar  />
            <BannerHome/>
            <Services/>
            <Courses/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    )
}
export default Home;
