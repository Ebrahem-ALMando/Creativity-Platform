import React, { Component} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineUserAdd} from "react-icons/all";

class CreateServices extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nameData: null,
            excerptData: null,
            descriptionData:null,
            imageData:null,
        };
    }
    // const [nameData, setNameData] = useState("");
    // const [excerptData, setExcerptData] = useState("");
    // const [descriptionData, setDescriptionData] = useState(0);
    // const [imageData, setImageData] = useState([]);
    inputServicesName=(event)=>{
        this.setState({
            nameData: event.target.value,
        });
    };
    inputServicesExcerpt=(event)=>{
        this.setState({
            excerptData: event.target.value,
        });
    };
    inputServicesDescription=(event)=>{
        this.setState({
            descriptionData: event.target.value,
        });
    };
    inputServicesImage=(event)=>{
        this.setState({
            imageData: event.target.value,
        });
    };


     SubmitHandler=(e)=>{
        e.preventDefault();
    }

     CreateServicesData=()=>{

        //Submit Data
        axios.post('api/store/service/data',{
            nameServiceData: this.state.nameData,
            excerptServiceData: this.state.excerptData,
            descriptionServiceData:this.state.descriptionData,
            imageServiceData:this.state.imageData,
        }).then((response)=>{
            toast.success("تم الانشاء بنجاح");
            console.log(response.data)
            setTimeout(()=>{
                // location.reload();
            },2500)
        });

    }
    render(){
    return(
        <>
            <div className="row text-right w-75 mb-3 pb-3 m-5">

                <button  type="button" className="btn btn-success text-right "
                         data-bs-toggle="modal" data-bs-target={"#modalCreate"}   >
                    انشاء خدمة
                    <AiOutlineUserAdd/>
                </button>
            </div>
            <div className="modal fade" id={"modalCreate"} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-black" id="exampleModalLabel">

                                انشاء خدمة
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
                                               onChange={this.inputServicesName}/>
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
                                               onChange={this.inputServicesExcerpt}
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
                                               onChange={this.inputServicesDescription}
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
                                               onChange={this.inputServicesImage}
                                        />
                                    </div>
                                </div>

                                <div className="col-auto" style={{maxWidth:'60%',marginBottom:'1rem'}}>
                                    <input type="submit" className="btn btn-info"
                                           value="انشاء "
                                           data-bs-dismiss="modal"
                                           onClick={this.CreateServicesData}/>
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
export default CreateServices;
