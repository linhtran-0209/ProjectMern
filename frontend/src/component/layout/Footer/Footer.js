import React from "react";
import logo from "../../../images/logo.png"
import "../Footer/Footer.css";
const Footer = () => {
    return (
   
            <footer id="footer">
                <div className="leftFooter">
                    <img src={logo} alt="logo" />
                </div>
                <div className="midFooterLeft">
                    <h2 >Danh mục</h2>
                    <ul className="list-unstyled link-category">
                        <li className="sub-category"><a href='#' className= "link1">Điện Thoại</a></li>
                        <li className="sub-category"><a href='#' className= "link1">Cameras</a></li>
                        <li className="sub-category"><a href='#' className= "link1">Laptops</a></li>
                    </ul>
                </div>
                <div className="midFooterRight">
                    <h2 >Contact</h2>
                    <div className="sub-linkcontent">
                        <a href="https://www.facebook.com/hao.to.1238" className="icon"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/channel/UC9amnic1Ae2K2v9ELH3SrJw" className="icon"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/" className="icon"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                    </div>
                    
                </div>
                <div className="rightFooter">
                    <h2 >About me</h2>
                    <div className="sub">
                        <p className="sub-content-ft-1"><i className="fa fa-address-book-o"></i> 01 Võ Văn Ngân, Phường Linh Chiểu, Thủ Đức, Tp Hồ Chí Minh</p>
                        <p className="sub-content-ft-1"><i className="fa fa-phone-square"></i> 0352610224</p>
                        <p className="sub-content-ft-1"><i className="fa fa-envelope"></i> 19110231@student.hcmute.edu.vn</p>
                    </div>
                    
                </div>
                
            </footer>
        
    )
}

export default Footer
