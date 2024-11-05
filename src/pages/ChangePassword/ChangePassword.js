import React, { useState } from "react";
import "./ChangePassword.css";
import signUpImage from "./ChangePW.png";

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="change-password-container">
      <div className="form-side">
        <div className="form-header">
          <h1>Đổi mật khẩu</h1>
          <p>Vui lòng đặt mật khẩu mới cho tài khoản của bạn.</p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-body">
            <div className="input-field">
              <input
                type={showPassword.currentPassword ? "text" : "password"}
                name="currentPassword"
                placeholder="Mật khẩu cũ"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => togglePasswordVisibility("currentPassword")}
              >
                {showPassword.currentPassword ? "Hide" : "Show"}
              </span>
            </div>
            <div className="input-field">
              <input
                type={showPassword.newPassword ? "text" : "password"}
                name="newPassword"
                placeholder="Mật khẩu mới"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => togglePasswordVisibility("newPassword")}
              >
                {showPassword.newPassword ? "Hide" : "Show"}
              </span>
            </div>
            <div className="input-field">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu mới"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {showPassword.confirmPassword ? "Hide" : "Show"}
              </span>
            </div>
            <button type="submit" className="submit-button">
              Đặt lại mật khẩu
            </button>
          </form>
        </div>
      </div>
      <div className="image-side">
        <img src={signUpImage} alt="Bus interior" className="image-group" />
      </div>
    </div>
  );
}

export default ChangePassword;
