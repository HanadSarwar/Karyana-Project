import React, { useState } from 'react';
import './categories.css';
import '../Shared/Dropdown.css';
import WheatImg from '../../assets/WheatImg.png';
import { FaEllipsisV, FaSearch } from 'react-icons/fa';

const initialRows = [
  { name: 'Wheat', urdu: 'گندم', id: '#P321', date: '24/10/2022', active: true, verified: true },
  { name: 'Wheat', urdu: 'گندم', id: '#P321', date: '24/10/2022', active: true, verified: true },
  { name: 'Wheat', urdu: 'گندم', id: '#P321', date: '24/10/2022', active: true, verified: true }
];

const Categories = () => {
  const [rows, setRows] = useState(initialRows);
  const [showModal, setShowModal] = useState(false); // For popup form visibility

  const handleToggle = (index, field) => {
    setRows(rows =>
      rows.map((row, i) =>
        i === index ? { ...row, [field]: !row[field] } : row
      )
    );
  };

  return (
    <div>
      <div className="categories-header-container">
        <h2 className="categories-title">Categories</h2>
        <div className="categories-controls">
          <div className="categories-search">
            <FaSearch className="categories-search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, id..."
            />
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select-city">
              <option>City</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select">
              <option>Status</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <button className="create-category-btn" onClick={() => setShowModal(true)}>
            + Create Category
          </button>
        </div>
      </div>

      <div className="product-urdu-table">
        <div className="product-urdu-header">
          <span>Name</span>
          <span>Urdu Name</span>
          <span>ID</span>
          <span>Created on</span>
          <span>Active</span>
          <span>Admin Verified</span>
          <span></span>
        </div>

        {rows.map((row, i) => (
          <div key={i} className="product-urdu-row">
            <div className="product-urdu-name-cell">
              <img src={WheatImg} alt="Wheat" />
              <span className="name-text">{row.name}</span>
            </div>
            <span className="urdu-text">{row.urdu}</span>
            <span className="id-text">{row.id}</span>
            <span>{row.date}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={row.active}
                onChange={() => handleToggle(i, 'active')}
              />
              <span className="slider round"></span>
            </label>
            <label className="switch">
              <input
                type="checkbox"
                checked={row.verified}
                onChange={() => handleToggle(i, 'verified')}
              />
              <span className="slider round"></span>
            </label>
            <FaEllipsisV className="product-ellipsis" />
          </div>
        ))}
      </div>

      {/* === Popup Modal Start === */}
      {showModal && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h3>Create Category</h3>

            <label className="popup-label">Thumbnail</label>
            <div className="upload-box">
              <div className="upload-icon">&#x1F4E4;</div>
              <p>
                <span className="highlight-text">Click to upload</span> or drag and drop
              </p>
              <small>JPG, PNG (max. 10MB)</small>
            </div>

            <input type="text" placeholder="Name in English" className="popup-input" />
            <input type="text" placeholder="Name in Urdu" className="popup-input" />
            <select className="popup-select">
              <option>Choose City</option>
            </select>

            <div className="popup-buttons">
              <button className="popup-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="popup-save">Save</button>
            </div>
          </div>
        </div>
      )}
      {/* === Popup Modal End === */}

    </div>
  );
};

export default Categories;
