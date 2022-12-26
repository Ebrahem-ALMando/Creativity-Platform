import React from "react";
import styled from "styled-components";
import {hoverEffect, themeColor} from "../../../utils";
import imag from '/public/assets/img/meter2.svg'
import ActionButtons from "./ActionButton";
function ViewCourses(props) {
    return (
        <Card>
            <CardName>
                {props.data.name}
            </CardName>
            <ColumnTwo1>
                <CardContent>
                    {/*<Category>*/}
                    {/*    {props.data.category_courses_id}*/}
                    {/*</Category>*/}
                    <Excerpt>
                        {props.data.excerpt}

                            {/*<IMG src={imag}/>*/}

                    </Excerpt>
                    <URL href= {props.data.url}>
                        {props.data.url}
                    </URL>
                    <MessageContent>
                        {props.data.description}
                    </MessageContent>
                    <Action>
                        <ActionButtons
                        Data={props.data}
                        echRowID={props.data.id}
                        categorys={props.category}
                        />
                    </Action>
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

const Action = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;
const IMG=styled.img`
text-align:right
width:5rem;
height: 5rem;

`
const Excerpt=styled.div`
 display: flex;
  text-align: right;
    margin-left:1rem;
    margin-bottom:1rem;
    opacity:0.8;
    font-size:15px;
    &:hover{
opacity:1;
}
`
const URL=styled.a`
opacity:0.75;
color:#FFFF;
text-decoration: none;
margin-right:20rem;
&:hover{
opacity:1;
color:#FFFF;
}
`
const Category=styled.div`
 display: flex;
  text-align: right;
    margin-left:1rem;
    margin-bottom:1rem;
    opacity:0.8;
    font-size:17px;
    &:hover{
    opacity:1;
}
`
export default ViewCourses;
