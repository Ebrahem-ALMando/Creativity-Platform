import React, { useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineUserAdd} from "react-icons/all";


const ReplaceEnquiries=props=>{
    const [replaceData, setReplaceData] = useState('');

    const inputReplaceData = (event) => {
        setReplaceData(event.target.value);
    };
    const SubmitHandler=(e)=>{
        e.preventDefault();
    }

    const CreateReplaceData=(id)=>{
        // if(nameData !==""){
        //Submit Data
        axios.post('api/store/replace/enquiries/data',{
            enquiriesID:id,
            replaceData:replaceData
        }).then((response)=>{
            toast.success("تم الرد بنجاح");

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
            <div dir="rtl" className="modal fade" id={"ReplaceModal"+props.modalID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h5 className="modal-title text-black " id="exampleModalLabel">
                                إرسال اجابة

                            </h5>
                            <button type="button" className="btn-close m-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-black">
                            <form className="form" onSubmit={SubmitHandler}>
                                <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                    <div className="col-auto">
                                        <label htmlFor="input" className="col-form-label">الاجابة</label>
                                    </div>
                                    <div className="">
                                        <textarea

                                            className="form-control w-100"
                                            placeholder="Description Here"
                                            onChange={inputReplaceData}
                                        />
                                    </div>
                                </div>



                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>
                            <div className="m-auto" >
                                <input type="submit" className="btn btn-info "
                                       value="إرسال "
                                       data-bs-dismiss="modal"
                                       onClick={()=>{CreateReplaceData(props.modalID)}}/>
                        </div>

                                </div>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReplaceEnquiries;
