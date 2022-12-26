
import {useEffect, useState} from "react";
import React from "react";
import styled from "styled-components";
import ViewCourses from "./ViewCourses";
import CreateCourses from "./CreateCourses";
const Courses=()=>{
    const [allCourses,setAllCourses]=useState([]);
    const getAllCourses=()=>{
        axios.get('api/get/all/courses').then((response)=>{
            setAllCourses(response.data);
        })
    }
    const [allCategory_Courses,setAllCategory_Courses]=useState([]);
    const getAllCategory_Courses=()=>{
        axios.get('api/get/all/category_courses').then((response)=>{
            setAllCategory_Courses(response.data);
        })
    }

    useEffect(()=>{
        getAllCategory_Courses();
        getAllCourses();
    },[])

    return(

        <SectionOne>
            <CreateCourses
                categorys={allCategory_Courses}
            />
            {allCourses.map((courses,index)=>{
                return(
                    <ViewCourses key={index}
                                 data={courses}
                                 category={allCategory_Courses}
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
