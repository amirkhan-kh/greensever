import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ isVisible, onLoadComplete }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onLoadComplete();
      }, 100); 
      return () => clearTimeout(timer);
    }
  }, [isVisible, onLoadComplete]);

  return isVisible ? (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  ) : null;
};

export default Loader;
