import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer select-none";

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-light)] shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:shadow-[0_0_35px_rgba(201,168,76,0.7)]",
    outline:
      "border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black",
    ghost:
      "text-[var(--color-gold)] underline underline-offset-4 hover:text-[var(--color-gold-light)]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
}