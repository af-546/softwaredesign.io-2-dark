import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  type?: "button" | "submit";
};

export default function MagneticButton({
  children,
  className = "",
  to,
  href,
  onClick,
  strength = 0.35,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMove(event: MouseEvent) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const innerClass = `inline-flex items-center justify-center ${className}`;

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      {to ? (
        <Link to={to} className={innerClass} onClick={onClick}>
          {children}
        </Link>
      ) : href ? (
        <a href={href} className={innerClass} onClick={onClick}>
          {children}
        </a>
      ) : (
        <button type={type} className={innerClass} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
