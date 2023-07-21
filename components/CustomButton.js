import React from 'react';

const CustomButton = ({ text, onClick, variant }) => {
  const buttonStyles = {
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '16px',
  };

  const variantStyles = {
    contained: {
      backgroundColor: '#2196F3',
      color: 'white',
      border: 'none',
    },
    outlined: {
      backgroundColor: 'transparent',
      color: '#2196F3',
      border: '2px solid #2196F3',
    },
    text: {
      backgroundColor: 'transparent',
      color: '#2196F3',
      border: 'none',
    },
  };

  const buttonStyle = { ...buttonStyles, ...variantStyles[variant] };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
    >
      {text}
    </button>
  );
};

export default CustomButton;