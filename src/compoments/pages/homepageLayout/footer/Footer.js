import React from "react";
import "./footer.css";
import Logo from "../../../../assets/logo.svg";
import Twitter from "../../../../assets/twitter.svg";
import Instagram from "../../../../assets/Group 20963Instagram.svg";
import Pintres from "../../../../assets/Pinterest - Originalsocial-media.svg";
import Facebook from "../../../../assets/Facebook - Originalsocial-media.svg";
import Linkined from "../../../../assets/LinkedIn - Originalsocial-media.svg";
import Youtube from "../../../../assets/YouTube - Originalsocial-media.svg";

const Footer = () => {
  return (
    <main>
      <div className="gray_footer_bg">
        <div className="footer-container center">
          <img
            src={Logo}
            alt="logo"
            className="xl:w-25 xl:h-8 sm:w-15 sm:h-5"
          />

          <div className="container flex_all_item">
            <div className="first-context">
              <p>Product by Retink Media UG</p>
              <p>Bonn, Germany</p>
            </div>

            <div className="second-context">
              <p>Get Early Acess</p>
              <p>Provide Feedback</p>
            </div>

            <div className="third-context">
              <p>Connect with Us</p>
              <div className="social-icon space-x-4">
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkined} alt="" />
                <img src={Youtube} alt="" />
                <img src={Pintres} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="black_footer_bg">
        <div className="footer-container center">
          <div className="appart">
            <p className="color">Copyright © 2021 Retink</p>
            <div className="left_side space-x-3">
              <p className="color">Privacy Policy</p>
              <p className="color">Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
