import React from "react";
import styled from "styled-components";
import member1 from "/public/assets/member1.jpg";
import member2 from "/public/assets/member2.jpg";
import { cardShadow, hoverEffect, themeColor } from "../../utils";

function Members(props) {
    return (
        <YourMembers>
            {props.datamembers.map((member)=>{
                return(
                <React.Fragment>
            <Member>
                <Avatar>
                    <img src={member1} alt="" />
                </Avatar>
                <Detail>
                 <Title>{member.name}</Title>
                   <SubTitle>{member.email}</SubTitle>
                </Detail>
            </Member>
                </React.Fragment>)
            })}
            <AllMembers>عرض جميع الاعضاء</AllMembers>
        </YourMembers>
    );
}

const YourMembers = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 400;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 10px;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllMembers = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Members;
