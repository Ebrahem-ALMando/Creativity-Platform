import React, { useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineUserAdd} from "react-icons/all";

const CreateModal=props=>{
    const [nameData, setNameData] = useState([]);
    const [emailData, setEmailData] = useState([]);
    const [phoneData, setPhoneData] = useState(0);
    const [countryData, setCountryData] = useState([]);
    const [passwordData, setPasswordData] = useState([]);

    // const [isadminData, setIsAdminData] = useState(0);
    // const [issubData, setIssubData] = useState(0);

    const inputUserName = (event) => {
        // console.log(event.target.value);
        setNameData(event.target.value);
    };
    const inputUserEmail = (event) => {
        // console.log(event.target.value);
        setEmailData(event.target.value);
    };
    const inputUsePassword = (event) => {
        // console.log(event.target.value);
        setPasswordData(event.target.value);
    };
    const inputUserPhone = (event) => {
        console.log(event.target.value);
        setPhoneData(event.target.value);
    };
    const inputUserCountry = (event) => {
        // console.log(event.target.value);
        setCountryData(event.target.value);
    };
    const SubmitHandler=(e)=>{
        e.preventDefault();
    }

    const CreateUserData=()=>{
        // if(nameData !==""){
            //Submit Data
            axios.post('api/store/users/data',{
                userName: nameData,
                userEmail: emailData,
                userPassword:passwordData,
                userCountry:countryData,
                userPhone:phoneData,

            }).then((response)=>{
                toast.success("تم الانشاء بنجاح");
                // console.log(response.data)
                setTimeout(()=>{
                    location.reload();
                },2500)
            });
        // }
        // else {
        //     toast.error("الاسم فارع");
        // }
    }
    return(
        <>
            <div className="row text-right w-100 mb-3 pb-3">

                <button  type="button" className="btn btn-success text-right "
                        data-bs-toggle="modal" data-bs-target={"#modalCreate"}   >

                    <AiOutlineUserAdd/>
                </button>
            </div>
            <div className="modal fade" id={"modalCreate"} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-black" id="exampleModalLabel">

                               انشاء مستخدم
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-black">
                            <form className="form" onSubmit={SubmitHandler}>


                                <div className="row g-3 align-items-center" style={{maxWidth:'60%',marginBottom:'1rem'}}>
                                    <div className="col-auto">
                                        <label  htmlFor="inputPassword6" className="col-form-label">الاسم</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text"

                                               className="form-control "
                                               id="employeeName"
                                               placeholder="Name Here"
                                               onChange={inputUserName}/>
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                    <div className="col-auto">
                                        <label htmlFor="inputPassword6" className="col-form-label">الايميل</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text"
                                               className="form-control"
                                               id="employeeSalary"
                                               placeholder="Email Here"
                                               onChange={inputUserEmail}
                                        />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                    <div className="col-auto">
                                        <label htmlFor="inputPassword6" className="col-form-label">كلمة السر</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text"
                                               className="form-control"
                                               id="Password"
                                               placeholder="Password Here"
                                               onChange={inputUsePassword}
                                        />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                    <div className="col-auto">
                                        <label htmlFor="inputPassword6" className="col-form-label">الهاتف</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="number"
                                               className="form-control"
                                               id="employeeSalary"
                                               placeholder="Phone Here"
                                               onChange={inputUserPhone}
                                        />
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center" style={{maxWidth:'60%',marginBottom:'1rem'}}>
                                    <div className="col-auto">
                                        <label htmlFor="inputPassword6" className="col-form-label">البلد</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text"
                                               className="form-control"
                                               id="employeeSalary"
                                               placeholder="Country Here"
                                               onChange={inputUserCountry}
                                        />
                                    </div>
                                </div>

                                <div className="col-auto" style={{maxWidth:'60%',marginBottom:'1rem'}}>
                                    <input type="submit" className="btn btn-info"
                                           value="انشاء "
                                           data-bs-dismiss="modal"
                                           onClick={CreateUserData}/>
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
export default CreateModal;
