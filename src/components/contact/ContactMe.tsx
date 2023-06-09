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
        <LinkedInIcon fontSize="large">
          <a href="https://www.linkedin.com/in/tomer-leon-react-developer/"></a>
        </LinkedInIcon>
        <a href="https://www.linkedin.com/in/tomer-leon-react-developer/">
          <div className="contact-info">{myName}</div>
        </a>
      </span>
      <span className="next-contact">
        <AlternateEmailIcon fontSize="large" />
        <a href={"mailto:leontomer@gmail.com"}>
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
