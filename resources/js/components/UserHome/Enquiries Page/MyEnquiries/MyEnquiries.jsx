
import {useEffect, useState} from "react";
import React from "react";
import styled from "styled-components";
import ViewMyEnquiries from "./ViewMyEnquiries";
import {BsFillArrowLeftSquareFill} from "react-icons/all";
import {Link} from "react-router-dom";
import CopyRight from "../../Footer/CopyRight";
const MyEnquiries=()=>{
    const [myEnquiries,setAllEnquiries]=useState([]);
    const [isData,setIsData]=useState(false);
    const [userData,setUserData]=useState([]);
    const getIdUser=()=>{
        axios.get('/get/id/user/data',{
        }).then((response)=>{
            if(response.data){
                setUserData(response.data);
                getMyEnquiries(response.data[0]);
            }
            else {
                setUserData(false);
            }
        })
    }
    const getMyEnquiries=(id)=>{
        if(id){
        axios.post('api/get/my/enquiries',{
            userId:id,
        }).then((response)=> {
            if (response.data.length>0) {
                console.log(response.data)
                setAllEnquiries(response.data);
                setIsData(true);
            }
        })
    }
    }
    useEffect(()=>{
        getIdUser();
    },[])

    return(
        <>
        <Component dir="rtl" className="m-auto">
        <SectionOne  className="m-auto">
            <Link className="text-decoration-none link-light" to="/home" >
            <BUTTON className="btn btn-dark">
                <span className="m-3 "> <BsFillArrowLeftSquareFill/></span>
                عودة الى الصفحة الرئيسية
            </BUTTON>
            </Link>
            {!isData ?
                <div className="w-100 alert alert-danger text-center mt-3">
                    <q className="fw-bold">لم تقم بإرسال استفسارات بعد  </q>

                </div>
                :myEnquiries.map((enq,index)=>{
                    return(
                        <ViewMyEnquiries key={index}
                                         data={enq}/>
                    )
                })
            }
            {
               //  setTimeout(()=>{
               // return(
               //     <div className="w-100 alert alert-danger text-center m-2">
               //         <q className="fw-bold">لم تقم بإرسال استفسارات بعد  </q>
               //     </div>
               // )
               //  },1000)
            }
            {}
        </SectionOne>

        </Component>
            <Copy >
            <CopyRight/>
            </Copy>
        </>
    )
}
const Copy=styled.div`

     margin:2rem auto;
     position: relative;
     bottom:-24rem;
  flex-direction: column;
    width:75%;
    display: flex;
        @media screen and (min-width: 320px) and (max-width: 1080px) {
        width:93%;
          margin:1rem auto;
          flex-direction: column;

    }
`
const BUTTON=styled.button`
width:100%;
margin:auto;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        width:96%;
          margin:1rem auto;
          flex-direction: column;

`
const Component=styled.div`
 flex-direction: column;
    display: flex;

      width:75%;
      padding:2rem;
    background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
    border-radius: 2rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        flex-direction: column;
        width:100%;
         padding:5px;
    }
`
const SectionOne = styled.div`
  display: block;
  justify-content: space-between;
  height: 30%;
  gap: 2rem;
  width: 90%;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
export default MyEnquiries;
