import {useEffect, useState} from "react";
import React from "react";
import styled from "styled-components";
import ViewCategory_Courses from "./ViewCategory_Courses";
import CreateCategory from "./CreateCategory";
const Category_Courses=()=>{
    const [allCategory_Courses,setAllCategory_Courses]=useState([]);
    const getAllCategory_Courses=()=>{
        axios.get('api/get/all/category_courses').then((response)=>{
            setAllCategory_Courses(response.data);
        })
    }
    useEffect(()=>{
        getAllCategory_Courses();
    },[])

    return(
        <SectionOne>
        <CreateCategory/>
            {allCategory_Courses.map((category_c,index)=>{
                return(
                    <ViewCategory_Courses key={index}
                                 data={category_c}/>
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
export default Category_Courses;
