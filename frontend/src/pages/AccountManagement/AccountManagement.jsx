import React, { useEffect, useState } from "react";
import "./AccountManagement.scss";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const AccountManagement = () => {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <Navbar />
      <div className="container_AccountManagement">
        <div className="container_AccountManagement_text">
          <h2>Quản Lý Tài Khoản</h2>
          <div class="search_quanlytk">
            <input type="search" placeholder="Mã nhân viên cần tìm ..." />
          </div>
        </div>
        <div className="container_AccountManagement_table" id="AccountManagement_table">
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
                    <i class="fa-solid fa-pen-to-square"></i>{" "}
                    <span>Chính Sửa</span>
                  </button>
                  <button>
                    <i class="bx bxs-trash"></i> <span>Xóa</span>
                  </button>
                  <button>
                    <i class="fa-solid fa-user-tag"></i>{" "}
                    <span>Xem chi tiết</span>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
