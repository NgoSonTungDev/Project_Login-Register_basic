import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.scss";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [story, setStory] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  const handleLogin = () => {
    if(user === "" || pass === ""){
      handleClick();
      setMessage("Không được bỏ trống !!!");
      setStory("warning");
    }else{
      axios
      .post("http://localhost:5000/api/auth/login", {
        username: user,
        password: pass,
      })
      .then(function (response) {
        handleClick();
        setMessage("Đăng Nhập Thành công !!!");
        setStory("success");
        setTimeout(() => {
          navigation("/")
        }, 2000);
      })
      .catch(function (error) {
        handleClick();
        setMessage("Đăng Nhập thất bại !!!");
        setStory("error");
      });
    }
  };

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
                  <input
                    type="text"
                    required
                    placeholder="username"
                    value={user}
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>Mật Khẩu :</td>
                <td>
                  <input
                    type="password"
                    required
                    placeholder="password"
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>
          </div>
          <br />
          <br />
          <button onClick={handleLogin}>Login</button>
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
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={story} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
