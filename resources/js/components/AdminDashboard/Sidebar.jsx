import styled from "styled-components";
import { Link} from "react-router-dom";
import {
    RiHomeLine,
    RiDatabaseFill,
    RiMessengerFill,
    RiAccountCircleLine,
    RiUser3Fill
} from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import myphot from "/public/assets/myphto.jpg";
import { darkThemeColor } from "../../utils";
import {useState} from "react";
import {BiCategoryAlt, SiGooglemessages} from "react-icons/all";

function Sidebar() {
    const [activeLink,setActiveLink]=useState('dashboard')
    const setActiveLinkUrl=(value)=>{
        setActiveLink(value);
    }
    return (
        <Container className="Cn" >
            <ProfileContainer>
                 <Avatar src={myphot} />
                <Name>إبراهيم المندو</Name>
                <Badge text="مسؤول" />
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Linkurl>
                        <RiHomeLine />
                        <Link id={`${activeLink === "dashboard" ? "active-link" : "lin"}`}
                              className="text-decoration-none link-light" to="/dashboard" >
                        <h3
                            onClick={()=>{setActiveLinkUrl("dashboard")}}
                        >لوحة التحكم</h3>
                        </Link>
                    </Linkurl>
                    <Linkurl>
                        <RiMessengerFill/>
                        <Link id={`${activeLink === "message" ? "active-link" : "lin"}`}
                              className="text-decoration-none link-light" to="/message" >
                        <h3
                            onClick={()=>{setActiveLinkUrl("message")}}

                        >الرسائل الواردة</h3>
                        </Link>
                    </Linkurl>
                    <Linkurl>
                        <SiGooglemessages/>
                        <Link id={`${activeLink === "Enquiries" ? "active-link" : "lin"}`}
                              className="text-decoration-none link-light" to="/Enquiries" >
                            <h3
                                onClick={()=>{setActiveLinkUrl("Enquiries")}}
                            >الاستفسارات </h3>
                        </Link>
                    </Linkurl>
                    <Linkurl>
                        <RiAccountCircleLine />
                        <Link id={`${activeLink === "users" ? "active-link" : "lin"}`}
                              className="text-decoration-none link-light" to="/users" >
                        <h3
                            onClick={()=>{setActiveLinkUrl("users")}}
                        >المستخدمين</h3>
                        </Link>
                    </Linkurl>
                    <Linkurl>
                        <RiUser3Fill />
                        <Link  id={`${activeLink === "students" ? "active-link" : "lin"}`}
                              className="text-decoration-none link-light" to="/students" >
                        <h3
                            onClick={()=>{setActiveLinkUrl("students")}}
                        >الطلاب</h3>
                        </Link>
                    </Linkurl>
                    <Linkurl>
                        <FaWallet />
                        <Link id={`${activeLink === "services" ? "active-link" : "lin"}`}
                              className="text-decoration-none link-light" to="/services" >
                        <h3
                            onClick={()=>{setActiveLinkUrl("services")}}
                        >الخدمات</h3>
                        </Link>
                    </Linkurl>
                    <Linkurl>
                       < BiCategoryAlt/>
                        <Link id={`${activeLink === "category_courses" ? "active-link" : "lin"}`}
                              className="text-decoration-none link-light" to="/category_courses" >
                            <h3
                                onClick={()=>{setActiveLinkUrl("category_courses")}}
                            >اصناف الدورات</h3>
                        </Link>
                    </Linkurl>
                    <Linkurl>
                        <RiDatabaseFill />
                        <Link id={`${activeLink === "courses" ? "active-link" : "lin"}`}
                            className="text-decoration-none link-light" to="/courses" >
                        <h3
                            onClick={()=>{setActiveLinkUrl("courses")}}
                        >الدورات التدريبية</h3>
                        </Link>
                    </Linkurl>
                    <Linkurl>
                        <AiOutlinePieChart />
                        <Link id={`${activeLink === "repo" ? "active-link" : "lin"}`}
                            className="text-decoration-none link-light" to="/dashboard" >
                        <h3
                            onClick={()=>{setActiveLinkUrl("repo")}}
                        >التقارير</h3>
                        </Link>
                    </Linkurl>
                </Links>
                <ContactContainer>
                    <span>التاريخ </span>
                    <a href="#">"2022" </a>
                </ContactContainer>
            </LinksContainer>

        </Container>


    );
}

const Container = styled.div`
    min-width:300px;
    height: 100% !important;
    border-radius: 2rem;
    background-color: #091322;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
     right:0,
    @media screen and (min-width: 320px) and (max-width: 1080px)  {
        height: max-content !important;
        width:100%;
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Avatar = styled.img`
    height: 5rem;
    width:5rem;
    border-radius: 6rem;
    margin-top: 20%;
`;

const Name = styled.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
    background-color: ${darkThemeColor};
    height: 100%;
    width: 100%;
    border-radius: 2rem;
`;

const Links = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    height: 60%;
`;

const Linkurl = styled.li`
    margin-right: 15%;
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    color: #e4e4e4;
    cursor: pointer;
    h3 {
        font-weight: 300;
    }
    svg {
        font-size: 1.1rem;
        margin-top: 3%;
    }
`;

const ContactContainer = styled.div`
    width: 60%;
    background-color: #091322;
    color: #c4c4c4;
    height: 20%;
    margin: 2rem auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    a {
        color: white;
        text-decoration: none;
    }

    @media screen and (min-width: 320px) and (max-width: 1080px) {
        margin-bottom: 2rem;
    }
`;

export default Sidebar;

