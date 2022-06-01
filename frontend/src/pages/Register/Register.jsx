import React, { useEffect, useState } from "react";
import "./Register.scss";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [story, setStory] = useState("");
const navigation = useNavigate()
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleRegister = () => {
    if (username === "" || password === "" || email === "") {
      handleClick();
      setMessage("Không được bỏ trống !!!");
      setStory("warning");
    } else {
      axios
        .post("http://localhost:5000/api/auth/register", {
          username: username,
          password: password,
          email: email,
        })
        .then(function (response) {
          handleClick();
          setMessage("Đăng Kí Thành công !!!");
          setStory("success");
          setTimeout(() => {
            navigation("/")
          }, 2000);
        })
        .catch(function (error) {
          handleClick();
          setMessage("Đăng kí thất bại !!!");
          setStory("error");
        });
    }
  };

  return (
    <div>
      <div className="container_Register">
        <div className="container_Register_form">
          <h3>Đăng Nhập</h3>
          <div className="container_Register_form_text">
            <table>
              <tr>
                <td>Tên Đăng Nhập : </td>
                <td>
                  <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>Email :</td>
                <td>
                  <input
                    type="email"
                    required
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
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
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>
          </div>
          <br />
          <br />
          <button onClick={handleRegister}>Register</button>
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

export default Register;
