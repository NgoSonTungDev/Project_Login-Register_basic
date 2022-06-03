import React, { useEffect, useState } from "react";
import "./AccountManagement.scss";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AccountManagement = () => {
  const [data, setData] = useState([]);
  const [ID, setID] = useState("");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [story, setStory] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick2 = () => {
    setOpen(true);
  };

  const handleClose2 = (event, reason) => {
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

  const handleDelete = () => {
    handleClose();
    axios
      .delete(`http://localhost:5000/api/user/${ID}`)
      .then(function (response) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        handleClick2()
        setMessage("Xóa thành công !!! ")
        setStory("success")
      })
      .catch(function (error) {
        handleClick2()
        setMessage("Xóa thất bại !!! ")
        setStory("error")
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container_AccountManagement">
        <div className="container_AccountManagement_text">
          <h2>Quản Lý Tài Khoản</h2>
          <div class="search_quanlytk">
            <input type="search" placeholder="Mã nhân viên cần tìm ..." />
            <i class="fa-brands fa-searchengin"></i>
          </div>
        </div>
        <div
          className="container_AccountManagement_table"
          id="AccountManagement_table"
        >
          <table>
            <tr>
              <th>ID</th>
              <th>tên đăng nhập</th>
              <th>Email</th>
              <th>Ngày tài khoản được tạo</th>
              <th>Chức năng</th>
            </tr>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.updatedAt}</td>
                <td>
                  <button>
                    <i class="fa-solid fa-user-tag"></i>{" "}
                    <span>Xem chi tiết</span>
                  </button>
                  <button>
                    <i class="fa-solid fa-pen-to-square"></i>{" "}
                    <span>Chính Sửa</span>
                  </button>
                  <button
                    onClick={() => {
                      handleShow();
                      setID(item._id);
                    }}
                  >
                    <i class="bx bxs-trash"></i> <span>Xóa</span>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông Báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn chắt chắn muốn xóa tài khoản này không ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity={story} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AccountManagement;
