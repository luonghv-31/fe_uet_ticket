import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom"; // Thay vì useHistory

function Login() {
  const history = useNavigate(); // Thay thế useHistory
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // Trạng thái cho thông báo lỗi

  const handleLogin = (e) => {
    e.preventDefault();

    // Mô phỏng thông tin đăng nhập (thay thế bằng gọi API thực tế)
    const validUsername = "Nguyet"; // Tên đăng nhập hợp lệ
    const validPassword = "123456"; // Mật khẩu hợp lệ

    if (username === validUsername && password === validPassword) {
      // Nếu đăng nhập thành công, chuyển đến Homepage
      history("/homepage"); // Thay cho history.push("/homepage");
    } else {
      // Nếu đăng nhập không thành công, cập nhật thông báo lỗi
      setError("Không tìm thấy tài khoản");
    }
  };

  return (
    <div className="login-container">
      <div className="logo"></div>

      <div className="content">
        <div className="image-side">
          <img
            src="https://bizweb.dktcdn.net/thumb/grande/100/315/454/products/limousine-9-cho-sapa-ha-noi.jpg?v=1726158480747"
            alt="Group 4"
            className="image-group"
          />
        </div>

        <div className="form-side">
          <div className="form-container">
            <div className="form-header">
              <h1>Đăng nhập</h1>
              <p>Đăng nhập để truy cập tài khoản UETicket</p>
            </div>

            <div className="form-body">
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="Tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="login-button">
                  Đăng nhập
                </button>
                {error && <div className="error-message">{error}</div>}{" "}
                {/* Hiển thị thông báo lỗi */}
                <div className="save-password">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label htmlFor="rememberMe">Lưu đăng nhập</label>
                  </div>

                  <a href="/forgot-password" className="forgot-password-link">
                    Quên mật khẩu?
                  </a>
                </div>
                <div className="register-link">
                  <span>Chưa có tài khoản?</span>{" "}
                  <a href="/register">Đăng ký</a>
                </div>
                <div className="separator">
                  <span>Hoặc đăng nhập với</span>
                </div>
                <div className="social-login">
                  <button className="facebook-button">Facebook</button>
                  <button className="google-button">Google</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
