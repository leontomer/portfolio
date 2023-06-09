import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { myName, myEmail, myPhone } from "../../Constants";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <span>
        <a href="https://www.linkedin.com/in/tomer-leon-react-developer/">
          <LinkedInIcon fontSize="large" />
          <div className="contact-info">{myName}</div>
        </a>
      </span>
      <span className="next-contact">
        <a href="mailto:leontomer@gmail.com">
          <AlternateEmailIcon fontSize="large" />
          <div>{myEmail}</div>
        </a>
      </span>
      <span className="next-contact">
        <PhoneAndroidIcon fontSize="large" />{" "}
        <div className="contact-info">{myPhone}</div>
      </span>
    </div>
  );
};

export default ContactMe;
