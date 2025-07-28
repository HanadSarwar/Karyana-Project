import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaSearch } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import bannerImg from '../../assets/BannerImage.png';
import './banner.css';
import '../Shared/Dropdown.css';

const initialBannerData = [
  {
    img: bannerImg,
    alt: 'Ac dictum sit aliquam diam mauris nullam.',
    date: '24/10/2022',
    time: '12:35 Pm',
    status: true,
    verified: true,
  },
];

const Banner = () => {
  const [bannerData, setBannerData] = useState(initialBannerData);
  const [modalImg, setModalImg] = useState(null);
  const [showAddBanner, setShowAddBanner] = useState(false);
  const [bannerFile, setBannerFile] = useState(null);
  const [altText, setAltText] = useState('');
  const [city, setCity] = useState('');

  const handleToggle = (field) => {
    setBannerData(prev =>
      prev.map((row, i) =>
        i === 0 ? { ...row, [field]: !row[field] } : row
      )
    );
  };

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setBannerFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setBannerFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleAddBanner = () => {
    // Add logic to save banner
    setShowAddBanner(false);
    setBannerFile(null);
    setAltText('');
    setCity('');
  };

  return (
    <div>
      <div className="bn-hd">
        <h2 className="bn-title">Banner</h2>
        <div className="bn-controls">
          <div className="bn-search">
            <FaSearch className="bn-search-icon" />
            <input
              type="text"
              className="bn-search-input"
              placeholder="Search by Alternate Text"
            />
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select">
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
          <button className="bn-add-btn" onClick={() => setShowAddBanner(true)}>+ Add New</button>
        </div>
      </div>
      <div className="bn-tbl-wrap">
        <table className="bn-tbl">
          <thead className="bn-thead">
            <tr>
              <th className="bn-th">Banner</th>
              <th className="bn-th">Alternate Text</th>
              <th className="bn-th">Created Date</th>
              <th className="bn-th">Status</th>
              <th className="bn-th">Admin Verified</th>
              <th className="bn-th"></th>
            </tr>
          </thead>
          <tbody className="bn-tbody">
            {bannerData.map((row, idx) => (
              <tr className="bn-row" key={idx}>
                <td className="bn-cell">
                  <img
                    src={row.img}
                    alt="Banner"
                    className="bn-img"
                    style={{ cursor: 'pointer' }}
                    onClick={() => openModal(row.img)}
                  />
                </td>
                <td className="bn-cell">{row.alt}</td>
                <td className="bn-cell">{row.date} | {row.time}</td>
                <td className="bn-cell">
                  <label className="bn-switch">
                    <input type="checkbox" checked={row.status} onChange={() => handleToggle('status')} />
                    <span className="bn-slider"></span>
                  </label>
                </td>
                <td className="bn-cell">
                  <label className="bn-switch">
                    <input type="checkbox" checked={row.verified} onChange={() => handleToggle('verified')} />
                    <span className="bn-slider"></span>
                  </label>
                </td>
                <td className="bn-cell"><FiMoreVertical /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalImg && ReactDOM.createPortal(
        <div className="bn-modal-backdrop" onClick={closeModal}>
          <div className="bn-modal" onClick={e => e.stopPropagation()}>
            <button className="bn-modal-close" onClick={closeModal}>&times;</button>
            <img src={modalImg} alt="Banner Full" className="bn-modal-img" />
          </div>
        </div>,
        document.body
      )}
      {showAddBanner && ReactDOM.createPortal(
        <div className="ab-overlay">
          <div className="ab-modal">
            <div className="ab-title">Add Banner</div>
            <div className="ab-divider" />
            <div className="ab-label">Upload Banner Image</div>
            <div
              className="ab-upload"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className="ab-upload-icon">{/* icon placeholder */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#FFE5DE"/>
                  <path d="M18 11V25" stroke="#F2573C" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M12 17L18 11L24 17" stroke="#F2573C" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <label htmlFor="ab-file-upload" className="ab-upload-label">
                <span className="ab-upload-link">Click to upload</span> or drag and drop
                <input
                  id="ab-file-upload"
                  type="file"
                  accept="image/jpeg,image/png,application/pdf"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </label>
              <div className="ab-upload-note">JPG, PNG or PDF (max. 10MB)</div>
              {bannerFile && <div className="ab-upload-filename">{bannerFile.name}</div>}
            </div>
            <input
              className="ab-input"
              type="text"
              placeholder="Enter Alternate Text"
              value={altText}
              onChange={e => setAltText(e.target.value)}
            />
            <select
              className="ab-input ab-select"
              value={city}
              onChange={e => setCity(e.target.value)}
            >
              <option value="">Choose City</option>
              <option value="Kohat">Kohat</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Lahore">Lahore</option>
              <option value="Gujranwala">Gujranwala</option>
            </select>
            <div className="ab-btn-row">
              <button className="ab-btn ab-cancel" onClick={() => setShowAddBanner(false)}>Cancel</button>
              <button className="ab-btn ab-save" onClick={handleAddBanner}>Save</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default Banner;
