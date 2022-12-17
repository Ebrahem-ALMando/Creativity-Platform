import React, { Component} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineUserAdd} from "react-icons/all";

class CreateCategory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nameData: null,
            descriptionData:null,
        };
    }
    inputCategoryName=(event)=>{
        this.setState({
            nameData: event.target.value,
        });
    };

    inputCategoryDescription=(event)=>{
        this.setState({
            descriptionData: event.target.value,
        });
    };

    SubmitHandler=(e)=>{
        e.preventDefault();
    }

    CreateCategoryData=()=>{
        //Submit Data
        axios.post('api/store/category/data',{
            nameCategoryData: this.state.nameData,
            descriptionCategoryData:this.state.descriptionData,
        }).then((response)=>{
            toast.success("تم الانشاء بنجاح");
            setTimeout(()=>{
                location.reload();
            },2500)
        });

    }
    render(){
        return(
            <>
                <div className="row text-right w-75 mb-3 pb-3 m-5">

                    <button  type="button" className="btn btn-success text-right "
                             data-bs-toggle="modal" data-bs-target={"#modalCreate"}   >
                        صنف جديد
                        <AiOutlineUserAdd/>
                    </button>
                </div>
                <div className="modal fade" id={"modalCreate"} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-black" id="exampleModalLabel">
                                    صنف جديد
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-black">
                                <form action="api/store/service/data" method="post" className="form" onSubmit={this.SubmitHandler}  encType="multipart/form-data">


                                    <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                        <div className="col-auto">
                                            <label  htmlFor="inputPassword6" className="col-form-label">الاسم</label>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text"
                                                   className="form-control "
                                                   placeholder="Name Here"
                                                   onChange={this.inputCategoryName}/>
                                        </div>
                                    </div>
                                    <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                        <div className="col-auto">
                                            <label htmlFor="inputPassword6" className="col-form-label">الوصف</label>
                                        </div>
                                        <div className="col-auto">
                                        <textarea
                                            className="form-control"
                                            placeholder="Description Here"
                                            onChange={this.inputCategoryDescription}
                                        />
                                        </div>
                                    </div>
                                    <div className="col-auto" style={{maxWidth:'60%',marginBottom:'1rem'}}>
                                        <input type="submit" className="btn btn-info"
                                               value="انشاء "
                                               data-bs-dismiss="modal"
                                               onClick={this.CreateCategoryData}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default CreateCategory;
