import React from 'react';
import logo from "../assets/logozinha.png";

const ScrollButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={handleClick}>
      <img src={logo} alt="" className="ml-2 mb-2 h-16 w-16"/>
    </button>
  );
};

export default ScrollButton;