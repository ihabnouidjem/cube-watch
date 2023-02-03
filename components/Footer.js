import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-social-container">
        <div className="footer-msg">
          <input
            placeholder="write message ..."
            name="msg"
            className="footer-input"
          />
          <i className="big-icon footer-icon-submit">
            <AiOutlineSend />
          </i>
        </div>
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
