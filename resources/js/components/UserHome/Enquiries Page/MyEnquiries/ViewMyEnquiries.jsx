import React from "react";
import styled from "styled-components";
import {hoverEffect, themeColor} from "../../../../utils";
import {BiShowAlt, VscCheckAll, VscChromeClose} from "react-icons/all";
import ActionButtons from "./ActionButtons";
// import ActionButtons from "./ActionButton";
// import ViewReplace from "./ViewReplace";

function ViewMyEnquiries(props) {
    return (
        <Card>

            <CardName>
                {props.data.username}
            </CardName>
            <ColumnTwo1>
                <CardContent>

                    <Excerpt>
                        {props.data.branch}


                    </Excerpt>

                    <Excerpt>
                        {props.data.year}


                    </Excerpt>
                    <Excerpt>
                              <span style={{fontSize:'1rem'}}>
                                     تمت المشاهدة
                            </span>

                        <span style={{marginRight:'1rem',fontSize:'20px'}}>
                                    {props.data.isView?<VscCheckAll/>:<VscChromeClose/>}
                            </span>

                    </Excerpt>
                    <Excerpt>
                        {/*<button data-bs-toggle="modal" data-bs-target={"#ViewR"+ props.data.id}*/}
                        {/*        style={{margin:'1%'}} type="button"*/}

                        {/*        className="btn btn-primary View">*/}
                        {/*      <span style={{fontSize:'1rem'}}>*/}
                        {/*             تم الرد*/}
                        {/*    </span>*/}



                        {/*    <span style={{marginRight:'1rem',fontSize:'20px'}}>*/}
                        {/*            {props.data.answers?<VscCheckAll/>:<VscChromeClose/>}*/}

                        {/*    </span>*/}
                        {/*</button>*/}
                        {/*<button    type="button"*/}
                        {/*           data-bs-toggle="modal" data-bs-target={"#ViewR"+ props.data.id}*/}
                        {/*           className="text-white"*/}

                        {/*>*/}
                        <span style={{fontSize:'1rem'}}>
                                     تم الرد
                            </span>



                        <span style={{marginRight:'1rem',fontSize:'20px'}}>
                                    {props.data.answers?<VscCheckAll/>:<VscChromeClose/>}

                            </span>
                        <span style={{marginRight:'1rem',fontSize:'20px'}}>
                                   {props.data.answers?
                                       <q>
                                           {props.data.answers}
                                       </q>
                                       :""
                                   }
                            </span>
                        {/*</button>*/}
                        {/*    <ViewReplace answers={props.data.answers}  modalID={props.data.id}/>*/}
                    </Excerpt>
                    <Excerpt>
                        {props.data.suggestion}
                    </Excerpt>

                    <MessageContent>
                        <Question>
                            {props.data.question}
                        </Question>
                    </MessageContent>
                    <Action>
                        <ActionButtons
                            Data={props.data}
                            echRowID={props.data.id}

                        />
                    </Action>
                </CardContent>
            </ColumnTwo1>

        </Card>




    );
}

const Button=styled.button`
color:white;
margin: 0 1rem;
opacity:0.75;

&:hover{
opacity:1;
}
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 0 1%
  }
`
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

  height: 70%;
  width: 75%;
  margin:5rem auto;
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
    margin:1rem auto;
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
const Question = styled.h5`
  text-align: right;
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
export default ViewMyEnquiries;
