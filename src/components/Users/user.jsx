import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';
import './user.css';
import { createPortal } from 'react-dom';

const tabs = [
  'Sales Person',
  'Warehouse Managers',
  'Retailers',
  'Coordinators',
];

const salesPersons = [
  {
    id: 1,
    name: 'Lincoln Bergson',
    email: 'alinizami@gmail.com',
    password: 'abs1121',
    phone: '0332 22525151',
    cnic: '36202-2925920-2',
    earnings: '14K',
    avatar: 'https://i.pravatar.cc/40?img=1',
    active: true,
    verified: true,
    dateOfBirth: '16 May, 1998',
    address: 'College Town Rawalpindi Road Jand',
    role: 'Sales Person',
  },
  {
    id: 2,
    name: 'Cristofer Lipshutz',
    email: 'alinizami@gmail.com',
    password: 'abs1121',
    phone: '0332 22525151',
    cnic: '36202-2925920-2',
    earnings: '14K',
    avatar: 'https://i.pravatar.cc/40?img=2',
    active: true,
    verified: true,
    dateOfBirth: '12 March, 1995',
    address: 'Gulberg III Lahore',
    role: 'Sales Person',
  },
  {
    id: 3,
    name: 'Zain Stanton',
    email: 'alinizami@gmail.com',
    password: 'abs1121',
    phone: '0332 22525151',
    cnic: '36202-2925920-2',
    earnings: '14K',
    avatar: 'https://i.pravatar.cc/40?img=3',
    active: true,
    verified: true,
    dateOfBirth: '8 July, 1990',
    address: 'Defence Phase 5 Karachi',
    role: 'Sales Person',
  },
];

const warehouseManagers = [
  {
    id: 1,
    name: 'Muhammad Ali',
    email: 'alinizami@gmail.com',
    password: 'wm1234',
    phone: '0332 22525151',
    cnic: '36202-2925920-2',
    earnings: '20K',
    avatar: 'https://i.pravatar.cc/40?img=4',
    active: true,
    verified: false,
    dateOfBirth: '16 May, 1998',
    address: 'College Town Rawalpindi Road Jand',
    role: 'Warehouse Manager',
  },
  {
    id: 2,
    name: 'Noah Smith',
    email: 'noah.smith@gmail.com',
    password: 'wm5678',
    phone: '0311 7654321',
    cnic: '35202-7654321-9',
    earnings: '18K',
    avatar: 'https://i.pravatar.cc/40?img=5',
    active: false,
    verified: true,
    dateOfBirth: '22 October, 1992',
    address: 'Model Town Lahore',
    role: 'Warehouse Manager',
  },
];

const retailers = [
  {
    id: 1,
    name: 'Olivia Brown',
    email: 'olivia.brown@gmail.com',
    password: 'retail1',
    phone: '0322 9876543',
    cnic: '35202-9876543-0',
    earnings: '10K',
    avatar: 'https://i.pravatar.cc/40?img=6',
    active: true,
    verified: true,
    dateOfBirth: '15 January, 1988',
    address: 'Garden Town Lahore',
    role: 'Retailer',
  },
  {
    id: 2,
    name: 'Liam Johnson',
    email: 'liam.johnson@gmail.com',
    password: 'retail2',
    phone: '0333 1239874',
    cnic: '35202-1239874-1',
    earnings: '12K',
    avatar: 'https://i.pravatar.cc/40?img=7',
    active: false,
    verified: false,
    dateOfBirth: '3 December, 1993',
    address: 'Johar Town Lahore',
    role: 'Retailer',
  },
];

const coordinators = [
  {
    id: 1,
    name: 'Emma Wilson',
    email: 'emma.wilson@gmail.com',
    password: 'coord1',
    phone: '0344 5678910',
    cnic: '35202-5678910-2',
    earnings: '15K',
    avatar: 'https://i.pravatar.cc/40?img=8',
    active: true,
    verified: true,
    dateOfBirth: '7 April, 1991',
    address: 'Cantt Area Lahore',
    role: 'Coordinator',
  },
  {
    id: 2,
    name: 'Mason Lee',
    email: 'mason.lee@gmail.com',
    password: 'coord2',
    phone: '0355 1098765',
    cnic: '35202-1098765-3',
    earnings: '16K',
    avatar: 'https://i.pravatar.cc/40?img=9',
    active: true,
    verified: false,
    dateOfBirth: '19 June, 1989',
    address: 'DHA Phase 6 Lahore',
    role: 'Coordinator',
  },
];

