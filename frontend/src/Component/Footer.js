import React from 'react';
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP 
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>our locations</h3>
                    <a href="\#"><i><FaMapMarkedAlt /></i>india</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>USA</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>russia</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>france</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>japan</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>africa</a>
                </div>
                <div className="box">
                    <h3>quick links</h3>
                    <a href="#Home"><i><FaMapMarkedAlt /></i>home</a>
                    <a href="#Featured"><i><FaMapMarkedAlt /></i>featured</a>
                    <a href="#Arrivals"><i><FaMapMarkedAlt /></i>arrivals</a>
                    <a href="#Reviews"><i><FaMapMarkedAlt /></i>Reviews</a>
                    <a href="#Blogs"><i><FaMapMarkedAlt /></i>blogs</a>
                </div>
                <div className="box">
                    <h3>extra links</h3>
                    <a href="\#"><i><FaMapMarkedAlt /></i>account info</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>ordered items</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>privacy policy</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>payment method</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>our services</a>
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <a href="\#"><i><FaPhoneAlt /></i>+123-356-546</a>
                    <a href="\#"><i><FaPhoneAlt /></i>+123-356-546</a>
                    <a href="\#"><i><FaEnvelope /></i>john@gmail.com</a>
                    
                </div>
            </div>
            <div className="share">
                <a href="\#"><i><FaFacebookF /></i></a>
                <a href="\#"><i><FaTwitter /></i></a>
                <a href="\#"><i><FaInstagram /></i></a>
                <a href="\#"><i><FaLinkedinIn /></i></a>
                <a href="\#"><i><FaPinterestP /></i></a>
            </div>
            <div className="credit">created by <span>CodeSlaves Design</span> | all rights reserved!</div>
        </section>
    </div>
  )
}

export default Footer
