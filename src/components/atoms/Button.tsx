import React from "react";
import { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`w-fit h-[40px] px-8 py-2 bg-primary text-white text-button rounded-[5px] hover:bg-[#550788] cursor-pointer focus:border-[2px] focus:border-primary-50 transition disabled:bg-[#CDCDCD] disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
