import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaEdit, FaTrash, FaBox, FaCheck, FaMinus, FaPlus } from 'react-icons/fa';
import WheatImg from '../../assets/WheatImg.png';
import NeonLogo from '../../assets/Neon.png';
import './ProductDropdown.css';

const ProductDropdown = ({ isOpen, onClose, product, position, onStockUpdate }) => {
  const [showUpdateStockModal, setShowUpdateStockModal] = useState(false);
  const [stockQuantity, setStockQuantity] = useState(0);

  // Update stock quantity when product changes
  useEffect(() => {
    if (product) {
      setStockQuantity(product.stockQuantity || 0);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleUpdateStock = () => {
    setShowUpdateStockModal(true);
  };

  const handleStockChange = (increment) => {
    const newQuantity = stockQuantity + increment;
    if (newQuantity >= 0) {
      setStockQuantity(newQuantity);
    }
  };

  const handleStockSubmit = () => {
    if (onStockUpdate) {
      onStockUpdate(product.id, stockQuantity);
    }
    setShowUpdateStockModal(false);
  };

  const handleStockCancel = () => {
    setStockQuantity(product.stockQuantity || 0);
    setShowUpdateStockModal(false);
  };

  return createPortal(
    <>
      <div className="product-dropdown-overlay" onClick={onClose}></div>
      <div className="product-dropdown-popup">
        {/* Header with Back Arrow and Delete Button */}
        <div className="product-dropdown-header">
          <button className="back-arrow-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="delete-btn">
            <FaTrash /> Delete
          </button>
        </div>

        {/* Content Container */}
        <div className="product-dropdown-content">
          {/* Product Image and Basic Details */}
          <div className="product-dropdown-image-section">
          <div className="product-dropdown-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-dropdown-basic-info">
            <h3 className="product-dropdown-title">{product.name}</h3>
            <p className="product-dropdown-urdu-title">{product.urduName}</p>
            <p className="product-dropdown-category">{product.category}</p>
          </div>
          <div className="product-dropdown-price">{product.price}</div>
        </div>

        {/* Seller/Brand Information */}
        <div className="product-dropdown-divider"></div>
        <div className="product-dropdown-brand-section">
          <div className="product-dropdown-brand-info">
            <div className="product-dropdown-brand-logo">
              <img src={product.brandLogo} alt={product.brand} />
            </div>
            <div className="product-dropdown-brand-details">
              <h4>{product.brand}</h4>
              <p>{product.productsSold} Products Sold</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="product-dropdown-divider"></div>
        <div className="product-dropdown-description-section">
          <div className="product-dropdown-description-left">
            <h4>Description</h4>
            <p className="product-dropdown-description-text">
              Sed pellentesque ac nisl ipsum ipsum. Nunc ac malesuada massa faucibus quis. In etiam velit amet mi lorem proin duis ullamcorper et. Enim neque at...
              <span className="read-more">Read More</span>
            </p>
          </div>
          <div className="product-dropdown-description-right">
            <h4>تفصیل</h4>
            <p className="product-dropdown-urdu-description">
              ہم آپ کو ایک خاص پروڈکٹ متعارف کراتے ہیں جو مختلف پھلوں اور سبزیوں سے بنا ہے۔ یہ پروڈکٹ تازگی کی ضمانت دیتا ہے اور صحت مند کھانے کو فروغ دیتا ہے۔
            </p>
          </div>
        </div>

        {/* Packing Options */}
        <div className="product-dropdown-divider"></div>
        <div className="product-dropdown-packing-section">
          <h4>Packing</h4>
          <div className="product-dropdown-packing-options">
            {product.packingOptions.map((option, index) => (
              <button key={index} className="packing-option-btn">
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Bulk Order Pricing */}
        <div className="product-dropdown-divider"></div>
        <div className="product-dropdown-bulk-section">
          <h4>Bulk Order</h4>
          <div className="product-dropdown-bulk-options">
            {product.bulkOptions.map((option, index) => (
              <div key={index} className="bulk-option">
                <div className="bulk-quantity">{option.quantity}</div>
                <div className="bulk-price">{option.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="product-dropdown-actions">
          <button className="action-btn edit-btn">
            <FaEdit /> Edit
          </button>
          <button className="action-btn update-stock-btn" onClick={handleUpdateStock}>
            Update Stock
          </button>
          <button className="action-btn add-variant-btn">
            Add Variant
          </button>
        </div>
        </div>
      </div>

      {/* Update Stock Modal */}
      {showUpdateStockModal && createPortal(
        <div className="update-stock-modal-overlay" onClick={handleStockCancel}>
          <div className="update-stock-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="update-stock-title">Update Stock</h3>
            <hr className="update-stock-divider" />
            
            {/* Product Info */}
            <div className="update-stock-product-info">
              <img src={product.image} alt={product.name} />
              <div className="update-stock-product-details">
                <h4>{product.name}</h4>
                <p>#{product.id}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="update-stock-quantity-controls">
              <button 
                className="quantity-btn minus-btn" 
                onClick={() => handleStockChange(-1)}
                disabled={stockQuantity <= 0}
              >
                <FaMinus />
              </button>
              <input 
                type="number" 
                className="quantity-input" 
                value={stockQuantity} 
                onChange={(e) => setStockQuantity(parseInt(e.target.value) || 0)}
                min="0"
              />
              <button 
                className="quantity-btn plus-btn" 
                onClick={() => handleStockChange(1)}
              >
                <FaPlus />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="update-stock-actions">
              <button className="update-stock-cancel-btn" onClick={handleStockCancel}>
                Cancel
              </button>
              <button className="update-stock-update-btn" onClick={handleStockSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>,
    document.body
  );
};

export default ProductDropdown;
