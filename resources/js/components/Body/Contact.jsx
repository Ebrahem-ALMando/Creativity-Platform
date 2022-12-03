import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import  contactImage from '/public/assets/img/contact-img.svg'

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
        console.log(formDetails);
        serFormDetails({
            ...formDetails,
            [typeInput]:data
        });
        console.log(formDetails);

    }
    const handlerSubmit=(event)=>{
        event.preventDefault();
        console.log('Submit')
    }

    return(
    <section className="contact" id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImage} alt="Contact"/>
                </Col>
                <Col md={6}>
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
                            <Col  >
                         <textarea  rows="6" value={formDetails.message} placeholder="Message . . . "
                                   onChange={(event)=>onFormUpdate('message',event.target.value)}>

                         </textarea>
                                <button type="submit" ><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message&&
                              <p className={status.success===false?"danger":"success"}> {status.message}</p>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>

        </Container>

    </section>
)
}
export default Contact;
