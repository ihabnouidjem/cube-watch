import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-social-container">
        <input
          placeholder="write message ..."
          name="msg"
          className="footer-input"
        />
        <button className="footer-input-submit">Submit</button>
        <i className="big-icon">
          <BsFacebook />
        </i>
        <i className="big-icon">
          <BsInstagram />
        </i>
        <i className="big-icon">
          <BsTwitter />
        </i>
      </div>
      <div className="footer-copyright">
        <p className="footer-credits">credits: ihab nouidjem</p>
      </div>
    </div>
  );
}

export default Footer;
