import React from "react";
import axios from "axios";
import {toast} from "react-toastify";

const SetViewEnquiries=props=>{
    const viewEnquiries=(id)=>{
        axios.post('api/view/enquiries/data',{
            enquiriesId:id
        }).then((response)=>{
            toast.success("تم المشاهدة بنجاح");
            setTimeout(()=>{
                location.reload();
            },2500)
        })
    }
    return(

        <div className="modal fade" id={"ViewModal"+props.modalID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-black" id="exampleModalLabel">

                            مشاهدة
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-black">
                        <strong> هل تريد اعلام المُرسل  : <span className="text-danger"
                        > {props.Data.username} </span> بمشاهدة استفساره؟</strong>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                onClick={()=>{
                                    viewEnquiries(props.modalID)
                                }}
                        >حفظ</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SetViewEnquiries;
