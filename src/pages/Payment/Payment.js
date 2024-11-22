import React, { useState, useEffect } from "react";
import "./Payment.css";
import qrCode from "../../assets/qr-code-placeholder.png";
import vietQRLogo from "../../assets/vietqr_napas.png";
import momoLogo from "../../assets/momo.png";
import vietcombankLogo from "../../assets/vietcombank.png";
import acbLogo from "../../assets/acb.png";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [showModal, setShowModal] = useState(false); // Track if modal should be shown
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("qr"); // Default to 'QR chuyển khoản/Ví điện tử'

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setShowModal(true); // Show modal when time reaches zero
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/"); // Redirect to the homepage
  };

  // import React, { useState, useEffect } from "react";
  // import "./Payment.css";
  // import qrCode from "../../assets/qr-code-placeholder.png"; // Replace with actual QR code path
  // import vietQRLogo from "../../assets/vietqr_napas.png";
  // import momoLogo from "../../assets/momo.png";
  // import vietcombankLogo from "../../assets/vietcombank.png";
  // import acbLogo from "../../assets/acb.png";

  // function Payment() {
  //   const [timeLeft, setTimeLeft] = useState(6); // Set to 600 seconds for 10 minutes
  //   const [selectedMethod, setSelectedMethod] = useState("qr"); // Default to 'QR chuyển khoản/Ví điện tử'

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   }, []);

  //   const formatTime = (seconds) => {
  //     const minutes = Math.floor(seconds / 60);
  //     const remainingSeconds = seconds % 60;
  //     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  //   };

  const tripInfo = {
    date: "T3, 15/10/2024",
    passengers: 1,
    busCompany: "Hải Phòng Travel (Đất Cảng)",
    busType: "Limousine 11 chỗ",
    departureTime: "19:00",
    arrivalTime: "20:30",
    departureLocation: "Hà Nội - Số 79 đường Cổ Linh",
    arrivalLocation: "Hải Phòng - 61 Phạm Văn Đồng",
  };

  const contactInfo = {
    name: "Hoàng",
    phone: "0971530310",
    email: "hoangvu031003@gmail.com",
  };

  const handleEditContact = () => {
    alert("Chức năng chỉnh sửa thông tin liên hệ đang được phát triển");
  };

  return (
    <div className="payment-container">
      <header className="payment-header">
        <span>Thời gian thanh toán còn lại</span>
        <span className="timer">{formatTime(timeLeft)}</span>
      </header>

      <div className="content">
        {/* Left Section */}
        <div className="payment-method">
          <h2>Phương thức thanh toán</h2>
          <div className="method-option">
            <input
              type="radio"
              id="qr-payment"
              name="payment-method"
              checked={selectedMethod === "qr"}
              onChange={() => setSelectedMethod("qr")}
            />
            <label htmlFor="qr-payment">QR chuyển khoản/ Ví điện tử</label>
            {selectedMethod === "qr" && (
              <div className="method-details">
                <p>An toàn & tiện lợi - Không cần nhập thông tin</p>
                <div className="qr-box">
                  <div className="qr-instructions">
                    <p>Mở ứng dụng ngân hàng hoặc Ví điện tử</p>
                    <p>Quét mã bên dưới</p>
                  </div>
                  <img src={qrCode} alt="QR Code" className="qr-code" />
                  <img
                    src={vietQRLogo}
                    alt="VietQR Napas"
                    className="vietqr-logo"
                  />
                </div>
                {/* <p className="extra-info">
                  Không thể thanh toán bằng mã QR?{" "}
                  <button className="link-button">Tự nhập thông tin</button>
                </p> */}
                <div className="wallet-icons">
                  <img src={momoLogo} alt="MoMo" />
                  <img src={vietcombankLogo} alt="Vietcombank" />
                  <img src={acbLogo} alt="ACB" />
                  {/* Add more wallet icons as needed */}
                </div>
              </div>
            )}
          </div>

          <div className="method-option">
            <input
              type="radio"
              id="on-bus"
              name="payment-method"
              checked={selectedMethod === "on-bus"}
              onChange={() => setSelectedMethod("on-bus")}
            />
            <label htmlFor="on-bus">Thanh toán khi lên xe</label>
          </div>

          <div className="method-option">
            <input
              type="radio"
              id="vnpay"
              name="payment-method"
              checked={selectedMethod === "vnpay"}
              onChange={() => setSelectedMethod("vnpay")}
            />
            <label htmlFor="vnpay">Thanh toán qua VNPAY - QR</label>
          </div>
        </div>

        {/* Right Section */}
        <aside className="summary">
          <div className="total">
            <h3>Tổng tiền</h3>
            <p>240.000đ</p>
          </div>

          <div className="trip-info">
            <h3>Thông tin chuyến đi</h3>
            <div className="trip-details">
              <p>
                <strong>{tripInfo.date}</strong> | {tripInfo.passengers} hành
                khách
              </p>
              <p>{tripInfo.busCompany}</p>
              <p>{tripInfo.busType}</p>
              <div className="trip-timing">
                <div>
                  <strong>{tripInfo.departureTime}</strong>
                  <p>{tripInfo.departureLocation}</p>
                </div>
                <div>
                  <strong>{tripInfo.arrivalTime}</strong>
                  <p>{tripInfo.arrivalLocation}</p>
                </div>
              </div>
            </div>
            <a href="/cart" className="details-link">
              Chi tiết
            </a>
          </div>

          <div className="contact-info">
            <h3>
              Thông tin liên hệ{" "}
              <button onClick={handleEditContact} className="edit-link">
                Chỉnh sửa
              </button>
            </h3>
            <p>Hành khách: {contactInfo.name}</p>
            <p>Số điện thoại: {contactInfo.phone}</p>
            <p>Email: {contactInfo.email}</p>
          </div>
        </aside>
      </div>
      {/* Modal to show when time is up */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Thời gian thanh toán kết thúc</p>
            <button onClick={handleCloseModal}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
