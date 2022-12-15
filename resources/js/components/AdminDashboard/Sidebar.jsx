import React from "react";
import styled from "styled-components";
import {
    RiHomeLine,
    RiFileCopyLine,
    RiDatabaseFill,
    RiMessengerFill,
    RiAccountCircleLine,
    RiAccountCircleFill, RiUser2Line, RiUser2Fill, RiUser3Fill
} from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import myphot from "/public/assets/myphto.jpg";
import { darkThemeColor } from "../..//utils";
function Sidebar() {
    return (

        <Container >
            <ProfileContainer>
                 <Avatar src={myphot} />
                <Name>إبراهيم المندو</Name>
                <Badge text="مسؤول" />
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Link>
                        <RiHomeLine />
                        <h3>لوحة التحكم</h3>
                    </Link>
                    <Link>

                        <RiMessengerFill/>
                        <h3>الرسائل الواردة</h3>
                    </Link>
                    <Link>
                        <RiAccountCircleLine />
                        <h3>المستخدمين</h3>
                    </Link>
                    <Link>
                        <RiUser3Fill />
                        <h3>الطلاب</h3>
                    </Link>
                    <Link>
                        <FaWallet />
                        <h3>الخدمات</h3>
                    </Link>
                    <Link>

                        <RiDatabaseFill />
                        <h3>الدورات التدريبية</h3>
                    </Link>
                    <Link>

                        <AiOutlinePieChart />
                        <h3>التقارير</h3>
                    </Link>
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
    width: 25%;
    height: 100% !important;
    border-radius: 2rem;
    background-color: #091322;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
     right:0,
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        width: 100%;
        height: max-content !important;
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

const Link = styled.li`
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
