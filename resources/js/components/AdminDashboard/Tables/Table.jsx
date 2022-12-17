import React, {useEffect, useState} from "react";
import TableRow from "./TableRow";
import CreateModal from "../users/CreateModal";


const  Table=(props)=>{



    return(


        <table className="table table-dark table-striped "
               style={{maxWidth:'70%' ,marginTop:'5rem',marginRight:'3%',marginLeft:'5%'}}>

            <thead>
            <CreateModal/>
            <tr>
                <th scope="col">#</th>
                <th scope="col">{props.Col1}</th>
                {/*<th scope="col">{props.Col2}</th>*/}
                {/*<th scope="col">{props.Col3}</th>*/}
                {/*<th scope="col">{props.Col4}</th>*/}
                <th scope="col">{props.Col5}</th>
                <th scope="col">{props.Col6}</th>
                <th style={{textAlign:'center'}} scope="col">تحكم</th>
            </tr>
            </thead>
            <tbody >


                {props.data.map((user,index)=>{
                    return (
                 <TableRow Data={user} key={index}/>
                        )
                })
                }
            </tbody>

        </table>

    )

}
export default Table;
