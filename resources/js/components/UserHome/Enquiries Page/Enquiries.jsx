// import logo from './logo.svg';
import './Enquiries.css';
import {  Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import React from "react";
import MultiStepProgressBar from "./MultiStepProgressBar";
import {MultiStepForm} from "./MultiStepForm";
import { questions } from "./Questions";
import styled from "styled-components";
import CopyRight from "../Footer/CopyRight";
import {BsFillArrowLeftSquareFill, GiReturnArrow} from "react-icons/all";
import {Link} from "react-router-dom";

function Enquiries() {
    const [index, setIndex] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const totalPagesCount = questions?.length || 0;
    // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
    const [pagesAnswers, setPagesAnswers] = useState({});
    const [userData,setUserData]=useState('');

    const getIdUser=()=>{
        axios.get('/get/id/user/data',{
        }).then((response)=>{
            if(response.data){
                setUserData(response.data);
            }
            else {
                setUserData(false);
            }
        })
    }
    useEffect(()=>{
        getIdUser()
    },[])
    const prevButton = () => {
        if (index > 1) {
            setIndex(prevIndex => prevIndex - 1);
        }
    }
    const nextButton = () => {

        if (index - 3) {
            setIndex(prevIndex => prevIndex + 1);
        } else {

            axios.post('api/store/enquiries/data',{
                name:pagesAnswers[1].name,
                branch:pagesAnswers[1].branch,
                year:pagesAnswers[1].yearAC,
                subject:pagesAnswers[2].material,
                question:pagesAnswers[2].question,
                suggestion:pagesAnswers[2].suggestion,
                userId:userData[0],
            }).then((response)=>{
            })
            setPagesAnswers({});
            setSubmitted(true);
        }
    }

    const onPageAnswerUpdate = (step, answersObj) => {
        setPagesAnswers({...pagesAnswers,[step]: answersObj});
    }
    const handleStart = () => {
        setIndex(1);
        setSubmitted(false);
    }
    return (
        <React.Fragment>
            <Container className=" m-auto" >
                {!userData ?
                    <div className="w-100 alert alert-danger text-center">
                        <q className="fw-bold">يرجى <a href="/login/user">تسجيل الدخول</a> لاستخدام هذه الميزة</q>
                    </div>
                    :""
                }
                <Row className="m-4" dir="rtl">
                    <Col className="align-self-center" dir="rtl">

                        <MultiStepProgressBar
                            step={index}
                        />
                    </Col>
                </Row>

                <Row className="m-auto w-100 p-1 mt-0 ">
                    {
                        submitted ?
                            <Card dir="rtl">
                                <Card.Body>
                                    <p className="text-black alert alert-success">تم الارسال  بنجاح , شكرا لاهتمامك</p>
                                </Card.Body>
                                <Card.Footer>
                                    <Button className="btn " onClick={handleStart}>استفسار جديد !</Button>
                                </Card.Footer>
                            </Card> :
                            <Card>
                                <Card.Body>
                                    <MultiStepForm
                                        list={questions}
                                        step={index}
                                        onPageUpdate={onPageAnswerUpdate}
                                        pagesAnswers={pagesAnswers}
                                    />
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between">
                                    <Button  onClick={prevButton} disabled={index ===1}>السابق</Button>
                                    <Button disabled={!userData}  id="next" onClick={nextButton}>{index === totalPagesCount ? 'إرسال' : 'التالي'}</Button>
                                </Card.Footer>
                            </Card>
                    }
                </Row>
                <Link className="text-decoration-none link-light" to="/home" >
                <BUTTON className="btn btn-dark">
                    <span className="m-3 "> <BsFillArrowLeftSquareFill/></span>
                    عودة الى الصفحة الرئيسية

                </BUTTON>
            </Link>
            </Container>
            <Copy >
                <CopyRight/>
            </Copy>

        </React.Fragment>
    );
}

const BUTTON=styled.button`
width:100%;
margin:auto;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        width:96%;
          margin:1rem auto;
          flex-direction: column;

`
const Copy=styled.div`

     margin:2rem auto;
  flex-direction: column;
    width:75%;
    display: flex;
        @media screen and (min-width: 320px) and (max-width: 1080px) {
        width:93%;
          margin:1rem auto;
          flex-direction: column;

    }
`
const Container = styled.div`
 flex-direction: column;
    display: flex;
      height:35rem;
      width:75%;
      padding:2rem;
    background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
    border-radius: 2rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        flex-direction: column;
        width:97%;
         padding:5px;
    }
`;


export default Enquiries;
