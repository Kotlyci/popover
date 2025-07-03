import React from 'react';
import './Popover.css';

export default function Popover({ title, content, children, isOpen, position = 'top' }) {
  return (
    <div className="popover-wrapper">
      {children}
      {isOpen && (
        <div className={`popover-box popover-${position}`}>
          <div className="popover-title">{title}</div>
          <div className="popover-content">{content}</div>
        </div>
      )}
    </div>
  );
}