import React from "react";
import styled from "styled-components";
import { FaSlack } from "react-icons/fa";
import { darkThemeColor, hoverEffect, themeColor } from "../../utils";
import {Link} from "react-router-dom";
function HomePage() {
    return (
        <JoinHome>
            <CardContent flex={true}>
                <Slack>
                    <SlackLogo>
                        <FaSlack />
                    </SlackLogo>
                    <SlackText>
                        <SlackHead>الذهاب للصفحة الرئيسية </SlackHead>
                        <SlackFoot> عرض الصفحة ك زائر</SlackFoot>
                    </SlackText>
                </Slack>
                <a href="/home"   className="text-decoration-none link-light">

                <SlackJoin>ذهاب</SlackJoin>
                </a>
            </CardContent>
        </JoinHome>
    );
}

const JoinHome = styled.div`
  background-color: ${darkThemeColor};
  height: 60%;
    width:100%;
  margin-bottom: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Slack = styled.div`
  display: flex;
`;

const SlackLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    height: 3rem;
    width: 3rem;
  }
`;

const SlackText = styled.div`
  color: white;
`;

const SlackHead = styled.h2`
  font-weight: 500;
`;
const SlackFoot = styled.h5`
  color: #e4e4e4;
  font-weight: normal;
`;
const SlackJoin = styled.button`
  background-color: ${themeColor};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-right:1rem

`;

export default HomePage;
