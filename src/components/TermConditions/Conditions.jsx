import React, { useState, useRef } from 'react';
import { FaPen } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import './Conditions.css';

const initialHtml = `<h3 class="tc-heading">Terms & Conditions for Karyana App</h3>
<p>At <span class="tc-bold">Karyana</span>, we take your privacy and security very seriously. This <span class="tc-bold">Terms & Conditions</span> explains how we collect, use, disclose, and protect your personal information when you use our online B2B store for retailers to buy bulk items (the <span class="tc-bold">"Services"</span>).</p>
<p>By using the Services, you agree to the terms and conditions of this <span class="tc-bold">Terms & Conditions</span>. If you do not agree to the terms and conditions of this Terms & Conditions, please do not use the Services.</p>
<div class="tc-section">
  <div class="tc-section-title">Information We Collect</div>
  <p>When you use the Services, we may collect certain information about you, including:</p>
  <ul class="tc-list">
    <li class="tc-list-item"><span class="tc-bold">Personal Information:</span> We may collect personal information such as your name, email address, phone number, business information, and payment information.</li>
    <li class="tc-list-item"><span class="tc-bold">Usage Information:</span> We may collect information about your use of the Services, including the pages you visit, the time and date of your visit, the amount of time you spend on each page, and your IP address.</li>
    <li class="tc-list-item"><span class="tc-bold">Device Information:</span> We may collect information about the device you use to access the Services, including the type of device, operating system, and browser.</li>
  </ul>
</div>
<div class="tc-section">
  <div class="tc-section-title">How We Use Your Information</div>
  <p>We may use your information for the following purposes:</p>
  <ul class="tc-list">
    <li class="tc-list-item"><span class="tc-bold">To provide and improve the Services:</span> We use your information to provide the Services, personalize your experience, and improve the Services.</li>
    <li class="tc-list-item"><span class="tc-bold">To communicate with you:</span> We use your information to communicate with you about the Services, including sending you updates and notifications.</li>
    <li class="tc-list-item"><span class="tc-bold">To process transactions:</span> We use your information to process transactions, including payment processing.</li>
    <li class="tc-list-item"><span class="tc-bold">To comply with legal obligations:</span> We may use your information to comply with applicable laws and regulations.</li>
  </ul>
</div>
<div class="tc-section">
  <div class="tc-section-title">Sharing Your Information</div>
  <p>We may share your information with third parties in the following circumstances:</p>
  <ul class="tc-list">
    <li class="tc-list-item"><span class="tc-bold">Service Providers:</span> We may share your information with third-party service providers who help us operate the Services and process transactions.</li>
    <li class="tc-list-item"><span class="tc-bold">Business Transfers:</span> We may share your information in connection with a merger, acquisition, or sale of all or a portion of our business.</li>
    <li class="tc-list-item"><span class="tc-bold">Legal Requirements:</span> We may disclose your information if required to do so by law or in response to a subpoena or other legal process.</li>
    <li class="tc-list-item"><span class="tc-bold">Safety and Security:</span> We may disclose your information if we believe it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, or threats to the safety of any person.</li>
  </ul>
</div>
<div class="tc-section">
  <div class="tc-section-title">Security of Your Information</div>
  <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no transmission of data over the Internet is completely secure, and we cannot guarantee the security of your personal information.</p>
</div>
<div class="tc-section">
  <div class="tc-section-title">Children's Privacy</div>
  <p>The Services are not intended for use by children under the age of 18, and we do not knowingly collect personal information from children under the age of 18. If we learn that we have collected personal information from a child under the age of 18, we will take steps to delete the information as soon as possible.</p>
</div>
<div class="tc-section">
  <div class="tc-section-title">Changes to this Terms & Conditions</div>
  <p>We may update this Terms & Conditions from time to time. If we make material changes to this Terms & Conditions, we will notify you by email or by posting a notice on the Services prior to the effective date of the changes.</p>
</div>
<div class="tc-section">
  <div class="tc-section-title">Contact Us</div>
  <p>If you have any questions or concerns about this Terms & Conditions, please contact us at <span class="tc-email">support@karyana.com</span>.</p>
</div>`;

const Conditions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [conditionsHtml, setConditionsHtml] = useState(initialHtml);
  const editableRef = useRef(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleSave = () => {
    if (editableRef.current) {
      setConditionsHtml(editableRef.current.innerHTML);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <div className="tc-hd">
        <h2 className="tc-title">Terms & Conditions</h2>
        <button className="tc-edit-btn" onClick={openModal}>
          <FaPen className="tc-edit-icon" /> Edit
        </button>
      </div>
      <div className="tc-content" dangerouslySetInnerHTML={{ __html: conditionsHtml }} />
      {modalOpen && createPortal(
        <div className="tc-modal-backdrop">
          <div className="tc-modal" onClick={e => e.stopPropagation()}>
            <div className="tc-modal-title">Edit Terms & Conditions</div>
            <div
              className="tc-modal-editable"
              contentEditable
              suppressContentEditableWarning
              ref={editableRef}
              dangerouslySetInnerHTML={{ __html: conditionsHtml }}
            />
            <div className="tc-modal-actions">
              <button className="tc-modal-cancel" onClick={closeModal}>Cancel</button>
              <button className="tc-modal-save" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>,
        document.getElementById('modal-root')
      )}
    </div>
  );
}

export default Conditions;
