import React, { useState } from 'react';
import { FaSearch, FaEllipsisV, FaEdit, FaTrash, FaBox, FaCheck } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import '../Shared/Dropdown.css';
import viteLogo from '/vite.svg';
import WheatImg from '../../assets/WheatImg.png';
import NeonLogo from '../../assets/Neon.png';
import './product.css';
const Product = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="product-header-bar">
        <h2 className="product-title">Products</h2>
        <div className="product-filter-bar">
          <div className="product-search-bar">
            <FaSearch className="product-search-icon" />
            <input
              type="text"
              placeholder="Search by name, id..."
              value={search}
              onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select" value={city} onChange={e => setCity(e.target.value)}>
              <option value="">City</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
              <option value="islamabad">Islamabad</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select" value={brand} onChange={e => setBrand(e.target.value)}>
              <option value="">Brand</option>
              <option value="neon">Neon</option>
              <option value="wheat">Wheat</option>
              <option value="sunrise">Sunrise</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Category</option>
              <option value="food">Food</option>
              <option value="beverage">Beverage</option>
              <option value="snacks">Snacks</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <div className="custom-select-wrapper">
            <select className="custom-select" value={status} onChange={e => setStatus(e.target.value)}>
              <option value="">Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
            <span className="custom-select-arrow"></span>
          </div>
          <button className="product-add-btn" onClick={() => setShowAddModal(true)}>
            <span className="product-plus">+</span> Add Product
          </button>
        </div>
      </div>
      <div className="product-table">
        <div className="product-table-header">
          <span>Name</span>
          <span>Brand</span>
          <span>Category</span>
          <span>Packing</span>
          <span>Price</span>
          <span>In Stock</span>
          <span>Active</span>
          <span>Admin Verified</span>
          <span></span>
        </div>
        {/* Row 1 */}
        <div className="product-table-row">
          <div className="product-name-cell">
            <img src={WheatImg} alt="Product" />
            <div className="product-name-text">
              <div>Wheat Grain Bag</div>
              <div className="product-id">#P321</div>
            </div>
          </div>
          <div className="brand-cell">
            <img src={NeonLogo} alt="Brand" />
            <span>Neon</span>
          </div>
          <span>Wheat</span>
          <span>1 Kg</span>
          <span>1200 Rs</span>
          <span>
            400<br />
            <span className="update-link">Update</span>
          </span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <label className="switch">
            <input type="checkbox" checked readOnly />
            <span className="slider round"></span>
          </label>
          <FaEllipsisV className="product-ellipsis" />
        </div>
        {/* Row 2 */}
        <div className="product-table-row">
          <div className="product-name-cell">
            <img src={WheatImg} alt="Product" />
            <div className="product-name-text">
              <div>Rice Bag</div>
              <div className="product-id">#P322</div>
            </div>
          </div>
          <div className="brand-cell">
            <img src={NeonLogo} alt="Brand" />
            <span>Neon</span>
          </div>
          <span>Rice</span>
          <span>2 Kg</span>
          <span>1500 Rs</span>
          <span>
            250<br />
            <span className="update-link">Update</span>
          </span>
          <label className="switch">
            <input type="checkbox" checked readOnly />
            <span className="slider round"></span>
          </label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <FaEllipsisV className="product-ellipsis" />
        </div>
        {/* Row 3 */}
        <div className="product-table-row">
          <div className="product-name-cell">
            <img src={WheatImg} alt="Product" />
            <div className="product-name-text">
              <div>Sugar Pack</div>
              <div className="product-id">#P323</div>
            </div>
          </div>
          <div className="brand-cell">
            <img src={NeonLogo} alt="Brand" />
            <span>Sunrise</span>
          </div>
          <span>Sugar</span>
          <span>500g</span>
          <span>800 Rs</span>
          <span>
            100<br />
            <span className="update-link">Update</span>
          </span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <FaEllipsisV className="product-ellipsis" />
        </div>
        {/* Row 4 */}
        <div className="product-table-row">
          <div className="product-name-cell">
            <img src={WheatImg} alt="Product" />
            <div className="product-name-text">
              <div>Flour Bag</div>
              <div className="product-id">#P324</div>
            </div>
          </div>
          <div className="brand-cell">
            <img src={NeonLogo} alt="Brand" />
            <span>WheatCo</span>
          </div>
          <span>Flour</span>
          <span>5 Kg</span>
          <span>2000 Rs</span>
          <span>
            50<br />
            <span className="update-link">Update</span>
          </span>
          <label className="switch">
            <input type="checkbox" checked readOnly />
            <span className="slider round"></span>
          </label>
          <label className="switch">
            <input type="checkbox" checked readOnly />
            <span className="slider round"></span>
          </label>
          <FaEllipsisV className="product-ellipsis" />
        </div>
      </div>
      {/* Add Product Modal Popup */}
      {showAddModal && createPortal(
        <div className="apm-modal-bg">
          <div className="apm-modal">
            <div className="apm-title">Add Product</div>
            <hr className="apm-divider" />
            <div className="apm-label">Thumbnail</div>
            <div className="apm-upload">
              <label htmlFor="apm-file" className="apm-upload-box">
                <div className="apm-upload-icon">📁</div>
                <div className="apm-upload-text"><span className="apm-upload-link">Click to upload</span> or drag and drop</div>
                <div className="apm-upload-sub">JPG, PNG (max. 10MB)</div>
                <input id="apm-file" type="file" accept="image/*" style={{ display: 'none' }} />
              </label>
            </div>
            <div className="apm-row">
              <input className="apm-inp" type="text" placeholder="Title English" />
              <input className="apm-inp" type="text" placeholder="اردو میں عنوان" style={{textAlign:'right'}} />
            </div>
            <select className="apm-inp">
              <option value="">Choose Category</option>
            </select>
            <select className="apm-inp">
              <option value="">Choose Brand</option>
            </select>
            <div className="apm-row">
              <input className="apm-inp" type="text" placeholder="Price" />
              <input className="apm-inp" type="text" placeholder="In Stock" />
            </div>
            <select className="apm-inp">
              <option value="">Choose City</option>
            </select>
            <div className="apm-row">
              <input className="apm-inp" type="text" placeholder="Description English" />
              <input className="apm-inp" type="text" placeholder="اردو میں تفصیل" style={{textAlign:'right'}} />
            </div>
            {/* <textarea className="apm-inp" placeholder="" rows={2} /> */}
            {/* Packing Section */}
            <div className="apm-section">
              <label className="apm-switch-label">
                <input type="checkbox" className="apm-switch" />
                <span className="apm-switch-slider"></span>
                <span className="apm-section-title apm-orange">Include Packings</span>
              </label>
              <div className="apm-row">
                <input className="apm-inp" type="text" placeholder="Packing Size" />
                <input className="apm-inp" type="text" placeholder="Price" />
                <button className="apm-btn apm-remove">-</button>
              </div>
              <button className="apm-btn apm-add">+ Add More</button>
            </div>
            {/* Bulk Order Section */}
            <div className="apm-section">
              <label className="apm-switch-label">
                <input type="checkbox" className="apm-switch" />
                <span className="apm-switch-slider"></span>
                <span className="apm-section-title apm-orange">Enable Bulk Order</span>
              </label>
              <div className="apm-row">
                <input className="apm-inp" type="text" placeholder="Min. Quantity" />
                <input className="apm-inp" type="text" placeholder="Amount" />
              </div>
              <button className="apm-btn apm-add">+ Add More</button>
            </div>
            {/* Discount Section */}
            <div className="apm-section">
              <label className="apm-switch-label">
                <input type="checkbox" className="apm-switch" />
                <span className="apm-switch-slider"></span>
                <span className="apm-section-title apm-orange">Apply Discount</span>
              </label>
              <div className="apm-row">
                <input className="apm-inp" type="text" placeholder="Value" />
                <select className="apm-inp">
                  <option value="">Percentage</option>
                </select>
              </div>
            </div>
            <div className="apm-actions">
              <button className="apm-btn apm-cancel" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="apm-btn apm-save">Save</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Product;
