import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-copyright text-center py-3">
        <h6>
          &copy; {new Date().getFullYear()} Copyright by Avneet kaur
        </h6>
      </div>
    </div>
  );
};

export default Footer;
