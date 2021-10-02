import React from "react";
import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      primary = true,
      backgroundColor,
      size = "medium",
      onClick,
      children,
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const mode = primary
      ? "storybook-button--primary"
      : "storybook-button--secondary";
    return (
      <button
        ref={ref}
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        style={backgroundColor ? { backgroundColor } : {}}
        onClick={onClick}
      >
        <span>{children}</span>
      </button>
    );
  }
);

export default Button;
