import {useEffect,useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import Typical from 'react-typical'
import Typewriter from 'typewriter-effect'
const BannerHome=()=>{
    // const [loopNum,setLoopNum]=useState(0);
    // const [isDeleting,setIsDeleting]=useState(false);
    // const [text,setText]=useState('');
    // const [index, setIndex] = useState(1);
    // const period=2000;
    // const toRotate=[" حلول لجميع المشاكل البرمجية","اشراف على مشاريع التخرج والمشاريع الفصلية ","الاجابة على الاسفسارات المطروحة"];
    // const [delta,setDelta]=useState(200- Math.random() *100)
    //
    // useEffect(() => {
    //     let ticker = setInterval(() => {
    //         tick();
    //     }, delta);
    //
    //     return () => { clearInterval(ticker) };
    // }, [text])
    //
    // const tick = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    //
    //     setText(updatedText);
    //
    //     if (isDeleting) {
    //         setDelta(prevDelta => prevDelta / 2);
    //     }
    //
    //     if (!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setIndex(prevIndex => prevIndex - 1);
    //         setDelta(period);
    //     } else if (isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoopNum(loopNum + 1);
    //         setIndex(1);
    //         setDelta(400);
    //     } else {
    //         setIndex(prevIndex => prevIndex + 1);
    //     }
    // }
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
                                    {/*{text}*/}
                                            <Typewriter
                                                options={{
                                                    pauseFor:3000,
                                                    deleteSpeed:80,
                                                    autoStart:true,
                                                    loop:true,
                                                    delay:50,
                                                    strings:['الاجابة على الاسفسارات المطروحة', 'اشراف على مشاريع التخرج والمشاريع الفصلية',
                                                        'حلول لجميع المشاكل البرمجية' ]}}/>
                                        {/*<Typical*/}

                                        {/*wrapper="a"*/}
                                        {/*steps={[*/}
                                        {/*    'الاجابة على الاسفسارات المطروحة',*/}
                                        {/*    5000,*/}
                                        {/*    'اشراف على مشاريع التخرج والمشاريع الفصلية',*/}
                                        {/*    5000,*/}
                                        {/*    'حلول لجميع المشاكل البرمجية',*/}
                                        {/*    5000,*/}
                                        {/*]}*/}
                                        {/*/>*/}
                                         </h1>
                                    <p>منصة إبداع  هي منصة تعليمية تقوم على تقديم العديد من مسارات تطوير الويب بشرح تفصيلي تفاعلي باللغة العربية، وخطط دراسة مع اختبارات لضمان فهم الكود والتطبيق عليه.</p>
                                    <button> <ArrowRightCircle size={25}  />  أرسل اسفسارك</button>
                                </div>}
                        </TrackVisibility>
                        {/*<h1>/!*{`قم بالاشتراك واحصل على الميزات `}*!/<span className="warp" dataPeriod="1000">{text}*/}
                        {/*</span></h1>*/}
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

// export const Banner = () => {
//
//
//
//     return (
//         <section className="banner" id="home">
//             <Container>
//                 <Row className="aligh-items-center">
//                     <Col xs={12} md={6} xl={7}>
//
//                     </Col>
//                     <Col xs={12} md={6} xl={5}>
//                         <TrackVisibility>
//                             {({ isVisible }) =>
//                                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                                     <img src={headerImg} alt="Header Img"/>
//                                 </div>}
//                         </TrackVisibility>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     )
// }
