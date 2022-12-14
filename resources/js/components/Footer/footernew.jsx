import React from "react";
import logo from "../../../../public/assets/img/logo.svg";

const  Footernew=()=>{
    return(

        <footer>
            <div className="footer">
                <div className="box">
                    <div className="image">
                        <img src={logo} alt="Logo"/>
                    </div>
                </div>
                <div className="box">
                    <h1>x</h1>
                    <a href="">hakımızda</a>
                    <a href="">hizmetlerimiz</a>
                    <a href="">sıkça sorulan sorular</a>
                    <a href="">faırbox'ta çalışmak</a>
                    <a href="">iletişim</a>
                </div>
                <div className="box">
                    <h1>للتواصل معنا </h1>
                    <p>+352 681 133 095</p>
                    <p>info@fairbox.com.tr</p>
                    <p>istiklal mah.bağlar cad.no:3/a serdivan/sakarya</p>
                </div>
                <div className="box">
                    <h1>çalışma saatleri</h1>
                    <p>pazartesi - pazar</p>
                    <p>08:00 - 18:00</p>
                </div>
            </div>
            <div className="f-btns">
                <a href="" className="f-btn">kurumsal teklif ver</a>
                <a href="" className="f-btn2"><i className="fa-solid fa-comment"></i> müşteri hizmeti</a>
            </div>
            <div className="credit">
                <p>copyright 2020 all rights by fairbox</p>
                <div className="icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>

    )


}
export default Footernew;
