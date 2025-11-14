import type { ButtonHTMLAttributes } from "react";
import { cn } from "./utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#6A23F5] text-white hover:bg-[#5319c3] focus-visible:ring-[#6A23F5]",
  secondary:
    "bg-[#E1E9FF] text-[#1A1A1A] hover:bg-[#cfdcff] focus-visible:ring-[#A8C0FF]",
  outline:
    "border border-[#6A23F5] text-[#6A23F5] hover:bg-[#f1ebff] focus-visible:ring-[#6A23F5]",
  ghost: "bg-transparent text-[#1A1A1A] hover:bg-[#F4F4F5]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}

export default Button;


