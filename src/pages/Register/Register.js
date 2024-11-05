import React, { useState } from "react";
import "./Register.css";
import signUpImage from "./SignUp.png";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng ký, ví dụ gửi form lên server
    console.log("Form data:", formData);
  };

  return (
    <div className="register-container">
      <div className="image-side">
        <img src={signUpImage} alt="Bus interior" className="image-group" />
      </div>
      <div className="form-side">
        <div className="form-header">
          <h1>Đăng ký</h1>
        </div>
        <div className="form-container">
          <div className="form-note">
            <p className="note-text">
              Nhập thông tin dưới đây để đăng ký tài khoản cá nhân của bạn
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form-body">
            <div className="name-inputs">
              <input
                type="text"
                name="firstName"
                placeholder="Họ"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Tên"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="email-inputs">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="SĐT"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
              <label>
                Tôi đồng ý với tất cả các <a href="/terms">Điều khoản</a> và{" "}
                <a href="/privacy">Chính sách bảo mật</a>
              </label>
            </div>
          </form>
          <div className="have-account">
            <button
              type="submit"
              className="submit-button"
              disabled={!agreeTerms}
            >
              Tạo tài khoản
            </button>
            <p>
              Bạn đã có một tài khoản? <a href="/login">Đăng nhập</a>
            </p>
          </div>

          <div className="footer">
            <div className="separator" color="grey">
              Hoặc đăng ký với
            </div>
            <div className="social-login">
              <button className="facebook-button">Facebook</button>
              <button className="google-button">Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
