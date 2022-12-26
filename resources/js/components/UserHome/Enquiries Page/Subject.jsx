import {useEffect} from "react";
import {useState} from "react";

const Subject=(props)=>{
    const [subjects,setSubjects]=useState([]);

    useEffect(()=>{
        setSubjects([{}])
        getSubjectBranchYear();
    },[])
    const getSubjectBranchYear=()=>{

        axios.post('api/get/branch/year/subject',{
            branchName:localStorage.getItem('branch'),
            yearName:localStorage.getItem('year')
        }).then((response)=>{
            setSubjects(response.data);
        })
    }
    const handleChange=(value)=>{
        props.onChange(value,props.item.value)
    }
    return(
        <select className="form-control" aria-label={props.item.label}
                onChange={(e) => handleChange(e.target.value,props.item.value)}
        >

            <option  value={props.item.value} className="text-end ">. . . . .</option>
        {
            subjects.map((opt, index) => {
                return (
                    <option className="text-end" key={index} value={opt.id}>{opt.name}</option>
                )
            })
        }
    </select>
    )
}
export default Subject;
