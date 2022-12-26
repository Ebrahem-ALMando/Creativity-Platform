import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import {Link} from "react-router-dom";
const  DropDown=(props)=> {
const onUpdateActiveLink=()=>{
    props.onClick(props.Href,'active navbar-link opacity-100 border-0 ');
    props.onFocus(props.Href,'active navbar-link opacity-100 border-0 ')
}
    const onBlurDropdown=()=>{
        props.onBlur('navbar-link opacity-75 border-0');
    }
    return (
        <Dropdown  onClick={onUpdateActiveLink} onBlur={onBlurDropdown}
                   onMouseEnter={onUpdateActiveLink} onMouseLeave={onBlurDropdown} >
            <Dropdown.Toggle  variant="" id="dropdown-basic" className={`${props.classes} text-white Dropdown `}>
             {props.title}
            </Dropdown.Toggle>
            <Dropdown.Menu>

                {props.items.map((item,index)=>{
                    // Used React.Fragment "key" to Error:  Warning: Each child in a list should have a unique "key
                    return(
                        <React.Fragment key={index}>
                            <Link
                                className="text-decoration-none link-light" to={item.href} >
                            {/*<Dropdown.Item  href={`#${item.key}`}>{item.itemname }</Dropdown.Item>*/}
                                <Dropdown.Item  href={item.href}>{item.itemname }</Dropdown.Item>

                            </Link>
                        </React.Fragment>
                    );})}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDown;
