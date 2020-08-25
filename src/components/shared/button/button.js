import React from "react";
import "./button.css";

export const Button = ({
   onClick,
   label,
   filled,
   className,
   ...props
 }) => {
  return (
    <button
      className={`${filled ? 'filled' : '' } button ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
