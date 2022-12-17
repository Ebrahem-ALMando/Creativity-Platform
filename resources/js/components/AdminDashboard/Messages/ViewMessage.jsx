import React from "react";
import styled from "styled-components";
import {hoverEffect, themeColor} from "../../../utils";
import {BiShowAlt, MdDeleteForever} from "react-icons/all";
import {toast} from "react-toastify";

function ViewMessage(props) {

        const deleteMessage=(id)=>{
            axios.post('api/delete/message/data',{
                idMessage:id,
            }).then(()=>{
                toast.error("تم الحذف بنجاح");
                setTimeout(()=>{
                    location.reload();
                },2500)
            })

        }
    const viewMessage=(id)=>{
        // axios.post('api/view/message/data',{
        //     idMessage:id,
        // }).then(()=>{
        //     toast.error("تم المشاهدة بنجاح");
        //     setTimeout(()=>{
        //         location.reload();
        //     },2500)
        // })
        toast.success("تم مشاهدتها سيتم اعلام المرسل");
    }
    return (



                <Card>
                    <CardName>

                        {props.data.firstName} {props.data.lastName}
                    </CardName>
                <ColumnTwo1>

                        <CardContent>
                            <Email>
               Emile :{props.data.email}
                            </Email>
                            <Phone>
                Phone:    {props.data.phone}
                            </Phone>
                            <MessageContent>
                                {props.data.message}
                            </MessageContent>
                            <Increase>
                                <Button
                                    onClick={()=>{
                                        viewMessage(props.data.id)
                                    }}>
                                    <BiShowAlt/>
                                </Button>
                                <Button onClick={()=>{
                                    deleteMessage(props.data.id)
                                }}>
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
const Phone=styled.div`
    opacity:0.8;
  font-size:15px;
  text-align: left;
`
const Email=styled.div`

  text-align: left;
    margin-right:1rem;
    opacity:0.8;
    font-size:15px;
`
export default ViewMessage;
