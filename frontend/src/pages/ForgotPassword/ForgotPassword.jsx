import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ForgotPassword.scss";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FormOneForgot from "../../components/FormOneForgot/FormOneForgot";
import FormTwoForgot from "../../components/FormTwoForgot/FormTwoForgot";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ForgotPassword = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const [userID, setUSerID] = useState("");
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

  useEffect(() => {
    console.log(userID);
    axios
      .get("http://localhost:5000/api/user/all-user")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log("lỗi :", error);
      });
  }, [userID]);

  const handleCheckUSer = (Id, e) => {
    setUSerID(Id);
    setCheck(e);
  };

  const handleShow = () => {
    var form1 = document.querySelector(".container_forgotPassword_form1");
    var form2 = document.querySelector(".container_forgotPassword_form2");
    if (check === false) {
      handleClick();
      setMessage("Đã tìm thấy user !!!");
      setStory("success");
      form1.style.display = "none";
      form2.style.display = "block";
    } else {
      handleClick();
      setMessage("Không tìm thấy user này !!!");
      setStory("info");
      form1.style.display = "block";
      form2.style.display = "none";
    }
  };

  return (
    <div>
      <div className="container_forgotPassword">
        <div className="container_forgotPassword_form1">
          <FormOneForgot dataAccount={data} handleCheckUSer={handleCheckUSer} handleShow={handleShow} />
        </div>
        <div className="container_forgotPassword_form2">
          <FormTwoForgot userID={userID} />
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

export default ForgotPassword;
