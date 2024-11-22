import React from 'react';
import './News.css';
import { FaCar, FaHeart } from 'react-icons/fa'; // Import icon từ react-icons

const News = () => {
  return (
    <div className="news-container">
      <div className="header">
        <div className="left-section">
          <FaCar className="car-icon" />
          <span className="text">Tìm chuyến</span>
        </div>
        <div className="right-section">
          <div className="favourites">
            <FaHeart className="heart-icon" />
            <span>Favourites</span>
          </div>
          <div className="avatar">
            <img 
              src="https://via.placeholder.com/40" 
              alt="Avatar" 
              className="avatar-image" 
            />
            <span>Ly</span>
          </div>
        </div>
      </div>
      {/* Nội dung trang */}
    </div>
  );
};

export default News;
