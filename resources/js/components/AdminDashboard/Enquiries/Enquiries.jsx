
import {useEffect, useState} from "react";
import React from "react";
import styled from "styled-components";
import ViewEnquiries from "./ViewEnquiries";
const Enquiries=()=>{
    const [allEnquiries,setAllEnquiries]=useState([]);
    const getAllEnquiries=()=>{
        axios.get('api/get/all/enquiries').then((response)=>{
            setAllEnquiries(response.data);
        })
    }
    useEffect(()=>{
        getAllEnquiries();
    },[])

    return(
        <SectionOne>
            {allEnquiries.map((message,index)=>{
                return(
                    <ViewEnquiries key={index}
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
export default Enquiries;
