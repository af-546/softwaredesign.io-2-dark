import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };

    setPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div
        className="absolute w-64 h-64 rounded-full bg-accent-subtle blur-3xl opacity-60 transition-transform duration-300"
        style={{
          transform: `translate(${pos.x - 128}px, ${pos.y - 128}px)`,
        }}
      />
    </div>
  );
}
