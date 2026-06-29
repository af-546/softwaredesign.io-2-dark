import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35 });
  const springY = useSpring(y, { stiffness: 500, damping: 35 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[60] hidden lg:block"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    >
      <div className="-translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent-soft shadow-glow" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-8 w-8 rounded-full border border-accent-soft/40" />
    </motion.div>
  );
}
