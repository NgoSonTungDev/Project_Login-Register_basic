import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [check, setCheck] = useState(true);
  const [check2, setCheck2] = useState(true);
  const username = localStorage.getItem("username");

  const handleuser = () => {
    var box = document.querySelector(".container_narbar_content_2");
    if (check === true) {
      box.style.display = "block";
      setCheck(false);
    } else {
      box.style.display = "none";
      setCheck(true);
    }
  };

  return (
    <div>
      <div className="container_narbar">
        <div className="container_narbar_logo">
          <p>SONTUNG_API</p>
        </div>
        <div className="container_narbar_content">
          <div className="container_narbar_content_name">
            <p>{username}</p>
          </div>
          <div className="container_narbar_content_user" onClick={handleuser}>
            <div className="container_narbar_content_2">
              <div className="arrow-up"></div>
              <div className="container_narbar_content_2_1">
                <i class="bx bx-message-dots"></i>
                <p> đóng góp & ý kiến</p>
              </div>
              <div className="container_narbar_content_2_1">
                <i class="fa-solid fa-user-lock"></i>
                <p> quyền riêng tư</p>
              </div>
              <div className="container_narbar_content_2_1">
                <i class="bx bx-question-mark"></i>
                <p> trợ giúp</p>
              </div>
              <div className="container_narbar_content_2_1">
                <i class="fa-solid fa-gear"></i>
                <p> cài đặt</p>
              </div>
              <Link
                to="/"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                <div className="container_narbar_content_2_1">
                  <i class="bx bx-log-out"></i>
                  <p> đăng xuất</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
