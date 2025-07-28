import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../Shared/Dropdown.css';
import './order.css';

const OrderRow = ({ orderId, retailer, dateTime, totalAmount, status }) => (
  <tr className="order-row-custom">
    <td className="order-cell-custom px-6 py-4 whitespace-nowrap">{orderId}</td>
    <td className="order-cell-custom px-6 py-4 whitespace-nowrap">{retailer}</td>
    <td className="order-cell-custom px-6 py-4 whitespace-nowrap">{dateTime}</td>
    <td className="order-cell-custom px-6 py-4 whitespace-nowrap">{totalAmount}</td>
    <td className="order-cell-custom px-6 py-4 whitespace-nowrap">
      <span className={`order-status-custom ${status.toLowerCase().replace(' ', '-')}-status`}>
        {status}
      </span>
    </td>
  </tr>
);

const Order = () => {
  const data = [
    { orderId: "#KR21241", retailer: "Javed Sheikh", dateTime: "24/10/2022 12:35 PM", totalAmount: "1200 Rs", status: "Delivered" },
    { orderId: "#KR21241", retailer: "Javed Sheikh", dateTime: "24/10/2022 12:35 PM", totalAmount: "1200 Rs", status: "Cancelled" },
    { orderId: "#KR21241", retailer: "Javed Sheikh", dateTime: "24/10/2022 12:35 PM", totalAmount: "1200 Rs", status: "Completed" },
    { orderId: "#KR21241", retailer: "Javed Sheikh", dateTime: "24/10/2022 12:35 PM", totalAmount: "1200 Rs", status: "Completed" },
  ];

  return (
    <div>
      <div className="orders-header-unique">
        <h2 className="orders-title-unique">Orders</h2>
        <div className="orders-controls-unique">
          <div className="orders-search-bar-unique">
            <FaSearch className="orders-search-icon-unique" />
            <input
              type="text"
              className="orders-search-input-unique"
              placeholder="Search by order id, price..."
            />
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select-city custom-select">
              <option>City</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select-status custom-select">
              <option>Status</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select-date custom-select">
              <option>Date & Time</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
        </div>
      </div>
      <div className="order-container-custom mx-auto p-4">
        <table className="order-table-custom min-w-full divide-y divide-gray-200">
          <thead className="order-header-custom">
            <tr>
              <th className="order-head-cell-custom px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="order-head-cell-custom px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retailer</th>
              <th className="order-head-cell-custom px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="order-head-cell-custom px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
              <th className="order-head-cell-custom px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="order-body-custom bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <OrderRow key={index} {...row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;