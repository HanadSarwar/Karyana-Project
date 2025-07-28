import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaSearch } from 'react-icons/fa';
import '../Shared/Dropdown.css';
import './city.css';
import { FiMoreVertical } from 'react-icons/fi';

const initialCityData = [
  { id: '#C26000', name: 'Kohat', date: '24/10/2022', time: '12:35 Pm', active: true, verified: true },
  { id: '#C27000', name: 'Islamabad', date: '24/10/2022', time: '12:35 Pm', active: true, verified: true },
  { id: '#C28000', name: 'Lahore', date: '24/10/2022', time: '12:35 Pm', active: true, verified: true },
  { id: '#C29000', name: 'Gujranwala', date: '24/10/2022', time: '12:35 Pm', active: true, verified: true },
];

const City = () => {
  const [cityData, setCityData] = useState(initialCityData);
  const [showAddCity, setShowAddCity] = useState(false);
  const [newCity, setNewCity] = useState('');

  const handleToggle = (idx, field) => {
    setCityData(prev =>
      prev.map((row, i) =>
        i === idx ? { ...row, [field]: !row[field] } : row
      )
    );
  };

  const handleAddCity = () => {
    if (newCity.trim() === '') return;
    setCityData(prev => [
      { id: `#C${Math.floor(Math.random()*100000)}`, name: newCity, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), active: true, verified: false },
      ...prev
    ]);
    setNewCity('');
    setShowAddCity(false);
  };

  return (
    <div>
      <div className="ct-hd">
        <h2 className="ct-title">Cities</h2>
        <div className="ct-controls">
          <div className="ct-search">
            <FaSearch className="ct-search-icon" />
            <input
              type="text"
              className="ct-search-input"
              placeholder="Search by order id, price..."
            />
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select">
              <option>Status</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <button className="ct-add-btn" onClick={() => setShowAddCity(true)}>+ Add City</button>
        </div>
      </div>
      <div className="ct-tbl-wrap">
        <table className="ct-tbl">
          <thead className="ct-thead">
            <tr>
              <th className="ct-th">ID</th>
              <th className="ct-th">Name</th>
              <th className="ct-th">Created Date</th>
              <th className="ct-th">Active</th>
              <th className="ct-th">Admin Verified</th>
              <th className="ct-th"></th>
            </tr>
          </thead>
          <tbody className="ct-tbody">
            {cityData.map((row, idx) => (
              <tr className="ct-row" key={idx}>
                <td className="ct-cell">{row.id}</td>
                <td className="ct-cell">{row.name}</td>
                <td className="ct-cell">{row.date} | {row.time}</td>
                <td className="ct-cell">
                  <label className="ct-switch">
                    <input type="checkbox" checked={row.active} onChange={() => handleToggle(idx, 'active')} />
                    <span className="ct-slider"></span>
                  </label>
                </td>
                <td className="ct-cell">
                  <label className="ct-switch">
                    <input type="checkbox" checked={row.verified} onChange={() => handleToggle(idx, 'verified')} />
                    <span className="ct-slider"></span>
                  </label>
                </td>
                <td className="ct-cell"><FiMoreVertical /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAddCity && ReactDOM.createPortal(
        <div className="ac-overlay">
          <div className="ac-modal">
            <div className="ac-title">Add City</div>
            <div className="ac-divider" />
            <input
              className="ac-input"
              type="text"
              placeholder="City Name"
              value={newCity}
              onChange={e => setNewCity(e.target.value)}
            />
            <div className="ac-btn-row">
              <button className="ac-btn ac-cancel" onClick={() => { setShowAddCity(false); setNewCity(''); }}>Cancel</button>
              <button className="ac-btn ac-save" onClick={handleAddCity}>Save</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default City;
