import { Col } from "react-bootstrap";

const ServicesCard = (props) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="Cours-imgbx">
                {/*<img src={imgUrl} />*/}
                <div className="Cours-txtx">
                    <h4>{props.title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
export default ServicesCard
