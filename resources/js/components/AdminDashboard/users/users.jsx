import Table from "../Tables/Table";
import {useEffect, useState} from "react";
import CreateModal from "./CreateModal";
import React from "react";
const Users=()=>{
    const [dataUser,setDataUser]=useState([]);

    const getUserList=()=>{
        axios.get('/api/get/all/users').then(function (response){
            setDataUser(
                response.data
            )
        })
    }
    useEffect(()=>{
        getUserList();

    },[]);
    return(
        <Table
            Col1={"الاسم"}
            Col2={"الايميل"}
            Col3={"البلد"}
            Col4={"الهاتف"}
            Col5={"مسؤول"}
            Col6={"مشرف"}
        data={dataUser}
        />
    )
}
export default Users;
