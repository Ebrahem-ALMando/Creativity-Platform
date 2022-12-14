import React from "react";
import axios from "axios";
import {toast} from "react-toastify";

const DeleteEnquiries=props=>{
    const deleteEnquiries=(id)=>{
        axios.post('api/delete/enquiries/data',{
            enquiriesId:id
        }).then((response)=>{
            toast.error("تم الحذف بنجاح");
            setTimeout(()=>{
                location.reload();
            },2500)
        })
    }
    return(

        <div className="modal fade" id={"DeleteModal"+props.modalID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-black" id="exampleModalLabel">

                            حذف اسفسار
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-black">
                        <strong> هل تريد حذف هذ الاسفسار الخاص بالفرع  : <span className="text-danger"
                        > {props.Data.branch} </span>؟</strong>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                onClick={()=>{
                                    deleteEnquiries(props.modalID)
                                }}
                        >حذف</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteEnquiries;
