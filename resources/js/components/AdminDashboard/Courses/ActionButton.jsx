import React, {Component} from "react";
import axios from "axios";
import {AiFillEdit, AiOutlineUserAdd, BiShowAlt, MdDeleteForever} from "react-icons/all";
import styled from "styled-components";
import DeleteCourse from "./DeleteCourse";
import UpdateCourse from "./UpdateCourse";


class ActionButtons extends Component{
    constructor(props) {
        super(props);
        this.state={
            nameData: null,
            category_courses_id:null,
            excerptData: null,
            descriptionData:null,
            url:null,
            imageData:null,
        }
    }
    getCategoryDetails=(id)=>{
        let self=this;
        axios.post('/api/get/individual/course/details',{
            courseId:id
        }).then((response)=>{
            self.setState({
                nameData:response.data.name,
                category_courses_id:response.data.category_courses_id,
                excerptData:response.data.excerpt,
                descriptionData:response.data.description,
                url:response.data.url,
                imageData:response.data.image,
            })
        })
    }
    render() {
        return (
            <>
                {/*Btn Update*/}
                <Button   style={{margin:'1%'}} type="button" className="text-white"
                          data-bs-toggle="modal" data-bs-target={"#UpdateModal"+ this.props.echRowID}
                          // onClick={() => {
                          //     this.getCategoryDetails(this.props.echRowID)
                          // }}
                >
                    <AiFillEdit />
                </Button>
                <UpdateCourse  modalID={this.props.echRowID}  Data={this.props.Data}/>
                {/*Btn Delete */}
                <Button   style={{margin:'1%'}} type="button" className="text-white"
                          data-bs-toggle="modal" data-bs-target={"#DeleteModal"+ this.props.echRowID}
                          onClick={() => {
                              this.getCategoryDetails(this.props.echRowID)
                          }}

                >
                    <MdDeleteForever/></Button>
                <DeleteCourse modalID={this.props.echRowID} Data={this.props.Data}/>
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

