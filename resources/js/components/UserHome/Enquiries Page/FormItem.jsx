import { Form } from "react-bootstrap";
import {useEffect, useState} from "react";
import meter1 from "../../../../../public/assets/img/meter1.svg";
import Subject from "./Subject";
export const FormItem =  ({ item, onChange, answer })  => {
    const [currentValue, setCurrentValue] = useState(answer || '');
    const [subjects,setSubjects]=useState([]);
    const [branch,setBranch]=useState('');
    const handleChange = (value) => {
        setCurrentValue(value);
        onChange(value, item.value);
    }

const inputYear=(value)=>{
    localStorage.setItem('year',value);
    onChange(value, item.value);
    if(value){
        // getSubjectBranchYear()
    }
}
    const inputSelectData=(value)=>{
        localStorage.setItem('branch',value);
        let s1=document.getElementById("select");
        let s2=document.getElementById("select2");
        // let next=document.getElementById("next").display=true;
        if(value==="المعهد التقاني للحاسوب"){
            // next.display=true;
            s1.disabled=false;
            s2.disabled=false;
            s1.style.display="";
            s2.style.display="none";
            onChange(value, item.value)
        }

        else if(value==="كلية الهندسة المعلوماتية"){

            s1.disabled=false;
            s2.disabled=false;
            s2.style.display="";
            s1.style.display="none";
            onChange(value, item.value)
        }
        else if(value==="yearAC"){
            localStorage.removeItem('branch');
            localStorage.removeItem('year');
        }
        else{
                    s1.disabled=true;
                    s2.disabled=true;
            localStorage.removeItem('branch');
            localStorage.removeItem('year');

        }


    }

    switch (item.type) {
        case 'text':
            return (<div>
                    <Form.Label className="text-black m-1">{item.label}</Form.Label>
                    <Form.Control
                        type="text"
                        id={item.label}
                        onChange={(e) => handleChange(e.target.value, item.value)}
                        value={currentValue}
                    />
                </div>
            )
            break;
        case 'textarea':
            return (
                <>
                    <Form.Label className="text-black m-1" htmlFor="inputTextarea">{item.label}</Form.Label>
                    <textarea
                        dir="rtl"
                        placeholder={item.placeholder}
                        className="form-control "
                        id="inputTextarea"
                        aria-describedby="textareaHelpBlock"
                        onChange={(e) => onChange(e.target.value, item.value)}
                    />
                </>
            )

        case 'information':
            return (
                <p dir="rtl" className="text-black alert alert-primary">
                    {item.label} <strong><q dir="rtl">{item.submit}</q></strong>
                </p>
            )
        case 'select':
            return (
                <div className="mt-2">
                    <Form.Label className="text-black m-1">{item.label}</Form.Label>
                        <Form.Select id="select" disabled aria-label={item.label}
                         onChange={(e) => inputYear(e.target.value, item.value)}
                        // onChange={inputYear}
                        >
                            <option value={item.value} className="text-end ">. . . . .</option>
                            {
                                item.optionInstitute.map((opt, index) => {
                                    return (
                                        <option className="text-end" key={index} value={opt}>{opt}</option>
                                    )
                                })
                            }
                     </Form.Select>
                    <Form.Select style={{display:'none'}} disabled id="select2"  aria-label={item.label}
                                 onChange={(e) => inputYear(e.target.value, item.value)}
                    >
                        <option value={item.value} className="text-end ">. . . . .</option>
                        {
                            item.optionCollege.map((opt, index) => {
                                return (
                                    <option className="text-end" key={index} value={opt}>{opt}</option>
                                )
                            })
                        }
                    </Form.Select>

                    </div>
            )
        case 'selectBranch':
            return (
                <div className="mt-2">
                    <Form.Label className="text-black m-1">{item.label}</Form.Label>

                    <Form.Select aria-label={item.label}
                                 onChange={(e) =>inputSelectData(e.target.value, item.value)}
                    >
                        <option  value={item.value} className="text-end ">. . . . .</option>
                        {
                            item.options.map((opt, index) => {
                                return (
                                    <option className="text-end" key={index} value={opt}>{opt}</option>
                                )
                            })
                        }
                    </Form.Select>
                </div>
            )
        case 'selectMaterial':
            return (
                <div className="mt-2">
                    <Form.Label className="text-black m-1">{item.label}</Form.Label>
                    <Subject item={item}
                    onChange={onChange}/>
                </div>
            )

    }
    return (<></>)

};
