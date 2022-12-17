import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UpdateModal = (props) => {
    const [nameData, setNameData] = useState([]);
    const [descriptionData, setDescriptionData] = useState([]);

    useEffect(() => {
        setNameData(props.Data.name);
        setDescriptionData(props.Data.description);
    }, []);

    const SubmitHandler = (e) => {
        e.preventDefault();
    };
    const inputCategoryName = (event) => {
        setNameData(event.target.value);
    };
    const inputCategoryDescription = (event) => {
        setDescriptionData(event.target.value);
    };
    const updateCategoryData = () => {
        axios.post('api/update/category/data',{
            categoryId: props.modalID,
            nameCategoryData: nameData,
            descriptionCategoryData:descriptionData,
        }).then((response)=>{
            toast.success("تم التعديل بنجاح");
            setTimeout(()=>{
                location.reload();
            },2500)
        });

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
                            تعديل صنف
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body text-black">
                        <form className="form" onSubmit={SubmitHandler}>
                            <div
                                className="row g-3 align-items-center"
                                style={{

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
                                        onChange={inputCategoryName}
                                    />
                                </div>
                            </div>

                            <div
                                className="row g-3 align-items-center"
                                style={{
                                    marginBottom: "1rem",
                                }}
                            >
                                <div className="col-auto">
                                    <label
                                        htmlFor="inputPassword6"
                                        className="col-form-label  "
                                    >
                                        الوصف
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <textarea

                                        className="form-control "
                                        value={descriptionData ?? " "}
                                        onChange={inputCategoryDescription}
                                    />
                                </div>
                                <div
                                    className="row g-3 align-items-center"
                                    style={{
                                        marginBottom: "1rem",
                                    }}
                                >
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
                                        onClick={updateCategoryData}
                                    />
                                </div>
                                </div>
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
