// import React from "react";

interface ButtonProps {
  icon?: string;
  iconWrapperClassName?: string;
  isLoading?: boolean;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const Button = ({
  icon,
  iconWrapperClassName,
  isLoading,
  disabled,
  className,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`bg-primary-500 btn btn-primary relative w-full text-base capitalize sm:w-[450px] ${className} ${
        icon ? "justify-start" : ""
      }`}
      disabled={isLoading || disabled}
      {...props}
    >
      <span>
        {label}
        {icon && isLoading && <span className="loading loading-ring"></span>}
      </span>
      {icon && (
        <span
          className={`absolute inset-[4px] start-auto inline-flex w-[38px] items-center justify-center rounded-full bg-white/20 text-lg ${iconWrapperClassName}`}
        >
          {isLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <i className={`icon ${icon}`}></i>
          )}
        </span>
      )}
    </button>
  );
};

export default Button;
