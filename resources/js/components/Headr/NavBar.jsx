import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";
import logo from '/public/assets/img/logo.svg'
import navIcon1 from '/public/assets/img/nav-icon1.svg'
import navIcon2 from '/public/assets/img/nav-icon2.svg'
import navIcon3 from '/public/assets/img/nav-icon3.svg'
import DropDown from "./DropDown";


const NavBar=() =>{
    const [classesDropdown,setClassesDropdown]=useState('');
    const [activeLink,setActiveLink]=useState('home')
    const [scrolled,setScrolled]=useState(false)
    useEffect(()=>{
    const onScroll=()=>{
        if(window.scrollY<50){
            setScrolled(false);
        }
        else {
            setScrolled(true);
        }
    }
    window.addEventListener("scroll",onScroll);
    return ()=>window.removeEventListener("scroll",onScroll);
    },[])
    const onUpdateActiveLink=(url,classes)=>{
        setActiveLink(url)
        setClassesDropdown(classes);
    }
    const onBlurDropdown=(classes)=>{
        setClassesDropdown(classes)
    }
    const  itemservices=[
        {key:'i1',
         itemname:'اشراف على المشاريع'
        },
        {key:'i2',
            itemname:'حلقات بحث'
        },
        {key:'i3',
            itemname:'واجبات وتكليفات'
        },
        {key:'i4',
            itemname:'مشاريع فصلية'
        },
        {key:'i5',
            itemname:'تصاميم منوعة'
        }
    ];
    const inquiries=[
        {
            key: 'i6',
            itemname: 'الاسئلة الشائعة'
        }
    ]
    return (
        <Navbar expand="lg"  className={scrolled?"scrolled":""}>
            <Container dir="rtl" >

                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="" dir="rtl"  >
                        <Nav.Link href="#home"   className={`${activeLink==='home'?'active navbar-link':'navbar-link'} `}
                                  onClick={()=>{onUpdateActiveLink('home')}}>الرئيسية</Nav.Link>
                        <DropDown title={'خدماتنا'}
                                  Href={'Our-services'}
                                  items={itemservices}
                                  onFocus={onUpdateActiveLink}
                                  onBlur={onBlurDropdown}
                                  onClick={onUpdateActiveLink}
                                  classes={activeLink==='Our-services'?classesDropdown:'navbar-link opacity-75 border-0'}/>
                        <Nav.Link href="#training-courses" className={activeLink==='training-courses'?'active navbar-link':'navbar-link'}
                                  onClick={()=>{onUpdateActiveLink('training-courses')}}> الدورات التدريبية</Nav.Link>
                        <DropDown title={'الاستفسارات'}
                                  Href={'inquiries'}
                                  items={inquiries}
                                  onFocus={onUpdateActiveLink}
                                  onBlur={onBlurDropdown}
                                  onClick={onUpdateActiveLink}
                                  classes={activeLink==='inquiries'?classesDropdown:'navbar-link opacity-75 border-0'}/>
                        <Nav.Link href="#who-are-we" className={activeLink==='who-are-we'?'active navbar-link':'navbar-link'}
                                  onClick={()=>{onUpdateActiveLink('who-are-we')}}>من نحن </Nav.Link>
                    </Nav>
                    <span className="navbar-text me-lg-5">
                        <div className="social-icon ">
                            <a   href="#"><img src={navIcon1}alt=""/> </a>
                            <a href="#"><img src={navIcon2}alt=""/> </a>
                            <a href="#"><img src={navIcon3}alt=""/> </a>

                        </div>
                        <button className="connect" onClick={()=>{console.log('Connection')}}>
                        <span> تواصل معنا</span>
                        </button>
                    </span>
                </Navbar.Collapse>
                <Navbar.Brand href="#home" >
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;
{/*<Nav.Link href="#Frequently-Asked-Questions" className={activeLink==='Frequently-Asked-Questions'?'active navbar-link':'navbar-link'}*/}
{/*          onClick={()=>{onUpdateActiveLink('Frequently-Asked-Questions')}}>الأسئلة الشائعة</Nav.Link>*/}
// <Nav.Link href="#inquiries"  className={activeLink==='inquiries'?'active navbar-link':'navbar-link'}
//           onClick={()=>{onUpdateActiveLink('inquiries')}}>الاستفسارات</Nav.Link>
{/*<Nav.Link href="#Our-services" className={activeLink==='Our-services'?'active navbar-link':'navbar-link'}*/}
{/*          onClick={()=>{onUpdateActiveLink('Our-services')}}>خدماتنا</Nav.Link>*/}

{/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
{/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
{/*    <NavDropdown.Item href="#action/3.2">*/}
{/*        Another action*/}
{/*    </NavDropdown.Item>*/}
{/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
{/*    <NavDropdown.Divider />*/}
{/*    <NavDropdown.Item href="#action/3.4">*/}
{/*        Separated link*/}
{/*    </NavDropdown.Item>*/}
{/*</NavDropdown>*/}
