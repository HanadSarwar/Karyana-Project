import React from 'react';
import DashboardLayout from '../components/Dashboard/dashboard';
import { Outlet } from 'react-router-dom';
import { FaUsers, FaUserTie, FaWarehouse, FaBoxes, FaTag, FaBox, FaCheckCircle, FaRupeeSign } from 'react-icons/fa';
import './Dashboard.css';

const DashboardStats = () => {
  const stats = [
    { title: 'Total Retailers', value: '204', icon: <FaUsers className="stat-icon" />, color: '#4e73df' },
    { title: 'Total Salesperson', value: '56', icon: <FaUserTie className="stat-icon" />, color: '#1cc88a' },
    { title: 'Total Warehouse Managers', value: '99', icon: <FaWarehouse className="stat-icon" />, color: '#36b9cc' },
    { title: 'Total Categories', value: '123', icon: <FaBoxes className="stat-icon" />, color: '#f6c23e' },
    { title: 'Total Brands', value: '835', icon: <FaTag className="stat-icon" />, color: '#e74a3b' },
    { title: 'Total Products', value: '908', icon: <FaBox className="stat-icon" />, color: '#6f42c1' },
    { title: 'Total Orders Completed', value: '835', icon: <FaCheckCircle className="stat-icon" />, color: '#20c9a6' },
    { title: 'Total Revenue', value: '835K Rs', icon: <FaRupeeSign className="stat-icon" />, color: '#fd7e14' },
  ];
  return (
    <div className="dashboard-content">
      <h1 className="page-title">Dashboard</h1>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <div className="stat-title">{stat.title}</div>
                <div className="stat-value">{stat.value}</div>
              </div>
              <div className="stat-icon-container" style={{ backgroundColor: `${stat.color}15` }}>
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export { DashboardStats };
export default Dashboard;
