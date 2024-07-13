import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/functions";
import styles from "./index.module.scss";

type ButtonVariant = "primary" | "secondary" | "danger" | "unstyled";
type ButtonSize = "small" | "medium" | "large" | "fit";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "unstyled",
  size = "small",
  leftElement,
  rightElement,
  children,
  className,
  ...rest
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
  ].join(" ");

  return (
    <button className={cn("", buttonClasses, className)} {...rest}>
      {leftElement && leftElement}
      {children}
      {rightElement && rightElement}
    </button>
  );
};

export default Button;
