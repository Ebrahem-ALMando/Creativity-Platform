import React from "react";
import styled from "styled-components";
import {hoverEffect, themeColor} from "../../../utils";
import ActionButtons from "./ActionButtons";
function ViewCategory_Courses(props) {
    return (
        <Card>
            <CardName>
                {props.data.name}
            </CardName>
            <ColumnTwo1>
                <CardContent>
                    <MessageContent>
                        {props.data.description}
                    </MessageContent>
                    <Increase>
                   <ActionButtons
                       Data={props.data}
                       echRowID={props.data.id}/>
                    </Increase>
                </CardContent>
            </ColumnTwo1>
        </Card>
    );
}

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top:2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
      width: 100%;
  }
`;
const Card = styled.div`

  height: 100%;
  width: 70%;
  margin:5rem;
background-color: ${themeColor};
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    margin:1rem;
  }
`;

const CardContent = styled.div`
  margin: 1rem;

`;

const CardName = styled.h1`
  text-align: center;
  font-weight: normal;

`;

const MessageContent = styled.p`
  font-size:20px;
  text-align: right;
`;

const Increase = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;
export default ViewCategory_Courses;
