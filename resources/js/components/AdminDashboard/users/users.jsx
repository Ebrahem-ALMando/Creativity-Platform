import Table from "../Tables/Table";
import {useEffect, useState,useReducer} from "react";
import CreateModal from "./CreateModal";
import React from "react";
import {FiSearch} from "react-icons/fi";
import styled from 'styled-components'
import {isNull} from "lodash";
const Users=()=>{
    const [dataUser,setDataUser]=useState([]);
    const [nameUser,setNameUser]=useState([]);
    const [isSearch,setIsSearch]=useState(false);
    const [data,setData]=useState('')
    const getUserList=()=>{
        axios.get('/api/get/all/users').then(function (response){
            setDataUser(
                response.data
            )
        })
    }
    // const Reducer=(state,action)=>{
    //     switch (action.type){
    //         case "InputNameUser":
    //             return{
    //                 value:action.val,
    //             }
    //     }
    // }
    // const [dataUserState,dispatchdataUser]=useReducer(Reducer,{
    //     value:"",
    // })
    const getUserSearchList=()=>{
        if(nameUser){

        axios.post('/api/get/search/users',{
            name:nameUser,
        }).then(function (response){
            if(response.data){
                setData(
                    response.data
                )
                setIsSearch(true)
            }
            else {
                setIsSearch(false)
                setData(null)
                setNameUser('')
            };
        })
        }
        else {
            setIsSearch(false)
            setData(null)
        }


    }
const  inputNameUser=(event)=>{
    // dispatchdataUser({
    //     type:"InputNameUser",
    //     val:event.target.value,
    // });
    setNameUser(event.target.value);
    // console.log("State"+nameUser);
    // console.log("Reducer"+dataUserState.value);
    // let t=event.target.value;
    // console.log(t);
    // setNameUser(t);
    // console.log("State"+nameUser);


    if(event.target.value){
        getUserSearchList()
    }
    else{
        setIsSearch(false)
    }
    }
    const SubmitHandler = (e) => {
        // setIsSearch(false);
        e.preventDefault();
    };
    useEffect(()=>{
        getUserList();

    },[]);
    return(
          <Container>
              <form onSubmit={SubmitHandler}>

                <InputContainer>

                   <button type="submit"
                   onClick={getUserSearchList}>
                       <Icon >
                           <FiSearch />
                       </Icon>
                   </button>

                        <Input type="text" placeholder="البحث عن مستخدم"
                               onChange={inputNameUser}

                        />


                </InputContainer>

              </form>
            <CreateModalContainre>

                <CreateModal/>

            </CreateModalContainre>
              <BUTTON className="btn btn-dark" onClick={()=>{
                  location.reload();
              }}>
                  تحديث البيانات
              </BUTTON >
            <Table
            Col1={"الاسم"}
            Col2={"الايميل"}
            Col3={"البلد"}
            Col4={"الهاتف"}
            Col5={"مسؤول"}
            Col6={"مشرف"}
        // data={isSearch?data.length<=0?"لا بوجد بيانات متطابقة":data:dataUser}
                data={isSearch?data:dataUser}

            />

          </Container>

    )
}
const Container = styled.div`
  width: 90%;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const InputContainer = styled.div`
    margin-right:10rem;
    max-width=50%;
  display: flex;
  align-item:center;
    width: 300px;


  /* Center horizontally*/
  margin: 0 auto;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-right: 3rem;
    width: 100%;
  }
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;

  &:focus {
    border: none;

    outline: none;
  }
`;

const CreateModalContainre=styled.div`
margin:2rem;
text-align:center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-right: 4rem;
    margin-bottom:10px;
    width: 70%;
  }
`
const BUTTON=styled.button`
      width: 300px;
       margin: 0 auto;
     display: flex;
    align-item:center;
    width: 300px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {

    margin-right: 3rem;
    width: 72%;
  }
`
export default Users;
