import React from "react";
import styled from "styled-components";
import {hoverEffect, themeColor} from "../../../utils";
import {AiFillEdit, BiShowAlt, MdDeleteForever} from "react-icons/all";
import {toast} from "react-toastify";
import imag from '/public/assets/img/meter2.svg'
import axios from "axios";
function ViewCourses(props) {
    //
    const deleteCourses=(id)=>{
        axios.post('api/delete/service/data',{
            idService:id,
        }).then(()=>{
            toast.error("تم الحذف بنجاح");
            setTimeout(()=>{
                location.reload();
            },2500)
        })
    }

    const getCoursesDetails=(id)=>{

        axios.post('/api/get/individual/user/details',{
            userId:id
        }).then((response)=>{
            //
            // currentUserName:response.data.name,
            // currentUserEmail:response.data.email,
            // currentUserPhone:response.data.phone,
            // currentUserCountry:response.data.country,
        })
        // console.log(this.state.currentEmployeeName );


    }

    // const viewMessage=(id)=>{
    //     // axios.post('api/view/message/data',{
    //     //     idMessage:id,
    //     // }).then(()=>{
    //     //     toast.error("تم المشاهدة بنجاح");
    //     //     setTimeout(()=>{
    //     //         location.reload();
    //     //     },2500)
    //     // })
    //     toast.success("تم مشاهدتها سيتم اعلام المرسل");
    // }
    return (
        <Card>
            <CardName>

                {props.data.name}
            </CardName>
            <ColumnTwo1>

                <CardContent>
                    <Excerpt>

                        {props.data.excerpt}
                        <IMG src={imag}/>
                    </Excerpt>

                    <MessageContent>
                        {props.data.description}
                    </MessageContent>
                    <Increase>
                        <Button   style={{margin:'1%'}} type="button"
                                  data-bs-toggle="modal" data-bs-target={"#UpdateModal"+ props.echRowID}
                                  onClick={() => {
                                      getCoursesDetails(props.echRowID)
                                  }}

                        >

                            <AiFillEdit/>
                        </Button>
                        {/*<UpdateModal  modalID={props.echRowID}  Data={props.data}/>*/}

                        <Button
                            onClick={()=>{
                                deleteCourses(props.data.id)
                            }}
                        >
                            <MdDeleteForever/>
                        </Button>

                    </Increase>
                </CardContent>
            </ColumnTwo1>

        </Card>




    );
}
const Button=styled.button`
color:white;
margin-left:1rem;
opacity:0.75;

&:hover{
opacity:1;
}
`
const SectionOne = styled.div`
  display: block;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 90%;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top:2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
      width: 100%;
  }
`;
const Card = styled.div`

  height: 100%;
  width: 70%;
  margin:5rem;
background-color: ${themeColor};
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    margin:1rem;
  }
`;

const CardContent = styled.div`
  margin: 1rem;

`;


const CardName = styled.h1`
  text-align: center;
  font-weight: normal;

`;

const MessageContent = styled.p`
  font-size:20px;
  text-align: right;
`;

const Increase = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;
const IMG=styled.img`
 display: flex;
align-items:left
width:5rem;
 height: 5rem;
 margin-left:-10rem
`
const Excerpt=styled.div`
 display: flex;
  text-align: right;
    margin-left:1rem;
    margin-bottom:1rem;
    opacity:0.8;
    font-size:15px;
`
export default ViewCourses;
