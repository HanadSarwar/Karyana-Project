import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../Shared/Dropdown.css';
import './log.css';

const logData = [
  {
    id: '#L21241',
    user: 'Wajahat',
    role: 'Admin',
    details: 'Logged in using Mac OS 2017',
    date: '24/10/2022',
    time: '12:35 Pm',
  },
  {
    id: '#L21241',
    user: 'Wajahat',
    role: 'Admin',
    details: 'Logged in using Mac OS 2017',
    date: '24/10/2022',
    time: '12:35 Pm',
  },
  {
    id: '#L21241',
    user: 'Wajahat',
    role: 'Admin',
    details: 'Logged in using Mac OS 2017',
    date: '24/10/2022',
    time: '12:35 Pm',
  },
  {
    id: '#L21241',
    user: 'Wajahat',
    role: 'Admin',
    details: 'Logged in using Mac OS 2017',
    date: '24/10/2022',
    time: '12:35 Pm',
  },
];

const Log = () => {
  return (
    <div>
      <div className="lg-hd">
        <h2 className="lg-title">Logs</h2>
        <div className="lg-controls">
          <div className="lg-search">
            <FaSearch className="lg-search-icon" />
            <input
              type="text"
              className="lg-search-input"
              placeholder="Search by User, ID..."
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
              <option>Role</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select">
              <option>Date & Time</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
        </div>
      </div>
      <div className="lg-tbl-wrap">
        <table className="lg-tbl">
          <thead className="lg-thead">
            <tr>
              <th className="lg-th">ID</th>
              <th className="lg-th">User</th>
              <th className="lg-th">Role</th>
              <th className="lg-th">Details</th>
              <th className="lg-th">Date & Time</th>
            </tr>
          </thead>
          <tbody className="lg-tbody">
            {logData.map((row, idx) => (
              <tr className="lg-row" key={idx}>
                <td className="lg-cell">{row.id}</td>
                <td className="lg-cell">{row.user}</td>
                <td className="lg-cell">{row.role}</td>
                <td className="lg-cell lg-details">
                  <b>Logged in</b> using <b>Mac OS 2017</b>
                </td>
                <td className="lg-cell">{row.date} | {row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Log;
