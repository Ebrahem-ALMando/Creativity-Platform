import {Col, Container, Row, Tab} from "react-bootstrap";
import projImg1 from "/public/assets/img/project-img1.png";
import projImg2 from "/public/assets/img/project-img2.png";
import projImg3 from "/public/assets/img/project-img3.png";
import Nav from 'react-bootstrap/Nav';
import React from "react";
import colorSharp2 from '/public/assets/img/color-sharp2.png'
import CoursesCard from "./CoursesCard";
import TrackVisibility from "react-on-screen";
const Courses=()=>{
       const Courses = [
           {
               title: "Business Startup",
               description: "Design & Development",
               imgUrl: projImg1,
           },
           {
               title: "Business Startup",
               description: "Design & Development",
               imgUrl: projImg2,
           },
           {
               title: "Business Startup",
               description: "Design & Development",
               imgUrl: projImg3,
           },
           {
               title: "Business Startup",
               description: "Design & Development",
               imgUrl: projImg1,
           },
           {
               title: "Business Startup",
               description: "Design & Development",
               imgUrl: projImg2,
           },
           {
               title: "Business Startup",
               description: "Design & Development",
               imgUrl: projImg3,
           },
       ];
    return(
        <section className="courses" id="courses">
            <Container>
                <Row>

                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ?"animate__animated animate__backInRight":""}>
                        <h2>
                            الدورات التدريبية
                        </h2>
                        <p>منصة إبداع  هي منصة تعليمية تقوم على تقديم العديد من مسارات تطوير الويب بشرح تفصيلي تفاعلي باللغة العربية، وخطط دراسة مع اختبارات لضمان فهم الكود والتطبيق عليه.</p>
                                </div>}
                        </TrackVisibility>

                                    <Tab.Container id="Courses-tabs"defaultActiveKey="first">
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <div className={isVisible ?"animate__animated animate__backInLeft":""}>
                        <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center"
                             id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >
                                    Tab 3
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                                </div>}
                                </TrackVisibility>
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <div className={isVisible ?"animate__animated animate__slideInUp":""}>
                            <Tab.Content>

                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {Courses.map((course,index)=>{
                                            return(
                                                <CoursesCard
                                                key={index}

                                                {...course}
                                                /> );})}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>

                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        منصة إبداع هي منصة تعليمية تقوم على تقديم العديد من مسارات تطوير الويب بشرح تفصيلي تفاعلي باللغة العربية، وخطط دراسة مع اختبارات لضمان فهم الكود والتطبيق عليه.

                                    </Row>
                                </Tab.Pane>

                            </Tab.Content>
                                                </div>}
                                            </TrackVisibility>
                        </Tab.Container>

                    </Col>

                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right"/>
        </section>
    )
   }
   export default Courses;
