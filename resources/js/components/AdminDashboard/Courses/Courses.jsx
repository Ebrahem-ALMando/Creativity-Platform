
import {useEffect, useState} from "react";
import React from "react";
import styled from "styled-components";
import ViewCourses from "./ViewCourses";
import CreateCourses from "./CreateCourses";
const Courses=()=>{
    const [allCourses,setAllCourses]=useState([]);
    const getAllMessage=()=>{
        axios.get('api/get/all/courses').then((response)=>{
            console.log(response.data);
            setAllCourses(response.data);
        })
    }
    useEffect(()=>{
        getAllMessage();
    },[])

    return(

        <SectionOne>
            <CreateCourses/>
            {allCourses.map((courses,index)=>{
                return(
                    <ViewCourses key={index}
                                 data={courses}
                                 echRowID={courses.id}/>
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
export default Courses;
