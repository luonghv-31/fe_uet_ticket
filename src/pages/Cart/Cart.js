import React from "react";
import './Cart.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import Logo from './images/Logo.png';
import Car from './images/Car.jpg';



const Cart = () => {
    return (
        <div className='wrapper'>
            {/* Phần logo */}
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span className="logo-text">Giỏ hàng</span>
            </div>

            {/* Số lượng vé */}
            <div className="number-ticket">
                <p>Số lượng vé: 3</p>
            </div>

            {/* Phần thông tin giỏ hàng */}
            <div className="cart-info">
                <p>Thông tin giỏ hàng</p>
            </div>

            <div className="route-info">
                <div className="left-info">
                    {/* Cấu trúc cho ảnh và thông tin */}
                    <div className="route-header">
                        <div className="route-image">
                        <img src={Car} alt="Car" />{/* Ảnh Car */}
                        </div>
                        <div className="route-details">
                            <p className="route-destination">Hà Nội - SaPa</p>
                            <p className="route-vehicle">Xe giường nằm Quang Minh</p>
                        </div>
                    </div>

                    {/* Container chứa thông tin và đường line dọc */}
                    <div className="route-time-vertical">
                        <div className="route-time">
                            <span className="departure-time">14:00</span>
                            <FaMapMarkerAlt className="icon" style={{ color: "#8DD3BB" }} /> {/* Icon màu #8DD3BB */}
                            <div className="location-details">
                                <span>Công viên Cầu Giấy</span>
                                <span>Phố Duy Tân, Dịch Vọng, Cầu Giấy, Hà Nội</span>
                            </div>
                        </div>

                        {/* Đường line dọc */}
                        <div className="vertical-line"></div>

                        <div className="route-time">
                            <span className="departure-time">15:00</span>
                            <FaMapMarkerAlt className="icon" style={{ color: "#FB1111" }} /> {/* Icon màu #FB1111 */}
                            <div className="location-details">
                                <span>Thung lũng Mường Hoa</span>
                                <span>Xã Hầu Thào</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-info">
                    <p><strong>Trạng thái:</strong><span className="payment-status"> Chưa thanh toán</span></p>
                    <p><strong>Phương thức thanh toán:</strong> Tiền mặt</p>
                    <p><strong>Tổng tiền:</strong> 600.000đ</p>
                    <p><strong>Giá vé:</strong> 200.000đ</p>
                </div>

                {/* Nút Đặt vé */}
                <div className="booking-button-container">
                    <button className="booking-button">Đặt vé</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
