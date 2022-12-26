import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Row,Container} from "react-bootstrap";
import meter1 from '/public/assets/img/meter1.svg'
import meter2 from '/public/assets/img/meter2.svg'
import propgramming from '/public/assets/img/propgramming.jfif'

import meter3 from '/public/assets/img/meter3.svg'
import prject2 from '/public/assets/img/project-img2.png'
import colorSharpL from '/public/assets/img/color-sharp.png'
import colorSharpR from '/public/assets/img/color-sharp2.png'
import React from 'react';
import TrackVisibility from "react-on-screen";
import {useEffect, useState} from "react";
import {HashLink} from "react-router-hash-link";
import {BrowserRouter} from "react-router-dom";

const  Services=()=>{
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [allService,setAllService]=useState([]);
    const getAllMessage=()=>{
        axios.get('api/get/all/services').then((response)=>{
            console.log(response.data);
            setAllService(response.data);
        })
    }
    useEffect(()=>{
        getAllMessage();
    },[])
    const  Services=[
        {key:'i1',
            itemname:'اشراف على المشاريع',
            image:meter1

        },
        {key:'i2',
            itemname:'حلقات بحث',
            image:prject2
        },
        {key:'i3',
            itemname:'واجبات وتكليفات',
            image:meter3
        },
        {key:'i4',
            itemname:'مشاريع فصلية',
            image:meter1
        },
        {key:'i5',
            itemname:'تصاميم منوعة',
            image:meter1
        }
    ];
    return(
      <section className="service">
        <Container>
            <Row>
                <Col>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ?"animate__animated animate__slideInUp":""}>
                       <div className="service-bx" >
                            <h2>
                                خدماتنا
                            </h2>
                           <p>منصة إبداع  هي منصة تعليمية تقوم على تقديم العديد من مسارات تطوير الويب بشرح تفصيلي تفاعلي باللغة العربية، وخطط دراسة مع اختبارات لضمان فهم الكود والتطبيق عليه.</p>
                      <Carousel responsive={responsive} infinite={true} className="service-slider">

                          {allService.map((service,index)=>{
                              return(
                                  <React.Fragment key={index}>
                                      {/*<ServicesCard*/}
                                      {/*    des={service.description}*/}
                                      {/*    key={index}*/}

                                      {/*/>*/}
                                      <div className="item" id={service.id}>
                                          <img src={propgramming} alt="Image"/>
                                          <h5>
                                              {service.name}
                                          </h5>
                                          <p>
                                              {service.excerpt}
                                          </p>

                                            <HashLink to="#contact">
                                          <button  className="btn btn-primary">
                                              اطلب الان
                                          </button>
                                            </HashLink>

                                      </div>
                                  </React.Fragment>
                              )
                          })}
                      </Carousel>
                       </div>
                        </div>}
                    </TrackVisibility>

                </Col>
            </Row>

        </Container>
          <img src={colorSharpL} className="background-image-left"/>
          <img src={colorSharpR} className="background-image-right"/>

      </section>
    );

}
export default Services;
