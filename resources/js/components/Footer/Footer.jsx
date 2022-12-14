import {Col, Container, Row} from "react-bootstrap";
import logo from '/public/assets/img/logo.svg'
import {MailchimpForm} from "./MailchimpForm";
import navIcon1 from '/public/assets/img/nav-icon1.svg'
import navIcon2 from '/public/assets/img/nav-icon2.svg'
import navIcon3 from '/public/assets/img/nav-icon3.svg'

const Footer=()=>{
    return(
        <footer className="footer" id="who-are-we">
            <Container>
                <Row>
                    <MailchimpForm/>
                </Row>
            </Container>
                <div className="footer">
                    <div className="box">
                        <div className="image">
                            <a href="#"><img src={logo} alt="Logo"/></a>
                        </div>
                    </div>
                    <div className="box">
                        <h1>أوقات الدوام </h1>
                        <p>السبت - الخميس</p>
                        <p className="con" >08:00 AM - 06:00 PM</p>
                    </div>
                    <div className="box">
                        <h1>للتواصل معنا </h1>
                        <a className="con" href="https://wa.me/+352681133095" target="_blank">+352 681 133 095</a>
                        <a className="con" href="mailto:ebrahemalmando2001@gmail.com" >ebrahemalmando2001@gmail.com</a>
                    </div>
                    <div className="box">
                        <h1 >معلومات </h1>
                        <a href="">معلومات عنا</a>
                        <a href="">اسئلة مكررة</a>
                        <a href="#contact">انضم الينا</a>
                        <a href="#contact">تواصل</a>
                    </div>
                </div>
            <Container>
                <Row className="copy">
                    <Col sm={6} className="text-center text-sm-end">
                        <p className="name-copy">CopyRight 2022 By Ebrahem AL Mando💜 </p>
                    </Col>
                    <Col sm={6} className="text-center ">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ebrahem-al-madno-932106241/"  target="_blank"><img src={navIcon1}alt=""/> </a>
                            <a href="https://www.facebook.com/abo.mohamad.902604" target="_blank"><img src={navIcon2}alt=""/> </a>
                            <a href="https://www.instagram.com/ibrahim_aladnan/" target="_blank"><img src={navIcon3}alt=""/> </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;
