// SideMenu.js
import React from 'react';

function SideMenu({ unitInfo, onClose }) {
  return (
    <div style={{ position: 'fixed', right: 20, top: 20, background: 'white', padding: 20 }}>
      <h2>Unit Information</h2>
      <p>Unit Number: {unitInfo.number}</p>
      <p>Unit Size: {unitInfo.size}</p>
      <p>Features: {unitInfo.features}</p>
      <p>Price: {unitInfo.price}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default SideMenu;
