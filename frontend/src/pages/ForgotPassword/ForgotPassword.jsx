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
    axios
      .get("http://localhost:5000/api/user/all-user")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log("lỗi :", error);
      });
  }, []);

  const handleCheckUSer = (Id,e)=>{
      console.log(Id);
  }

  return (
    <div>
      <div className="container_forgotPassword">
        <div className="container_forgotPassword_form1">
          <FormOneForgot dataAccount={data} handleCheckUSer={handleCheckUSer}/>
        </div>
        <div className="container_forgotPassword_form2">
          <FormTwoForgot/>
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
