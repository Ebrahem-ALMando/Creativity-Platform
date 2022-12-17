import ViewMessage from "./ViewMessage";
import {useEffect, useState} from "react";
import React from "react";
import styled from "styled-components";
const Message=()=>{
    const [allMessage,setAllMessage]=useState([]);
    const getAllMessage=()=>{
        axios.get('api/get/all/message').then((response)=>{
            setAllMessage(response.data);
        })
    }
    useEffect(()=>{
        getAllMessage();
    },[])

    return(
<SectionOne>
            {allMessage.map((message,index)=>{
                return(
                    <ViewMessage key={index}
                        data={message}/>
                )
            })}
</SectionOne>
    )
}
const SectionOne = styled.div`
  display: block;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 90%;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
export default Message;