const User = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);
  
  // State for managing user data
  const [salesPersonsData, setSalesPersonsData] = useState(salesPersons);
  const [warehouseManagersData, setWarehouseManagersData] = useState(warehouseManagers);
  const [retailersData, setRetailersData] = useState(retailers);
  const [coordinatorsData, setCoordinatorsData] = useState(coordinators);

  const buttonTextMap = {
    0: '+ Add Sales Person',
    1: '+ Add Manager',
    2: '+ Add Retailer',
    3: '+ Add Coordinator',
  };

  const modalTitleMap = {
    0: 'Add Sales Person',
    1: 'Add Warehouse Manager',
    2: 'Add Retailer',
    3: 'Add Coordinator',
  };

  // Function to handle user details popup
  const handleUserDetails = (user) => {
    setSelectedUser(user);
    setShowUserDetails(true);
  };

  // Function to close user details popup
  const closeUserDetails = () => {
    setShowUserDetails(false);
    setSelectedUser(null);
  };

  // Function to handle active status toggle
  const handleActiveToggle = (userId, userType) => {
    const updateUserData = (data, setData) => {
      setData(prevData => 
        prevData.map(user => 
          user.id === userId 
            ? { ...user, active: !user.active }
            : user
        )
      );
    };

    switch(userType) {
      case 0:
        updateUserData(salesPersonsData, setSalesPersonsData);
        break;
      case 1:
        updateUserData(warehouseManagersData, setWarehouseManagersData);
        break;
      case 2:
        updateUserData(retailersData, setRetailersData);
        break;
      case 3:
        updateUserData(coordinatorsData, setCoordinatorsData);
        break;
      default:
        break;
    }
  };

  // Function to handle verified status toggle
  const handleVerifiedToggle = (userId, userType) => {
    const updateUserData = (data, setData) => {
      setData(prevData => 
        prevData.map(user => 
          user.id === userId 
            ? { ...user, verified: !user.verified }
            : user
        )
      );
    };

    switch(userType) {
      case 0:
        updateUserData(salesPersonsData, setSalesPersonsData);
        break;
      case 1:
        updateUserData(warehouseManagersData, setWarehouseManagersData);
        break;
      case 2:
        updateUserData(retailersData, setRetailersData);
        break;
      case 3:
        updateUserData(coordinatorsData, setCoordinatorsData);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="users-container">
        <div className="users-header">
          <div className="users-tabs">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                className={`users-tab${activeTab === idx ? ' active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="users-content">
          <h2 className="users-title">{tabs[activeTab]}</h2>
          <div className="users-filters">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by name, role.."
                className="search-input"
              />
            </div>
            <select className="users-city-dropdown" value={city} onChange={e => setCity(e.target.value)}>
              <option value="">City</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
            </select>
            <select className="users-status-dropdown" value={status} onChange={e => setStatus(e.target.value)}>
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button className="add-user-btn" onClick={() => setShowModal(true)}>{buttonTextMap[activeTab]}</button>
          </div>
        </div>
        {/* User Table below users-content, no checkbox */}
        <div className="user-table">
          <div className="table-header">
            <span>Name</span>
            <span>Password</span>
            <span>Phone No</span>
            <span>CNIC</span>
            <span>Earnings</span>
            <span>Active</span>
            <span>Admin Verified</span>
            <span></span>
          </div>
          {(activeTab === 0 ? salesPersonsData : activeTab === 1 ? warehouseManagersData : activeTab === 2 ? retailersData : coordinatorsData).map(user => (
            <div className="table-row" key={user.id}>
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <div className="user-text">
                  <div className="user-name">{user.name}</div>
                  <div className="user-email">{user.email}</div>
                </div>
              </div>
              <span>{user.password}</span>
              <span>{user.phone}</span>
              <span>{user.cnic}</span>
              <span>{user.earnings}</span>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={user.active} 
                  onChange={() => handleActiveToggle(user.id, activeTab)}
                />
                <span className="slider round"></span>
              </label>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={user.verified} 
                  onChange={() => handleVerifiedToggle(user.id, activeTab)}
                />
                <span className="slider round"></span>
              </label>
              <span className="more-icon" onClick={() => handleUserDetails(user)}>&#8942;</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Details Right Side Popup - rendered via Portal */}
      {showUserDetails && selectedUser && createPortal(
        <div className="user-details-popup">
          <div className="user-details-header">
            <button className="back-button" onClick={closeUserDetails}>
              <FaArrowLeft />
            </button>
          </div>
          
          <div className="user-details-banner">
            <div className="user-profile-image">
              <img src={selectedUser.avatar} alt={selectedUser.name} />
            </div>
          </div>
          
          <div className="user-details-info">
            <div className="user-name-section">
              <div className="user-name-role">
                <h2 className="user-full-name">{selectedUser.name}</h2>
                <p className="user-role">{selectedUser.role}</p>
                <p className="user-email-detail">{selectedUser.email}</p>
              </div>
              <button className="edit-button">
                <FaEdit />
              </button>
            </div>
            
            <div className="user-details-fields">
              <div className="detail-field">
                <label>Phone No</label>
                <span>{selectedUser.phone}</span>
              </div>
              
              <div className="detail-field">
                <label>Date of Birth</label>
                <span>{selectedUser.dateOfBirth}</span>
              </div>
              
              <div className="detail-field">
                <label>CNIC</label>
                <span>{selectedUser.cnic}</span>
              </div>
              
              <div className="detail-field">
                <label>Address</label>
                <span>{selectedUser.address}</span>
              </div>
            </div>
            
            <button className="disable-user-btn">
              <FaTrash />
              Disable User
            </button>
          </div>
        </div>,
        document.body
      )}

      {/* Add Sales Person Modal - now rendered via Portal */}
      {showModal && createPortal(
        <div className="usm-modal-bg">
          <div className="usm-modal">
            <div className="usm-title">{modalTitleMap[activeTab]}</div>
            <div className="usm-label">Profile Image</div>
            <div className="usm-upload">
              <label htmlFor="usm-file" className="usm-upload-box">
                <div className="usm-upload-icon">📁</div>
                <div className="usm-upload-text"><span className="usm-upload-link">Click to upload</span> or drag and drop</div>
                <div className="usm-upload-sub">JPG, PNG (max. 10MB)</div>
                <input id="usm-file" type="file" accept="image/*" style={{ display: 'none' }} />
              </label>
            </div>
            <input className="usm-inp" type="text" placeholder="Name" />
            <input className="usm-inp" type="email" placeholder="Email" />
            <input className="usm-inp" type="password" placeholder="Password" />
            <input className="usm-inp" type="text" placeholder="Phone No." />
            <input className="usm-inp" type="text" placeholder="CNIC" />
            <select className="usm-inp">
              <option value="">Choose City</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
            </select>
            <textarea className="usm-inp" placeholder="Address" rows={2} />
            <div className="usm-actions">
              <button className="usm-btn usm-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="usm-btn usm-save">Save</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default User;
