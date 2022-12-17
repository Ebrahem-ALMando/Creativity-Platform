import React, { Component} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineUserAdd} from "react-icons/all";

class CreateCourses extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nameData: null,
            category_courses_id:null,
            excerptData: null,
            descriptionData:null,
            url:null,
            imageData:null,
        };
    }
    inputCoursesName=(event)=>{
        this.setState({
            nameData: event.target.value,
        });
    };
    inputCoursesCategory_Courses_Id=(event)=>{
        this.setState({
            category_courses_id: event.target.value,
        });
    };
    inputCoursesUrl=(event)=>{
        this.setState({
            url: event.target.value,
        });
    };
    inputCoursesExcerpt=(event)=>{
        this.setState({
            excerptData: event.target.value,
        });
    };
    inputCoursesDescription=(event)=>{
        this.setState({
            descriptionData: event.target.value,
        });
    };
    inputCoursesImage=(event)=>{
        this.setState({
            imageData: event.target.value,
        });
    };


    SubmitHandler=(e)=>{
        e.preventDefault();
    }

    CreateCoursesData=()=>{

        //Submit Data
        axios.post('api/store/courses/data',{
            nameCoursesData: this.state.nameData,
            categoryIdCoursesData:this.state.category_courses_id,
            urlCoursesData:this.state.url,
            excerptCoursesData: this.state.excerptData,
            descriptionCoursesData:this.state.descriptionData,
            imageCoursesData:this.state.imageData,
        }).then((response)=>{
            toast.success("تم الانشاء بنجاح");
            console.log(response.data)
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
                        دورة جديدة
                        <AiOutlineUserAdd/>
                    </button>
                </div>
                <div className="modal fade" id={"modalCreate"} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-black" id="exampleModalLabel">

                                    دورة جديدة
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-black">
                                <form action="api/store/service/data" method="post" className="form" onSubmit={this.SubmitHandler}  encType="multipart/form-data">


                                    <div className="row g-3 align-items-center" style={{maxWidth:'60%',marginBottom:'1rem'}}>
                                        <div className="col-auto">
                                            <label  htmlFor="inputPassword6" className="col-form-label">الاسم</label>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text"

                                                   className="form-control "
                                                   id="employeeName"
                                                   placeholder="Name Here"
                                                   onChange={this.inputCoursesName}/>
                                        </div>
                                    </div>
                                    <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                        <div className="col-auto">
                                            <label htmlFor="inputPassword6" className="col-form-label">الصنف</label>
                                        </div>
                                        <div className="col-auto">
                                            <select
                                                   className="form-select"
                                                   placeholder="Category Here"
                                                   onChange={this.inputCoursesCategory_Courses_Id}>
                                                <option>
                                                    ويب
                                                </option>
                                                <option>
                                                    برمجيات
                                                </option>
                                                <option>
                                                    نظم تشغيل
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                        <div className="col-auto">
                                            <label htmlFor="inputPassword6" className="col-form-label">الرابط</label>
                                        </div>
                                        <div className="col-auto">
                                            <input type="url"
                                                   className="form-control"
                                                   placeholder="Url Here"
                                                   onChange={this.inputCoursesUrl}
                                            />
                                        </div>
                                    </div>
                                    <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                        <div className="col-auto">
                                            <label htmlFor="inputPassword6" className="col-form-label">نبذة</label>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text"
                                                   className="form-control"
                                                   id="employeeSalary"
                                                   placeholder="Excerpt Here"
                                                   onChange={this.inputCoursesExcerpt}
                                            />
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
                                            onChange={this.inputCoursesDescription}
                                        />
                                        </div>
                                    </div>
                                    <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                        <div className="col-auto">
                                            <label htmlFor="inputPassword6" className="col-form-label">الصورة</label>
                                        </div>
                                        <div className="col-auto">
                                            <input type="file"
                                                   className="form-control"
                                                   onChange={this.inputCoursesImage}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-auto" style={{maxWidth:'60%',marginBottom:'1rem'}}>
                                        <input type="submit" className="btn btn-info"
                                               value="انشاء "
                                               data-bs-dismiss="modal"
                                               onClick={this.CreateCoursesData}/>
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
export default CreateCourses;
