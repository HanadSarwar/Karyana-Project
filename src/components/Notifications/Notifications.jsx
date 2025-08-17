import React, { useState } from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import './Notifications.css';

const Notifications = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const notifications = [
    {
      id: 1,
      title: "Notification Title",
      message: "Egestas libero ac ut lectus cursus. Urna integer nisl imperdiet et turpis.",
      time: "2 min ago",
      icon: <FaBell />
    },
    {
      id: 2,
      title: "Notification Title",
      message: "Egestas libero ac ut lectus cursus. Urna integer nisl imperdiet et turpis.",
      time: "5 min ago",
      icon: <FaBell />
    },
    {
      id: 3,
      title: "Notification Title",
      message: "Egestas libero ac ut lectus cursus. Urna integer nisl imperdiet et turpis.",
      time: "10 min ago",
      icon: <FaBell />
    },
    {
      id: 4,
      title: "Notification Title",
      message: "Egestas libero ac ut lectus cursus. Urna integer nisl imperdiet et turpis.",
      time: "15 min ago",
      icon: <FaBell />
    },
    {
      id: 5,
      title: "Notification Title",
      message: "Egestas libero ac ut lectus cursus. Urna integer nisl imperdiet et turpis.",
      time: "20 min ago",
      icon: <FaBell />
    }
  ];

  const filteredNotifications = notifications.filter(notification =>
    notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notification.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <>
      <div className="notification-overlay" onClick={onClose}></div>
      <div className="notification-popup">
        <div className="notification-header">
          <h3 className="notification-title">Notifications</h3>
          <div className="notification-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        
        <div className="notification-list">
          {filteredNotifications.map((notification, index) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-icon-container">
                {notification.icon}
              </div>
              <div className="notification-content">
                <h4 className="notification-item-title">{notification.title}</h4>
                <p className="notification-message">{notification.message}</p>
              </div>
              <span className="notification-time">{notification.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
