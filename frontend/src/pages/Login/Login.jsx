import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.scss";

const Login = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <div className="container_Login">
        <div className="container_Login_form">
          <h3>Đăng Nhập</h3>
          <div className="container_Login_form_text">
            <table>
              <tr>
                <td>Tên Đăng Nhập : </td>
                <td>
                  <input type="text" required placeholder="username" />
                </td>
              </tr>
          
              <br />
              <tr>
                <td>Mật Khẩu :</td>
                <td>
                  <input type="password" required placeholder="password" />
                </td>
              </tr>
            </table>
          </div>
          <br />
          <br />
          <button>Login</button>
          <p class="text">
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigation("/register");
              }}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
