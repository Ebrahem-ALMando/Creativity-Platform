import "../../../public/App.css";
import styled from "styled-components";
import Sidebar from "./AdminDashboard/Sidebar";
import MainContent from "./AdminDashboard/MainContent";
import { Route,Routes} from "react-router-dom";
import Users from "./AdminDashboard/users/users";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from "./AdminDashboard/Messages/Message";
import Services from "./AdminDashboard/services/Services";
import Courses from "./AdminDashboard/Courses/Courses";
import Category_Courses from "./AdminDashboard/Category_courses/Category_Courses";
const AppAdmin = () => {
    return (

        <Container dir="rtl">
            <Sidebar />
                <ToastContainer/>
                <Routes>
                    <Route  path="/dashboard" element={ <MainContent/>} />
                    <Route  path="/message" element={<Message/>} />
                    <Route  path="/users" element={<Users/>} />
                    <Route  path="/students" element={<h1>students</h1>} />
                    <Route  path="/services" element={<Services/>} />
                    <Route  path="/category_courses" element={<Category_Courses/>} />
                    <Route  path="/courses" element={<Courses/>} />
                </Routes>
        </Container>
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
