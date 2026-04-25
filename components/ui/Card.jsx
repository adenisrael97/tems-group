import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "./cn";

/**
 * Base Card component.
 * Renders a motion.div so framer-motion props (variants, whileHover, etc.)
 * can be passed directly.
 *
 * Optional `image` + `title` props render a top image block.
 * Use CardHeader / CardContent / CardFooter for structured layouts.
 */
export default function Card({ children, className, image, title, description, ...rest }) {
  return (
    <motion.div
      className={cn(
        "bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden",
        "transition-all duration-300 hover:shadow-xl",
        className
      )}
      {...rest}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={title ?? "Card image"}
            fill
            className="object-cover"
          />
        </div>
      )}
      {title && !children && (
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          )}
        </div>
      )}
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className, ...rest }) {
  return (
    <div className={cn("p-6 pb-4", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...rest }) {
  return (
    <div className={cn("px-6 pb-6", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...rest }) {
  return (
    <div
      className={cn("px-6 pb-6 pt-4 border-t border-gray-100", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
