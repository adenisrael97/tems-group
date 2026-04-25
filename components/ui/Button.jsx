"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "./cn";

const variantClasses = {
  primary:
    "bg-yellow-500 text-black hover:bg-yellow-400 active:bg-yellow-600 shadow-lg hover:shadow-yellow-500/25",
  secondary:
    "bg-black text-white border-2 border-black hover:bg-gray-800 active:bg-gray-900",
  outline:
    "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white",
  "outline-white":
    "border-2 border-white text-white bg-transparent hover:bg-white hover:text-black",
  danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
  ghost: "bg-transparent text-gray-700 hover:text-yellow-500 hover:bg-gray-100",
  "soft-yellow":
    "bg-yellow-200 text-yellow-700 hover:bg-yellow-400 focus:ring-yellow-700",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  icon: "p-2",
};

const roundedClasses = {
  full: "rounded-full",
  xl: "rounded-xl",
  lg: "rounded-lg",
};

/**
 * Reusable Button component.
 *
 * - Pass `href` for navigation (renders Next.js Link)
 * - Pass `onClick` for actions (renders motion.button)
 * - Motion props (whileHover, whileTap, etc.) work on non-href buttons
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className,
  href,
  onClick,
  type = "button",
  rounded = "full",
  ...rest
}) {
  const isDisabled = disabled || loading;

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2",
    roundedClasses[rounded] ?? "rounded-full",
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[size] ?? sizeClasses.md,
    isDisabled && "opacity-60 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} aria-disabled={isDisabled} {...rest}>
        {loading && <span className="animate-spin leading-none">⟳</span>}
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={baseClasses}
      {...rest}
    >
      {loading && <span className="animate-spin leading-none">⟳</span>}
      {children}
    </motion.button>
  );
}
