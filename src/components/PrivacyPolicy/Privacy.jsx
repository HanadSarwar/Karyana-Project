import React, { useState, useRef } from 'react';
import { FaPen } from 'react-icons/fa';
import './Privacy.css';
const initialHtml = `<h3 class="pp-heading">Privacy Policy for Karyana App</h3>
<p>At <span class="pp-bold">Karyana</span>, we take your privacy and security very seriously. This <span class="pp-bold">Privacy Policy</span> explains how we collect, use, disclose, and protect your personal information when you use our online B2B store for retailers to buy bulk items (the <span class="pp-bold">\"Services\"</span>).</p>
<p>By using the Services, you agree to the terms and conditions of this <span class="pp-bold">Privacy Policy</span>. If you do not agree to the terms and conditions of this Privacy Policy, please do not use the Services.</p>
<div class="pp-section">
  <div class="pp-section-title">Information We Collect</div>
  <p>When you use the Services, we may collect certain information about you, including:</p>
  <ul class="pp-list">
    <li class="pp-list-item"><span class="pp-bold">Personal Information:</span> We may collect personal information such as your name, email address, phone number, business information, and payment information.</li>
    <li class="pp-list-item"><span class="pp-bold">Usage Information:</span> We may collect information about your use of the Services, including the pages you visit, the time and date of your visit, the amount of time you spend on each page, and your IP address.</li>
    <li class="pp-list-item"><span class="pp-bold">Device Information:</span> We may collect information about the device you use to access the Services, including the type of device, operating system, and browser.</li>
  </ul>
</div>
<div class="pp-section">
  <div class="pp-section-title">How We Use Your Information</div>
  <p>We may use your information for the following purposes:</p>
  <ul class="pp-list">
    <li class="pp-list-item"><span class="pp-bold">To provide and improve the Services:</span> We use your information to provide the Services, personalize your experience, and improve the Services.</li>
    <li class="pp-list-item"><span class="pp-bold">To communicate with you:</span> We use your information to communicate with you about the Services, including sending you updates and notifications.</li>
    <li class="pp-list-item"><span class="pp-bold">To process transactions:</span> We use your information to process transactions, including payment processing.</li>
    <li class="pp-list-item"><span class="pp-bold">To comply with legal obligations:</span> We may use your information to comply with applicable laws and regulations.</li>
  </ul>
</div>
<div class="pp-section">
  <div class="pp-section-title">Sharing Your Information</div>
  <p>We may share your information with third parties in the following circumstances:</p>
  <ul class="pp-list">
    <li class="pp-list-item"><span class="pp-bold">Service Providers:</span> We may share your information with third-party service providers who help us operate the Services and process transactions.</li>
    <li class="pp-list-item"><span class="pp-bold">Business Transfers:</span> We may share your information in connection with a merger, acquisition, or sale of all or a portion of our business.</li>
    <li class="pp-list-item"><span class="pp-bold">Legal Requirements:</span> We may disclose your information if required to do so by law or in response to a subpoena or other legal process.</li>
    <li class="pp-list-item"><span class="pp-bold">Safety and Security:</span> We may disclose your information if we believe it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, or threats to the safety of any person.</li>
  </ul>
</div>
<div class="pp-section">
  <div class="pp-section-title">Security of Your Information</div>
  <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no transmission of data over the Internet is completely secure, and we cannot guarantee the security of your personal information.</p>
</div>
<div class="pp-section">
  <div class="pp-section-title">Children's Privacy</div>
  <p>The Services are not intended for use by children under the age of 18, and we do not knowingly collect personal information from children under the age of 18. If we learn that we have collected personal information from a child under the age of 18, we will take steps to delete the information as soon as possible.</p>
</div>
<div class="pp-section">
  <div class="pp-section-title">Changes to this Privacy Policy</div>
  <p>We may update this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on the Services prior to the effective date of the changes.</p>
</div>
<div class="pp-section">
  <div class="pp-section-title">Contact Us</div>
  <p>If you have any questions or concerns about this Privacy Policy, please contact us at <span class="pp-email">support@karyana.com</span>.</p>
</div>`;

const Privacy = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [policyHtml, setPolicyHtml] = useState(initialHtml);
  const editableRef = useRef(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleSave = () => {
    if (editableRef.current) {
      setPolicyHtml(editableRef.current.innerHTML);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <div className="pp-hd">
        <h2 className="pp-title">Privacy Policy</h2>
        <button className="pp-edit-btn" onClick={openModal}>
          <FaPen className="pp-edit-icon" /> Edit
        </button>
      </div>
      <div className="pp-content" dangerouslySetInnerHTML={{ __html: policyHtml }} />
      {modalOpen && (
        <div className="pp-modal-backdrop">
          <div className="pp-modal" onClick={e => e.stopPropagation()}>
            <div className="pp-modal-title">Edit Privacy Policy</div>
            <div
              className="pp-modal-editable"
              contentEditable
              suppressContentEditableWarning
              ref={editableRef}
              style={{overflowY: 'auto', maxHeight: 400, background: '#f5f6fa', borderRadius: 8, padding: 16, marginBottom: 24, border: '1px solid #e0e0e0'}}
              dangerouslySetInnerHTML={{ __html: policyHtml }}
            />
            <div className="pp-modal-actions">
              <button className="pp-modal-cancel" onClick={closeModal}>Cancel</button>
              <button className="pp-modal-save" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Privacy;
