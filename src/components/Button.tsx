import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  className: string;
  value: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ className, value, children, onClick }) => {
  return (
    <button type="button" name="button" className={className} onClick={onClick}>
      {children}
      {value}
    </button>
  );
};
