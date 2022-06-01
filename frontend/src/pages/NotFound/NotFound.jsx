import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="not-found">
        <img src="https://www.esic.nic.in/img/404.png" alt="" />
        
      </div>
      <div className="notfound_text">
          <p>Bạn không có quyền gì !!!</p>
        </div>
    </div>
  );
};

export default NotFound;
