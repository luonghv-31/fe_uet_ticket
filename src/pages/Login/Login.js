// src/pages/Login/Login.js
import React, { useState } from "react";
import "./Login.scss";
import signInImage from "./SignIn.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập
  };

  return (
    <div className="login-container">
      <div className="form-side">
        <div className="form-container">
          <div className="form-header">
            <h1>Đăng nhập</h1>
            <p>Đăng nhập để truy cập tài khoản UETicket</p>
          </div>
          <form onSubmit={handleLogin} className="form-body">
            <input
              type="email"
              placeholder="Tên đăng nhập"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="options">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label>Lưu đăng nhập</label>
              </div>
              <a href="/forgot-password" className="forgot-password-link">
                Quên mật khẩu
              </a>
            </div>
            <button type="submit" className="login-button">
              Đăng nhập
            </button>
          </form>
          <div className="footer">
            <p>
              Chưa có tài khoản? <a href="/register">Đăng ký</a>
            </p>
            <div className="separator">Hoặc đăng nhập với</div>
            <div className="social-login">
              <button className="facebook-button">Facebook</button>
              <button className="google-button">Google</button>
            </div>
          </div>
        </div>
      </div>
      <div className="image-side">
        <img src={signInImage} alt="Bus interior" className="image-group" />
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import "./Login.scss";
// import { useNavigate } from "react-router-dom"; // Thay vì useHistory

// function Login() {
//   const history = useNavigate(); // Thay thế useHistory
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState(""); // Trạng thái cho thông báo lỗi

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Mô phỏng thông tin đăng nhập (thay thế bằng gọi API thực tế)
//     const validUsername = "Nguyet"; // Tên đăng nhập hợp lệ
//     const validPassword = "123456"; // Mật khẩu hợp lệ

//     if (username === validUsername && password === validPassword) {
//       // Nếu đăng nhập thành công, chuyển đến Homepage
//       history("/homepage"); // Thay cho history.push("/homepage");
//     } else {
//       // Nếu đăng nhập không thành công, cập nhật thông báo lỗi
//       setError("Không tìm thấy tài khoản");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="logo"></div>

//       <div className="content">
//         <div className="image-side">
//           <img
//             src="https://bizweb.dktcdn.net/thumb/grande/100/315/454/products/limousine-9-cho-sapa-ha-noi.jpg?v=1726158480747"
//             alt="Group 4"
//             className="image-group"
//           />
//         </div>

//         <div className="form-side">
//           <div className="form-container">
//             <div className="form-header">
//               <h1>Đăng nhập</h1>
//               <p>Đăng nhập để truy cập tài khoản UETicket</p>
//             </div>

//             <div className="form-body">
//               <form onSubmit={handleLogin}>
//                 <input
//                   type="text"
//                   placeholder="Tên đăng nhập"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Mật khẩu"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <button type="submit" className="login-button">
//                   Đăng nhập
//                 </button>
//                 {error && <div className="error-message">{error}</div>}{" "}
//                 {/* Hiển thị thông báo lỗi */}
//                 <div className="save-password">
//                   <div className="checkbox-container">
//                     <input
//                       type="checkbox"
//                       id="rememberMe"
//                       checked={rememberMe}
//                       onChange={() => setRememberMe(!rememberMe)}
//                     />
//                     <label htmlFor="rememberMe">Lưu đăng nhập</label>
//                   </div>

//                   <a href="/forgot-password" className="forgot-password-link">
//                     Quên mật khẩu?
//                   </a>
//                 </div>
//                 <div className="register-link">
//                   <span>Chưa có tài khoản?</span>{" "}
//                   <a href="/register">Đăng ký</a>
//                 </div>
//                 <div className="separator">
//                   <span>Hoặc đăng nhập với</span>
//                 </div>
//                 <div className="social-login">
//                   <button className="facebook-button">Facebook</button>
//                   <button className="google-button">Google</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
