import React, { useState } from "react";
import "./FormTwoForgot.scss";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FormTwoForgot = () => {
  const [loading, setLoading] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
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

  const handleChangePass = () => {
    axios
      .post("http://localhost:5000/api/auth/62981df4470faa4e42048436", {
        password: oldPass,
      })
      .then(function (response) {
        hangdlechangePass();
      })
      .catch(function (error) {});
  };

  const hangdlechangePass = () => {
    axios
      .put("http://localhost:5000/api/user/6295954aaf5b9d211415b96f", {
        password: newPass,
      })
      .then(function (response) {})
      .catch(function (error) {});
  };

  return (
    <div>
      <div className="container_FormTwoForgot">
        <p>Thay đổi mật khẩu</p>
        <div className="container_FormTwoForgot_form">
          <label htmlFor="">Mật khẩu cũ : </label>
          <input
            type="pasword"
            placeholder="Old passwork ..."
            value={oldPass}
            onChange={(e) => {
              setOldPass(e.target.value);
            }}
          />
        </div>
        <div className="container_FormTwoForgot_form1">
          <label htmlFor="">Mật khẩu mới : </label>
          <input
            type="pasword"
            placeholder="New passwork ..."
            value={newPass}
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
          />
        </div>
        <LoadingButton
          loading={loading}
          onClick={handleChangePass}
          className="btnloadding"
          variant="outlined"
        >
          Submit
        </LoadingButton>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={story} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FormTwoForgot;
