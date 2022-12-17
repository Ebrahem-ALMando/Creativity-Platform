import React from "react";

const ViewModal=props=>{
    return(

        <div dir="ltr" className="modal fade" id={"ViewModal"+props.modalID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-black" id="exampleModalLabel">

                           تفاصيل المستخدم
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-black">
                        Name: <strong> {props.userData.currentUserName}</strong>
                        <hr/>
                        Email: <strong> {props.userData.currentUserEmail} </strong>
                        <hr/>
                        Phone: <strong> {props.userData.currentUserPhone}</strong>
                        <hr/>
                        Country: <strong> {props.userData.currentUserCountry} </strong>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewModal;
