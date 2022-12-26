
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import CopyRight from "../UserHome/Footer/CopyRight";
import {Link} from "react-router-dom";
import Home from "../UserHome/Home/Home";
import React from "react";

const Login=()=> {

    return (
        <>
            <MDBCol className="text-left m-4" >
                {/*<Link*/}

                {/*    className="text-decoration-none  link-light" to="/home" >*/}
                <a href="/home" className="btn btn-primary w-25 m-auto" >
                    الرئيسبة
                </a>
                {/*</Link>*/}


            </MDBCol>
              <MDBContainer fluid className="p-3 my-5 h-custom">


                  <MDBRow>

                      <MDBCol col='10' md='6'>

                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                               className="img-fluid" alt="Sample image"/>
                      </MDBCol>

                      <MDBCol col='4' md='6'>

                          <div className="d-flex flex-row align-items-center justify-content-center">

                              <p className="lead fw-normal mb-0 me-3">مرحبا بك . . قم بتسجيل الدخول</p>

                              {/*<MDBBtn floating size='md' tag='a' className='me-2'>*/}
                              {/*    <MDBIcon fab icon='facebook-f' />*/}
                              {/*</MDBBtn>*/}

                              {/*<MDBBtn floating size='md' tag='a'  className='me-2'>*/}
                              {/*    <MDBIcon fab icon='twitter' />*/}
                              {/*</MDBBtn>*/}

                              {/*<MDBBtn floating size='md' tag='a'  className='me-2'>*/}
                              {/*    <MDBIcon fab icon='linkedin-in' />*/}
                              {/*</MDBBtn>*/}

                          </div>

                          <div className="divider d-flex align-items-center my-4">
                              {/*<p className="text-center fw-bold mx-3 mb-0">Or</p>*/}
                          </div>

                          <MDBInput
                                    id="email"

                                      name="email"  required
                                    wrapperClass='mb-4' label='الايميل' id='formControlLg' type='email' size="lg"/>
                          <MDBInput
                                    name="password"
                                    id="password"
                                    wrapperClass='mb-4' label='كلمة السر' id='formControlLg' type='password' size="lg"/>

                          <div className="d-flex justify-content-between mb-4">
                              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='تذكرني'/>
                              <a href="!#">نسيت كلمة المرور؟</a>
                          </div>

                          <div className='text-center text-md-start mt-4 pt-2'>
                              <button  className="mb-0 px-5 btn btn-light" size='lg'
                                      type="submit">
                                  تسجيل الدخول
                              </button>

                              <p className="small fw-bold mt-2 pt-1 mb-2">لا تملك حساب؟ <a href="#"
                                                                                           className="link-danger">انشاء
                                  حساب</a></p>
                          </div>

                      </MDBCol>

                  </MDBRow>

                  <div style={{marginTop: '3rem'}}>

                      <CopyRight/>

                  </div>

              </MDBContainer>

    </>
    );
}

export default Login;
