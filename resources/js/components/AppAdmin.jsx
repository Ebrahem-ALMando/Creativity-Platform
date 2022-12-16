import "../../../public/App.css";
import styled from "styled-components";
import Sidebar from "./AdminDashboard/Sidebar";
import MainContent from "./AdminDashboard/MainContent";
import { Route,Routes} from "react-router-dom";
import React, {useEffect} from "react";
import Footer from "./Footer/Footer";


const AppAdmin = () => {

    // let urlnum=-1;
    // useEffect(()=>{
    //     const url=localStorage.getItem('url');
    //     if(url==="dashboard"){
    //         urlnum=true;
    //     }
    //     else {
    //         urlnum=false
    //     }
    //     console.log(urlnum);
    //     console.log(url);
    //
    // },[])

    return (
        // <React.StrictMode>
        <Container dir="rtl">
            <Sidebar />
            {/*<BrowserRouter>*/}
                <Routes>
                    <Route  path="/dashboard" element={ <MainContent/>} />
                    <Route  path="/message" element={<h1>Message</h1>} />
                    <Route  path="/message" element={<h1>Message</h1>} />
                    <Route  path="/message" element={<h1>Message</h1>} />
                    <Route  path="/message" element={<h1>Message</h1>} />
                    <Route  path="/message" element={<h1>Message</h1>} />
                    <Route  path="/message" element={<h1>Message</h1>} />
                {/*<Route path="/skills/:id/edit" element={<SkillEdit />} />*/}
                </Routes>
            {/*</BrowserRouter>*/}
            {/*{urlnum&&<MainContent/>}*/}
        </Container>
        // </React.StrictMode>
    );
};
const Container = styled.div`
    display: flex;
    height: 95%;
    background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
    border-radius: 2rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        flex-direction: column;
    }
`;

export default AppAdmin;
