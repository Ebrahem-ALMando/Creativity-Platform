import React, {Component} from "react";
import {AiFillEdit, AiOutlineUserAdd, BiShowAlt, MdDeleteForever, TbReplace} from "react-icons/all";
import styled from "styled-components";
import DeleteEnquiries from "./DeleteEnquiries";
import SetViewEnquiries from "./SetViewEnquiries";
import ReplaceEnquiries from "./ReplaceEnquiries";
import {left} from "@popperjs/core";


class ActionButtons extends Component{
    constructor(props) {
        super(props);
        this.state={
            nameData: null,

        }
    }

    render() {
        return (
            <>
                {/*Btn View*/}
                <Button    type="button" className="text-white"
                          data-bs-toggle="modal" data-bs-target={"#ViewModal"+ this.props.echRowID}
                          className="btn btn-dark"

                >
                    <BiShowAlt/>
                </Button>
                <SetViewEnquiries  modalID={this.props.echRowID}  Data={this.props.Data}/>
                {/*Btn Delete*/}
                <Button   type="button" className="text-white"
                          data-bs-toggle="modal" data-bs-target={"#DeleteModal"+ this.props.echRowID}
                          className="btn btn-dark"
                >
                    <MdDeleteForever/></Button>
                <DeleteEnquiries modalID={this.props.echRowID} Data={this.props.Data}/>
                <Button    type="button" className="text-white"
                          data-bs-toggle="modal" data-bs-target={"#ReplaceModal"+this.props.echRowID}
                          className="btn btn-dark"
                >
                    <TbReplace/></Button>
                <ReplaceEnquiries modalID={this.props.echRowID}/>
            </>
        )

    }
}


const Button=styled.button`
color:white;
margin: 0 1rem;
opacity:0.75;

&:hover{
opacity:1;
}
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 0 1%
  }
`
export  default ActionButtons;

