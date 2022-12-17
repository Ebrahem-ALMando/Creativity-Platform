import React, {Component} from "react";
import axios from "axios";
import {AiFillEdit, AiOutlineUserAdd, BiShowAlt, MdDeleteForever} from "react-icons/all";
import styled from "styled-components";
import DeleteCategory from "./DeleteCategory";
import UpdateCategory from "./UpdateCategory";

class ActionButtons extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentName:null,
            currentDescription:null,
        }
    }
    getCategoryDetails=(id)=>{
        let self=this;
        axios.post('/api/get/individual/category/details',{
            categoryId:id
        }).then((response)=>{
            self.setState({
                currentName:response.data.name,
                currentDescription:response.data.email,

            })
        })
    }
    render() {
        return (
            <>
                {/*Btn Update*/}
                <Button   style={{margin:'1%'}} type="button" className="text-white"
                          data-bs-toggle="modal" data-bs-target={"#UpdateModal"+ this.props.echRowID}
                          onClick={() => {
                              this.getCategoryDetails(this.props.echRowID)
                          }}
                >
                    <AiFillEdit />
                </Button>
                <UpdateCategory  modalID={this.props.echRowID}  Data={this.props.Data}/>
                {/*Btn Delete */}
                <Button   style={{margin:'1%'}} type="button" className="text-white"
                          data-bs-toggle="modal" data-bs-target={"#DeleteModal"+ this.props.echRowID}
                          onClick={() => {
                              this.getCategoryDetails(this.props.echRowID)
                          }}

                >
                    <MdDeleteForever/></Button>
                <DeleteCategory modalID={this.props.echRowID} Data={this.props.Data}/>
            </>
        )

    }
}


const Button=styled.button`
color:white;
margin-left:1rem;
opacity:0.75;

&:hover{
opacity:1;
}
`
export  default ActionButtons;

