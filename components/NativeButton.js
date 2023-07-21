import React from 'react';

const NativeButton = ({
  text,
  onClick,
  type,
  disabled,
  backgroundColor,
  color,
  padding,
  borderRadius,
  cursor,
  border,
  outline,
}) => {
  const defaultStyles = {
    backgroundColor: '#389eec',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: '2px',
    outline: 'none',
  };
  
  const buttonStyle = {
    backgroundColor: backgroundColor ? backgroundColor : defaultStyles.backgroundColor,
    color: color ? color : defaultStyles.color,
    padding: padding ? padding : defaultStyles.padding,
    borderRadius: borderRadius ? borderRadius : defaultStyles.borderRadius,
    cursor: cursor ? cursor : defaultStyles.cursor,
    border: border ? border : defaultStyles.border,
    outline: outline ? outline : defaultStyles.outline,
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      {text}
    </button>
  );
};

export default NativeButton;