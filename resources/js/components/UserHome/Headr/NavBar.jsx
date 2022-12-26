import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";
import logoHome from '/public/assets/img/logoHome.png'
import navIcon1 from '/public/assets/img/nav-icon1.svg'
import navIcon2 from '/public/assets/img/nav-icon2.svg'
import navIcon3 from '/public/assets/img/nav-icon3.svg'
import DropDown from "./DropDown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {RiLoginCircleFill} from "react-icons/all";
import logout from '/public/assets/img/logout.png'
import Enquiries from "../Enquiries Page/Enquiries";
const NavBar=(props) =>{
    const [classesDropdown,setClassesDropdown]=useState('');
    const [activeLink,setActiveLink]=useState('home')
    const [scrolled,setScrolled]=useState(false)
    const[isLogin,setIsLogin]=useState(false);
    const [userData,setUserData]=useState('');

    const getIdUser=()=>{
        axios.get('/get/id/user/data').then((response)=>{
            if(response.data){
                console.log(response.data)
                setUserData(response.data);
            }
            else {
                setUserData(false);
            }


        })
    }
    let viewMessage=true;
    useEffect(()=>{
        getIdUser();
    const onScroll=()=>{

        if(window.scrollY<50){

            setScrolled(false);
            // setTimeout(()=>{
            //
            //
            //     viewMessage=true;
            // },2000)

        }
        else {
            setScrolled(true);
        }
        if(window.scrollY>=450 &&window.scrollY<=600&&viewMessage){
            viewMessage=false;
             toast.info("قم بالضغط على الاسهم لرؤية خدمات أكثر", {
                position: toast.POSITION.BOTTOM_RIGHT}
            )
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
            href:"/enquiry",
            itemname: 'أرسل استفسارك'
        },
        {
            key: 'i7',
            href:"/",
            itemname: 'الاسئلة الشائعة',
        }
    ]


    return (
        <Navbar expand="lg"  className={scrolled?"scrolled":""}>
            <Container dir="rtl" >

                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Brand href="#home" >
                    <img className="logo" src={logoHome} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="" dir="rtl"  >
                        {/*{localStorage.getItem('userdata')?*/}
                        {userData?
                            <>
                                <li className="nav-item dropdown">
                                    <a id="navbarDropdown" className="nav-link dropdown-toggle btn btn-light" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                        {userData[1]}
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <Nav.Link href="/logout/user"   className= "btn btn-light"
                                        >تسجيل الخروج</Nav.Link>
                                    </div>
                                </li>
                                {userData[0]===1?

                                            <Nav.Link href="/dashboard"  className={`${activeLink==='dashboard'?'active navbar-link':'navbar-link'} `}
                                                      onClick={()=>{onUpdateActiveLink('dashboard')}}> لوحة التحكم</Nav.Link>

                                    :
                                    <Link

                                        className="text-decoration-none  link-light" to="/myEnquiries" >
                                        <Nav.Link href="/myEnquiries"  className={`${activeLink==='enquiries'?'active navbar-link':'navbar-link'} `}
                                                  onClick={()=>{onUpdateActiveLink('enquiries')}}>استفساراتي</Nav.Link>
                                    </Link>
                                }

                          </>

                            :
                            <Nav.Link href="/login/user"   className= "btn btn-light"
                                      onClick={()=>{onUpdateActiveLink('login')}}>تسجيل الدخول</Nav.Link>
                            // <Link
                            //
                            //     className="text-decoration-none  link-light" to="/login/user" >
                            // </Link>


                        }
                        {/*<Nav.Link href="#home"   className= "btn btn-light"*/}
                        {/*          onClick={()=>{onUpdateActiveLink('home')}}>تسجيل الدخول</Nav.Link>*/}

                        {/*{isLogin?  <div className="social-icon ">*/}
                        {/*    <a href="/login" target="_blank"><img src={logout} alt=""/> </a>*/}
                        {/*    <a href="/register" target="_blank"><img src={logout} alt=""/> </a>*/}
                        {/*</div>:*/}
                        {/*    <div className="social-icon ">*/}
                        {/*        <a href="/login" target="_blank"><img src={logout} alt=""/> </a>*/}

                        {/*    </div>*/}
                        {/*}*/}

                        <Nav.Link href="#home"   className={`${activeLink==='home'?'active navbar-link':'navbar-link'} `}
                                  onClick={()=>{onUpdateActiveLink('home')}}>الرئيسية</Nav.Link>
                        <DropDown title={'خدماتنا'}
                                  Href={'Our-services'}
                                  items={itemservices}
                                  onFocus={onUpdateActiveLink}
                                  onBlur={onBlurDropdown}
                                  onClick={onUpdateActiveLink}
                                  classes={activeLink==='Our-services'?classesDropdown:'navbar-link opacity-75 border-0'}/>
                        <Nav.Link href="#courses" className={activeLink==='training-courses'?'active navbar-link':'navbar-link'}
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
                                  <a href="resources/js/components/UserHome/Headr/NavBar" target="_blank"><img src={navIcon1} alt=""/> </a>
                            <a href="https://www.facebook.com/abo.mohamad.902604" target="_blank"><img src={navIcon2}alt=""/> </a>
                            <a href="resources/js/components/UserHome/Headr/NavBar" target="_blank"><img src={navIcon3} alt=""/> </a>

                        </div>


                        <HashLink to="#contact">
                        <button className="connect" onClick={()=>{console.log('Connection')}}>
                        <span> تواصل معنا</span>
                        </button>

                        </HashLink>


                    </span>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}
export default NavBar;
