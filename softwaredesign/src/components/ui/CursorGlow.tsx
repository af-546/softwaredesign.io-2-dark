import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const springX = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      springX.set(event.clientX - 128);
      springY.set(event.clientY - 128);
    };

    springX.set(window.innerWidth / 2 - 128);
    springY.set(window.innerHeight / 2 - 128);
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [springX, springY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-accent-subtle blur-3xl opacity-60"
        style={{ x: springX, y: springY }}
      />
    </div>
  );
}
