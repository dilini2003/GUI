import React from 'react';
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP 
} from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>our locations</h3>
                    <a href="#n"><i><FaMapMarkedAlt /></i>Colombo</a>
                    <a href="#n"><i><FaMapMarkedAlt /></i>Kegalle</a>
                    <a href="#n"><i><FaMapMarkedAlt /></i>Kandy</a>
                    <a href="#n"><i><FaMapMarkedAlt /></i>Ratnapura</a>
                    <a href="#n"><i><FaMapMarkedAlt /></i>Gampaha</a>
                    <a href="#n"><i><FaMapMarkedAlt /></i>Galle</a>
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
                    <a href="#n"><i><FaMapMarkedAlt /></i>account info</a>
                    <a href="#n"><i><FaMapMarkedAlt /></i>ordered items</a>
                    <a href="#n"><i><FaMapMarkedAlt /></i>privacy policy</a>
                    <a href="#n"><i><FaMapMarkedAlt /></i>payment method</a>
                    <a href="#n"><i><FaMapMarkedAlt /></i>our services</a>
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <a href="#n"><i><FaPhoneAlt /></i>+123-356-546</a>
                    <a href="#n"><i><FaPhoneAlt /></i>+123-356-547</a>
                    <a href="#n"><i><FaEnvelope /></i>bookly@gmail.com</a>
                    
                </div>
            </div>
            <div className="share">
                <a href="#n"><i><FaFacebookF /></i></a>
                <a href="#n"><i><FaTwitter /></i></a>
                <a href="#n"><i><FaInstagram /></i></a>
                <a href="#n"><i><FaLinkedinIn /></i></a>
                <a href="#n"><i><FaPinterestP /></i></a>
            </div>
            <div className="credit">Copyright 2025 © <span>Bookly.com</span> | all rights reserved</div>
        </section>
    </div>
  )
}

export default Footer
