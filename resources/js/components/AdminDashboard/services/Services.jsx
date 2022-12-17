
import {useEffect, useState} from "react";
import React from "react";
import styled from "styled-components";
import ViewService from "./ViewService";
import CreateServices from "./CreateServicse";
const Services=()=>{
    const [allService,setAllService]=useState([]);
    const getAllMessage=()=>{
        axios.get('api/get/all/services').then((response)=>{
            console.log(response.data);
            setAllService(response.data);
        })
    }
    useEffect(()=>{
        getAllMessage();
    },[])

    return(

        <SectionOne>
            <CreateServices/>
            {allService.map((service,index)=>{
                return(
                    <ViewService key={index}
                                 data={service}
                                 echRowID={service.id}/>
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
export default Services;
