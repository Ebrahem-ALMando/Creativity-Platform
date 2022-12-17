import React from "react";
import ActionTableButtons from "./ActionTableButtons";



const  TableRow=props=>{
    return(
      <tr>
            <th prop="row">
                {props.Data.id}
            </th>
            <td className="h-50">
                {props.Data.name}
            </td>
            {/*<td  className="h-50">{props.Data.email}</td>*/}
            {/*<td  className="h-50">{props.Data.counter}</td>*/}
            {/*<td  className="h-50">{props.Data.phone}</td>*/}
            <td  className="h-50">{props.Data.isAdmin?"نعم":"لا"}</td>
            <td  className="h-50"> {props.Data.isSupervisor?"نعم":"لا"}</td>
            <ActionTableButtons echRowID={props.Data.id} Data={props.Data}/>
        </tr>

    )
}

export default TableRow

