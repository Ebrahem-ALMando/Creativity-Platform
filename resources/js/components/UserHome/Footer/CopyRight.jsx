import {Col, Row} from "react-bootstrap";
import navIcon1 from "../../../../../public/assets/img/nav-icon1.svg";
import navIcon2 from "../../../../../public/assets/img/nav-icon2.svg";
import navIcon3 from "../../../../../public/assets/img/nav-icon3.svg";

const CopyRight=()=>{
    return(
<Row className="copy">
    <Col sm={6} className="text-center text-sm-end">
        <p className="name-copy">
            CopyRight 2022 By Ebrahem AL Mando💜{" "}
        </p>
    </Col>
    <Col sm={6} className="text-center ">
        <div className="social-icon">
            <a
                href="resources/js/components/UserHome/Footer/Footer"
                target="_blank"
            >
                <img src={navIcon1} alt="" />{" "}
            </a>
            <a
                href="https://www.facebook.com/abo.mohamad.902604"
                target="_blank"
            >
                <img src={navIcon2} alt="" />{" "}
            </a>
            <a
                href="resources/js/components/UserHome/Footer/Footer"
                target="_blank"
            >
                <img src={navIcon3} alt="" />{" "}
            </a>
        </div>
    </Col>
</Row>
    )
}
export default CopyRight;
