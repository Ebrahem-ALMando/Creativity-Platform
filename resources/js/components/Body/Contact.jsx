import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import  contactImage from '/public/assets/img/contact-img.svg'
import {toast} from "react-toastify";
import TrackVisibility from "react-on-screen";
const Contact=()=>{
    const  formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const[formDetails,serFormDetails]=useState(formInitialDetails);
    const [buttonText,setButtonText]=useState('إرسال');
    const [status,setStatus]=useState({});
    const onFormUpdate=(typeInput,data)=>{
        serFormDetails({
            ...formDetails,
            [typeInput]:data
        });
    }
    const validate=()=>{
        if(formDetails.firstName===''||formDetails.lastName===''||
            formDetails.email===''||formDetails.phone===''||formDetails.message==='')
        {
            toast.error("يرجى ملئ جميع البيانات")
            return false;
        }
        else if(formDetails.email.includes('@')&&formDetails.email.includes('.')){
          if(formDetails.message.length<30){
              toast.error("الرسالة قصيرة جدا  ")
              return false
          }
          else {
              return true
          }
        }
        else {
            toast.error("يرجى التحقق من صيغة الإيميل ")
            return false;
        }
    }
    const handlerSubmit=async (event)=>{
        event.preventDefault();
        if(validate()){
            setButtonText('يتم الإرسال . . . ')
            await axios.post("/api/sending/message/data",{
                firstName:formDetails.firstName,
                lastName:formDetails.lastName,
                email:formDetails.email,
                phone:formDetails.phone,
                message:formDetails.message,
            }).then((response)=>{
                if(response.status===200){
                    setTimeout(()=>{
                        toast.success("تم الإرسال بنجاح ");
                        setButtonText("إرسال") ;
                        serFormDetails(formInitialDetails);
                    },2000)
                }
            })

        }
    }
    return(
    <section className="contact" id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ?"animate__animated animate__backInLeft":""}>
                    <img src={contactImage} alt="Contact"/>
                            </div>}
                    </TrackVisibility>
                </Col>
                <Col md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ?"animate__animated animate__backInRight":""}>
                    <h2 dir="rtl">ابقى على تواصل</h2>
                    <form onSubmit={handlerSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name"
                                onChange={(event)=>onFormUpdate('firstName',event.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last  Name"
                                       onChange={(event)=>onFormUpdate('lastName',event.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="E-mail Address"
                                       onChange={(event)=>onFormUpdate('email',event.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone"
                                       onChange={(event)=>onFormUpdate('phone',event.target.value)}/>
                            </Col>

                            <Col size={12} className="px-1"  >
                         <textarea  rows="6" value={formDetails.message} placeholder="Message . . . "
                                   onChange={(event)=>onFormUpdate('message',event.target.value)}>

                         </textarea>
                                <button type="submit" ><span>{buttonText}</span></button>
                            </Col>
                        </Row>
                    </form>
                            </div>}
                    </TrackVisibility>
                </Col>
            </Row>

        </Container>

    </section>
)
}
export default Contact;
