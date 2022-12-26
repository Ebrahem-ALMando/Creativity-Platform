import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Info from "./Info";
import ViewCardInfo from "./viewCardInfo";
import HomePage from "./GohomePage";
import Members from "./Members";
import { themeColor2} from "../../utils";
import Students from "./Students";

function MainContent() {
    const [countUsers,setCountUsers]=useState(0);
    const [upUsers,setUpUsers]=useState([]);
    const [countMessage,setCountMessage]=useState(0);
    const [countCourses,setCountCourses]=useState(0)
    const [countService,setCountService]=useState(0)
    const [countEnquiries,setCountEnquiries]=useState([]);

    const getCountCourses=()=>{
        axios.get('/api/get/count/courses').then((response)=>{
            if(response.status===200){
                setCountCourses(response.data);
            }
        })
    }
    const getCountService=()=>{
        axios.get('/api/get/count/service').then((response)=>{
            if(response.status===200){
                setCountService(response.data);
            }
        })
    }

    const getCountMessage=()=>{
        axios.get('/api/get/count/message').then((response)=>{
            if(response.status===200){
                setCountMessage(response.data);
            }
        })
    }
    const getCountEnquiries=()=>{
        axios.get('api/get/all/count/enquiries').then((response)=>{
            setCountEnquiries(response.data);
        })
    }
    const getCountUsers=()=>{
        axios.get("/api/all/count/users").then((response)=>{
            if(response.status===200){
                setCountUsers(response.data)
            }
        })
    }
    const getTowUpUser=()=>{
        axios.get("/api/all/tow/user").then((response)=>{
            if(response.status===200){
                setUpUsers(response.data)
            }
        })
    }

    useEffect(()=>{
        getCountService();
        getCountCourses();
        getTowUpUser();
        getCountMessage();
        getCountEnquiries()
        getCountUsers()
    },[])

    return (
        <Container>
            <Navbar />
            <SubContainer>
                <SectionOne>
                    <ColumnOne1>
                        <ViewCardInfo title={"المستخدمين"} count={countUsers||"0"}
                        time={"  منذ اخر شهر"}
                        increment={"10%"}
                        />
                        <Info
                              countSectionTow={countEnquiries}
                              titleSectionTow={'الاسفسارات'}
                              timeSectionTow={"هذا الاسبوع 10%"}
                              countSectionOne={countMessage}
                              timeSectionOne={"هذا الشهر 20%"}
                              titleSectionOne={"الرسائل"}
                              badgeOne={"مشاريع"}
                              badgeTow={"برمجيات"}
                              url={"/Enquiries"}
                        />

                    </ColumnOne1>
                    <ColumnTwo1>
                        <TitleText>المضافين حديثا </TitleText>
                        <Members
                        datamembers={upUsers}
                        />
                    </ColumnTwo1>
                </SectionOne>
                <SectionOne>
                    <ColumnOne1>
                        <ViewCardInfo title={"الطلاب"} count={70}
                                      time={"  منذ اخر شهر"}
                                      increment={"20%"}
                                      bgcolor={themeColor2}
                        />
                        <Info
                            countSectionTow={countCourses}
                            timeSectionTow={"هذا الشهر 20%"}
                            titleSectionTow={"الدورات "}
                            countSectionOne={countService}
                            timeSectionOne={"هذا الشهر 5%"}
                            titleSectionOne={"الخدمات "}
                            badgeOne={" ويب"}
                            badgeTow={"برمجيات"}
                            url={"/courses"}
                            />
                    </ColumnOne1>
                    <ColumnTwo1>
                        <Students/>
                    </ColumnTwo1>
                </SectionOne>

                <SectionTwo>
                    {/*<ColumnOne2>*/}
                    {/*    <InvoiceContainer>*/}
                    {/*        <TitleText></TitleText>*/}

                    {/*    </InvoiceContainer>*/}
                    {/*</ColumnOne2>*/}
                    <ColumnTwo2>
                        <TitleText>الصفحة الرئيسية</TitleText>
                        <HomePage/>

                    </ColumnTwo2>

                </SectionTwo>

            </SubContainer>

        </Container>
    );
}

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const TitleText = styled.h3`
  height: 26%;
  /* padding-top */
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default MainContent;
