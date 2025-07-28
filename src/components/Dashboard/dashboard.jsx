import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './dashboard.css';
import { FaBell, FaChartBar, FaBox, FaTags, FaUsers, FaShoppingCart, FaMapMarkerAlt, FaImage, FaHistory, FaShieldAlt, FaFileAlt, FaSignOutAlt, FaGem, FaClipboardList, FaBuilding, FaListAlt } from 'react-icons/fa';

const Dashboard = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    navigate('/login', { replace: true });
  };

  const menuItems = [
    { icon: <FaChartBar />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaUsers />, label: 'Users', path: '/dashboard/users' },
    { icon: <FaBox />, label: 'Products', path: '/dashboard/products' },
    { icon: <FaTags />, label: 'Categories', path: '/dashboard/categories' },
    { icon: <FaGem />, label: 'Brands', path: '/dashboard/brands' },
    { icon: <FaShoppingCart />, label: 'Orders', path: '/dashboard/orders' },
    { icon: <FaMapMarkerAlt />, label: 'Cities', path: '/dashboard/cities' },
    { icon: <FaImage />, label: 'Banner', path: '/dashboard/banner' },
    { icon: <FaHistory />, label: 'Logs', path: '/dashboard/log' },
    { icon: <FaShieldAlt />, label: 'Privacy Policy', path: '/dashboard/privacypolicy' },
    { icon: <FaFileAlt />, label: 'Terms & Conditions', path: '/dashboard/terms' },
    { icon: <FaSignOutAlt />, label: 'Logout', action: handleLogout },
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Welcome Admin!</h1>
          <p className="current-date">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
        <div className="header-right">
          <div className="notification-icon">
            <FaBell />
            <span className="notification-badge">3</span>
          </div>
          <div className="profile-info">
            <div className="profile-pic">
              <div className="profile-initials">W</div>
              <span className="online-status"></span>
            </div>
            <div className="profile-details">
              <span className="profile-name">Wajahat</span>
              <span className="profile-role">Admin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>Karyana</h2>
        </div>
        <div className="sidebar-menu">
          {menuItems.map((item, index) => {
            if (item.action) {
              return (
                <div
                  key={index}
                  onClick={item.action}
                  className="menu-item"
                  style={{ cursor: 'pointer' }}
                >
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.label}</span>
                </div>
              );
            }
            return (
            <Link
              key={index}
              to={item.path}
              className={`menu-item ${
                (item.path === '/dashboard' && location.pathname === '/dashboard') ||
                (item.path !== '/dashboard' && location.pathname.startsWith(item.path))
                  ? 'active'
                  : ''
              }`}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Dashboard;