import {Col, Container, Row} from "react-bootstrap";
import logo from '/public/assets/img/logo.svg'
import {MailchimpForm} from "./MailchimpForm";
import navIcon1 from '/public/assets/img/nav-icon1.svg'
import navIcon2 from '/public/assets/img/nav-icon2.svg'
import navIcon3 from '/public/assets/img/nav-icon3.svg'
import About from "./About";
const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm/>

                    <Col>

                        <img src={logo} alt="Logo"/>

                    </Col>
                    <Col>
                        <div className="box">
                            <h1>معلومات</h1>
                        </div>

                    </Col>
                    <Col>
                        <div className="box">
                            <h1>معلومات</h1>
                        </div>

                    </Col>
                    <Row sm={6}>
                        <Col sm={5}></Col>
                        <Col sm={4}>
                            <p>معلومات عنا </p>
                            <p>اسئلة مكررة</p>
                            <p>الانضمام لنا </p>
                            <p>تواصل</p>
                        </Col>

                        <Col sm={3}>
                            <p>معلومات عنا </p>
                            <p>اسئلة مكررة</p>
                            <p>الانضمام لنا </p>
                            <p>تواصل</p>
                        </Col>
                    </Row>
                    {/*<Col>*/}
                    {/*    <div className="box">*/}
                    {/*        <h1>معلومات</h1>*/}
                    {/*    </div>*/}

                    {/*</Col>*/}

                    <Row className="copy">
                        <Col sm={6} className="text-center text-sm-end">

                            <p>CopyRight 2022 By Ebrahem AL Mando💜 </p>
                        </Col>
                        <Col sm={6} className="text-center ">
                            <div className="social-icon">
                                <a   href="#"><img src={navIcon1}alt=""/> </a>
                                <a href="#"><img src={navIcon2}alt=""/> </a>
                                <a href="#"><img src={navIcon3}alt=""/> </a>
                            </div>

                        </Col>
                    </Row>

                </Row>

            </Container>
        </footer>
    )

}
export default Footer;
