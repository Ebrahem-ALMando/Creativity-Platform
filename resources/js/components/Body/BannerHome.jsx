import {useEffect,useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import Typewriter from 'typewriter-effect'

const BannerHome=()=>{

    return(
        <section className="banner" id="home">
            <Container  dir="rtl">
                <Row className="align-items-end">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ?"animate__animated animate__fadeIn":""}>
                                    <span className="tagline">   مرحبا بكم في منصة إبداع</span>
                                    <h1 >{`قم بالاشتراك واحصل على`}
                                    </h1>
                                        <h1 dir="rtl" className="wrap" style={{fontSize:'2.5rem' ,color:'#0D6EFD'}}>

                                            <Typewriter
                                                options={{
                                                    pauseFor:3000,
                                                    deleteSpeed:80,
                                                    autoStart:true,
                                                    loop:true,
                                                    delay:50,
                                                    strings:['الاجابة على الاسفسارات المطروحة', 'اشراف على مشاريع التخرج والمشاريع الفصلية',
                                                        'حلول لجميع المشاكل البرمجية' ]}}/>
                                         </h1>
                                    <p>منصة إبداع  هي منصة تعليمية تقوم على تقديم العديد من مسارات تطوير الويب بشرح تفصيلي تفاعلي باللغة العربية، وخطط دراسة مع اختبارات لضمان فهم الكود والتطبيق عليه.</p>
                                    <button> <ArrowRightCircle size={25}  />  أرسل اسفسارك</button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <iframe src="https://ebrahem-almando.github.io/PhotoAnimation/newPhotoHome.html"></iframe>
                    </Col>
                    {/*<Col xs={12} md={6} xl={5}>*/}
                    {/*    <iframe src="https://ebrahem-almando.github.io/Photo/Lottiefiles%20-%20free%20animation%20files%20built%20for%20Lottie.html"></iframe>*/}
                    {/*</Col>*/}
                </Row>

            </Container>

        </section>

    )
}

export  default BannerHome;

