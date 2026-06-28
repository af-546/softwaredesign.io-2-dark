import { motion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  to?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-accent text-white shadow-glow hover:bg-accent-soft border border-transparent",
  secondary:
    "bg-bg-surface text-ink-primary border border-border-subtle hover:border-accent-soft hover:text-accent-soft",
  ghost: "text-ink-muted hover:text-ink-primary border border-transparent",
};

export default function MagneticButton({
  children,
  className = "",
  href,
  to,
  type = "button",
  onClick,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    setPosition({
      x: (event.clientX - rect.left - rect.width / 2) * 0.18,
      y: (event.clientY - rect.top - rect.height / 2) * 0.18,
    });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const inner = (
    <motion.span
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );

  const wrapperClass = "inline-block";

  if (to) {
    return (
      <div
        ref={ref}
        className={wrapperClass}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={to} onClick={onClick}>
          {inner}
        </Link>
      </div>
    );
  }

  if (href) {
    return (
      <div
        ref={ref}
        className={wrapperClass}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <a href={href} onClick={onClick}>
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={wrapperClass}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button type={type} onClick={onClick} className="block">
        {inner}
      </button>
    </div>
  );
}
