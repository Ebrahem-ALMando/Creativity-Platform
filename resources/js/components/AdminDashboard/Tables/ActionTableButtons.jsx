import React, {Component, useState} from "react";

import ViewModal from "../users/ViewModal";
import axios from "axios";
import UpdateModal from "../users/UpdaeModal";
import DeleteModal from "../users/DeleteModal";

import {AiFillEdit, AiOutlineUserAdd, BiShowAlt, MdDeleteForever} from "react-icons/all";


class ActionTableButtons extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentUserName:null,
            currentUserEmail:null,
            currentUserCountry:null,
            currentUserPhone:null,
        }
    }
    // View User
    getUserDetails=(id)=>{
        let self=this;
        axios.post('/api/get/individual/user/details',{
            userId:id
        }).then((response)=>{
            self.setState({
                currentUserName:response.data.name,
                currentUserEmail:response.data.email,
                currentUserPhone:response.data.phone,
                currentUserCountry:response.data.country,
            })
            // console.log(this.state.currentEmployeeName );


        })
    }
    render() {


        return (
            <td>
                {/*Btn View */}
                <button data-bs-toggle="modal" data-bs-target={"#ViewModal"+ this.props.echRowID}
                        style={{margin:'1%'}} type="button"
                        onClick={() => {
                            this.getUserDetails(this.props.echRowID)
                        }}
                        className="btn btn-primary View">
            <BiShowAlt/>
                </button>

                <ViewModal modalID={this.props.echRowID} userData={this.state}/>

                {/*Btn Update*/}
                <button   style={{margin:'1%'}} type="button" className="btn btn-warning"
                        data-bs-toggle="modal" data-bs-target={"#UpdateModal"+ this.props.echRowID}
                        onClick={() => {
                            this.getUserDetails(this.props.echRowID)
                        }}

                >

                    <AiFillEdit />
                </button>
                <UpdateModal  modalID={this.props.echRowID}  Data={this.props.Data}/>
                {/*Btn Delete */}
                <button   style={{margin:'1%'}} type="button" className="btn btn-danger"
                        data-bs-toggle="modal" data-bs-target={"#DeleteModal"+ this.props.echRowID}
                        onClick={() => {
                            this.getUserDetails(this.props.echRowID)
                        }}

                >

                    <MdDeleteForever/></button>
                <DeleteModal modalID={this.props.echRowID} Data={this.props.Data}/>



            </td>
        )
    }
}



export  default ActionTableButtons;

