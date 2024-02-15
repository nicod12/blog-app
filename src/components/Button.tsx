import { ReactNode } from "react";

interface ButtonProps {
    className: string;
    value: string;
    children?: ReactNode;
  }


export const Button: React.FC<ButtonProps> = ({ className, value, children }) => {
    return (
      <button type="button" name="button" className={className}>
        {children}
          {value}
      </button>
    );
  };