import React, {Component} from "react";
import {AiFillEdit, AiOutlineUserAdd, BiShowAlt, MdDeleteForever, TbReplace} from "react-icons/all";
import styled from "styled-components";
import DeleteEnquiries from './DeleteEnquiries'
// import ReplaceEnquiries from "./ReplaceEnquiries";

class ActionButtons extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>


                {/*Btn Delete*/}
                <Button   type="button" className="text-white"
                          data-bs-toggle="modal" data-bs-target={"#DeleteModal"+ this.props.echRowID}
                          className="btn btn-dark"
                >
                    <MdDeleteForever/></Button>
                <DeleteEnquiries modalID={this.props.echRowID} Data={this.props.Data}/>
                {/*Btn Update*/}
                {/*<Button    type="button" className="text-white"*/}
                {/*           data-bs-toggle="modal" data-bs-target={"#UpdateModal"+this.props.echRowID}*/}
                {/*           className="btn btn-dark"*/}
                {/*>*/}
                {/*    <TbReplace/></Button>*/}
                {/*<UpdateEnquiries modalID={this.props.echRowID} Data={this.props.Data}/>*/}
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

