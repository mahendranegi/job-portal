import React from 'react';

export default function Toggle({ onClick, isDark }) {
  return (
    <div>
      <label className="switch">
        <input 
          type="checkbox" 
          checked={isDark} 
          onChange={onClick} 
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
