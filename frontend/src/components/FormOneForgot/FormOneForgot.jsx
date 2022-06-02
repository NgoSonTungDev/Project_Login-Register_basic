import React, { useState } from "react";
import "./FormOneForgot.scss";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

const FormOneForgot = (props) => {
  const [userID, setUSerID] = useState("");
  const [check, setCheck] = useState(false);
  const [user, setUSer] = useState("");
  const [loading, setLoading] = useState(false);
  const data = props.dataAccount;

  const handleFindUser = () => {
    setLoading(true);
    if (user === "") {
      alert("Vui lòng nhập đầy đủ thông tin !!!");
    } else {
      if (data.find((e) => e.username === user)) {
        setLoading(false);
        const valueId = data.find((e) => e.username === user);
        setUSerID(valueId._id);
        setCheck(true);
      } else {
        setCheck(false);
      }
    }
  };

  props.handleCheckUSer(userID, check);

  return (
    <div>
      <div className="FormOneForgot">
        <p>Tìm tài khoản</p>
        <div className="FormOneForgot_input">
          <label htmlFor="">Tên tài khoản của bạn : </label>
          <input
            type="text"
            placeholder="Tên tài khoản ..."
            value={user}
            onChange={(e) => {
              setUSer(e.target.value);
            }}
          />
        </div>
        <LoadingButton
          onClick={handleFindUser}
          className="LoadingButton"
          size="small"
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </LoadingButton>
      </div>
    </div>
  );
};

export default FormOneForgot;
