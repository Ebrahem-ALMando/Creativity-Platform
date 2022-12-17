import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UpdateModal = (props) => {
    const [nameData, setNameData] = useState([]);
    const [emailData, setEmailData] = useState([]);
    const [phoneData, setPhoneData] = useState([]);
    const [countryData, setCountryData] = useState([]);
    // const [isadminData, setIsAdminData] = useState(0);
    // const [issubData, setIssubData] = useState(0);

    useEffect(() => {
        setNameData(props.Data.name);
        setEmailData(props.Data.email);
        setPhoneData(props.Data.phone);
        setCountryData(props.Data.country);
        // setIsAdminData(props.data.isAdmin);
        // setIssubData(props.data.isSupervisor);


    }, []);


    const SunmitHandler = (e) => {
        e.preventDefault();
    };

    const inputUserName = (event) => {
        // console.log(event.target.value);
        setNameData(event.target.value);
    };
    const inputUserEmail = (event) => {
        // console.log(event.target.value);
        setEmailData(event.target.value);
    };
    const inputUserPhone = (event) => {
        // console.log(event.target.value);
        setPhoneData(event.target.value);
    };
    const inputUserCountry = (event) => {
        // console.log(event.target.value);
        setCountryData(event.target.value);
    };
    const updateUserData = () => {
        axios.post("/api/update/user/data", {
            userId: props.modalID,
            userName: nameData,
            userEmail: emailData,
            userCountry:countryData,
            userPhone:phoneData
        })
            .then((response) => {
                // console.log(response.data);
                toast.success("تم التعديل بنجاح");
                setTimeout(()=>{
                    location.reload();
                },2500)
            });
        // console.log(nameData);
        // console.log(salaryData);
        // setSalaryData("");
        // setNameData("");
    };
    return (
        <div
            className="modal fade"
            id={"UpdateModal" + props.modalID}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title text-black"
                            id="exampleModalLabel"
                        >
                           تعديل مستخدم
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body text-black">
                        <form className="form" onSubmit={SunmitHandler}>
                            <div
                                className="row g-3 align-items-center"
                                style={{
                                    maxWidth: "60%",
                                    marginBottom: "1rem",
                                }}
                            >
                                <div className="col-auto">
                                    <label
                                        htmlFor="inputPassword6"
                                        className="col-form-label"
                                    >
                                        الاسم
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className="form-control "
                                        id="employeeName"

                                        value={nameData ?? " "}
                                        onChange={inputUserName}
                                    />
                                </div>

                            </div>

                            <div
                                className="row g-3 align-items-center"
                                style={{
                                    maxWidth: "60%",
                                    marginBottom: "1rem",
                                }}
                            >
                                <div className="col-auto">
                                    <label
                                        htmlFor="inputPassword6"
                                        className="col-form-label"
                                    >
                                        الايميل
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="employeeSalary"
                                        // value={props.empData.currentEmployeeSalary ??undefined}
                                        value={emailData ?? " "}
                                        onChange={inputUserEmail}
                                    />
                                </div>
                                <div className="col-auto">
                                    <label
                                        htmlFor="inputPassword6"
                                        className="col-form-label"
                                    >
                                         الهاتف
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="number"
                                        className="form-control "
                                        id="employeeName"

                                        value={phoneData ?? " "}
                                        onChange={inputUserPhone}
                                    />
                                </div>
                                <div className="col-auto">
                                    <label
                                        htmlFor="inputPassword6"
                                        className="col-form-label"
                                    >
                                        &ensp;
                                          البلد
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className="form-control "
                                        id="employeeName"

                                        value={countryData ?? " "}
                                        onChange={inputUserCountry}
                                    />
                                </div>

                            </div>
                            <div
                                className="col-auto"
                                style={{
                                    maxWidth: "60%",
                                    marginBottom: "1rem",
                                }}
                            >
                                <input
                                    type="submit"
                                    className="btn btn-info"
                                    value="حفظ"
                                    data-bs-dismiss="modal"
                                    onClick={updateUserData}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            اغلاق
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UpdateModal;
