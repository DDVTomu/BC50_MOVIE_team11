import React from "react";
import { Link } from "react-router-dom";

const saveRoute = () => {
  localStorage.setItem("previousRoute", window.location.pathname);
};

export default function UserPrompt() {
  return (
    <div className="loading-overlay">
      <div className="prompt-box">
        <h4>Bạn cần phải Đăng nhập/Đăng ký để hoàn tất</h4>
        <div className="prompt-buttons">
          <Link
            to={`/auth`}
            className="btn btn-success btn-movie"
            onClick={saveRoute}
          >
            Đăng Nhập
          </Link>
          <Link to={`/register`} className="btn btn-success btn-movie">
            Đăng Ký
          </Link>
        </div>
      </div>
    </div>
  );
}
