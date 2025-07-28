import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './brands.css';
import NeonLogo from '../../assets/Neon.png';
import { FaSearch } from 'react-icons/fa';
import { FaEllipsisV } from 'react-icons/fa';

const initialBrands = [
  { name: 'Neon', urdu: 'نیان', id: '#P321', commission: '07%', date: '24/10/2022', status: true, verified: true },
  { name: 'Neon', urdu: 'نیان', id: '#P321', commission: '07%', date: '24/10/2022', status: true, verified: true },
  { name: 'Neon', urdu: 'نیان', id: '#P321', commission: '07%', date: '24/10/2022', status: true, verified: true },
  { name: 'Neon', urdu: 'نیان', id: '#P321', commission: '07%', date: '24/10/2022', status: true, verified: true },
];

const Brands = () => {
  const [brands, setBrands] = useState(initialBrands);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (index, field) => {
    setBrands(brands =>
      brands.map((brand, i) =>
        i === index ? { ...brand, [field]: !brand[field] } : brand
      )
    );
  };

  return (
    <>
      <div className="brands-header-unique">
        <h2 className="brands-title-unique">Brands</h2>
        <div className="brands-controls-unique">
          <div className="brands-search-unique">
            <FaSearch className="brands-search-icon-unique" />
            <input
              type="text"
              className="brands-search-input-unique"
              placeholder="Search by name, id..."
            />
          </div>
          <select className="brands-dropdown-city-unique">
            <option>City</option>
          </select>
          <select className="brands-dropdown-status-unique">
            <option>Status</option>
          </select>
          <button
            className="brands-add-btn-unique"
            onClick={() => setShowModal(true)}
          >
            + Add Brand
          </button>
        </div>
      </div>

      <div className="brands-table-unique">
        <div className="brands-table-header-unique">
          <span>Name</span>
          <span>Urdu Name</span>
          <span>ID</span>
          <span>Commission (%)</span>
          <span>Created on</span>
          <span>Status</span>
          <span>Admin Verified</span>
          <span></span>
        </div>
        {brands.map((brand, i) => (
          <div key={i} className="brands-table-row-unique">
            <div className="brands-table-name-unique">
              <img src={NeonLogo} alt="Neon" className="brands-table-logo-unique" />
              <span className="brands-table-name-text-unique">{brand.name}</span>
            </div>
            <span className="brands-table-urdu-unique">{brand.urdu}</span>
            <span className="brands-table-id-unique">{brand.id}</span>
            <span className="brands-table-commission-unique">{brand.commission}</span>
            <span className="brands-table-date-unique">{brand.date}</span>
            <label className="brands-switch-unique">
              <input
                type="checkbox"
                checked={brand.status}
                onChange={() => handleToggle(i, 'status')}
              />
              <span className="brands-slider-unique brands-slider-round-unique"></span>
            </label>
            <label className="brands-switch-unique">
              <input
                type="checkbox"
                checked={brand.verified}
                onChange={() => handleToggle(i, 'verified')}
              />
              <span className="brands-slider-unique brands-slider-round-unique"></span>
            </label>
            <FaEllipsisV className="brands-table-ellipsis-unique" />
          </div>
        ))}
      </div>

      {/* ======= Add Brand Popup Modal ======= */}
      {showModal && ReactDOM.createPortal(
        <div className="brd-modal-overlay">
          <div className="brd-modal">
            <h3 className="brd-title">Add Brand</h3>

            <label className="brd-label">Thumbnail</label>
            <div className="brd-upload">
              <div className="brd-upload-icon">📤</div>
              <p><span className="brd-upload-click">Click to upload</span> or drag and drop</p>
              <small>JPG, PNG or PDF (max. 10MB)</small>
            </div>

            <input type="text" placeholder="Name in English" className="brd-input" />
            <input type="text" placeholder="Name in Urdu" className="brd-input" />

            <select className="brd-select">
              <option>Choose Category</option>
            </select>

            <div className="brd-commission-row">
              <input type="text" placeholder="Commission" className="brd-input" />
              <span className="brd-percent">%</span>
            </div>

            <select className="brd-select">
              <option>Choose City</option>
            </select>

            <div className="brd-btn-row">
              <button className="brd-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="brd-save">Save</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Brands;
