import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UpdateCourse = (props) => {
    const [nameData, setNameData] = useState([]);
    const [category_Courses_idData, setCategory_courses_idData] = useState([]);
    const [urlData, setUrlData] = useState([]);
    const [excerptData, setExcerptData] = useState([]);
    const [descriptionData, setDescriptionData] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [allCategory,setAllCategory]=useState([{}]);
    const getAllCategory_Courses=()=>{
        axios.get('api/get/all/category_courses').then((response)=>{
            setAllCategory(response.data);
        })
    }
    useEffect(() => {
        setNameData(props.Data.name);
        setCategory_courses_idData(props.Data.category_courses_id);
        setUrlData(props.Data.url)
        setExcerptData(props.Data.excerpt)
        setDescriptionData(props.Data.description);
        setImageData(props.Data.image)
        getAllCategory_Courses();
    }, []);

    const SubmitHandler = (e) => {
        e.preventDefault();
    };
   const inputCoursesName=(event)=>{
            setNameData( event.target.value);
    };
   const inputCoursesCategory_Courses_Id=(event)=>{
       setCategory_courses_idData(event.target.value) ;

    };
   const inputCoursesUrl=(event)=>{

       setUrlData(event.target.value);

    };
   const inputCoursesExcerpt=(event)=>{
       setExcerptData(event.target.value);
    };
   const inputCoursesDescription=(event)=>{
       setDescriptionData(event.target.value);
    };
   const inputCoursesImage=(event)=>{
       setImageData(event.target.value);
    };

    const updateCourseData = () => {
        axios.post('api/update/course/data',{
            courseId: props.modalID,
            nameCoursesData: nameData,
            categoryIdCoursesData:category_Courses_idData,
            urlCoursesData:urlData,
            excerptCoursesData: excerptData,
            descriptionCoursesData:descriptionData,
            imageCoursesData:imageData,
        }).then((response)=>{
            toast.success("تم التعديل بنجاح");
            console.log(response.data);
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
                                        onChange={inputCoursesName}
                                    />
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
                                        onChange={
                                            inputCoursesCategory_Courses_Id
                                        }
                                    >
                                        {allCategory.map((category,index)=>{
                                            return(
                                                <option
                                                    value={category.id}
                                                    key={index} >
                                                    {category.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                <div className="col-auto">
                                    <label htmlFor="inputPassword6" className="col-form-label">الرابط</label>
                                </div>
                                <div className="col-auto">
                                    <input type="url"
                                           value={urlData??""}
                                           className="form-control"
                                           placeholder="Url Here"
                                           onChange={inputCoursesUrl}
                                    />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                <div className="col-auto">
                                    <label htmlFor="inputPassword6" className="col-form-label">نبذة</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text"
                                           value={excerptData??""}
                                           className="form-control"
                                           id="employeeSalary"
                                           placeholder="Excerpt Here"
                                           onChange={inputCoursesExcerpt}
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
                                        onChange={inputCoursesDescription}
                                    />
                                </div>
                                <div className="row g-3 align-items-center" style={{marginBottom:'1rem'}}>
                                    <div className="col-auto">
                                        <label htmlFor="inputPassword6" className="col-form-label">الصورة</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="file"
                                               // value={imageData??""}
                                               className="form-control"
                                               onChange={inputCoursesImage}
                                        />
                                    </div>
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
                                            onClick={updateCourseData}
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
export default UpdateCourse;
