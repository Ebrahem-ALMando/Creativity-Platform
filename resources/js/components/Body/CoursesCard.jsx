import { Col } from "react-bootstrap";

const CoursesCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="Cours-imgbx">
                <img src={imgUrl} />
                <div className="Cours-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
export default CoursesCard
