import { motion } from "framer-motion";

const stats = [
  { value: "98%", label: "Client satisfaction" },
  { value: "4–8 wks", label: "Typical timeline" },
  { value: "50+", label: "Products shipped" },
  { value: "Boston", label: "Studio + remote" },
];

export default function StatsBar() {
  return (
    <section className="relative left-1/2 -translate-x-1/2 w-screen border-y border-border-subtle bg-bg-surface/40 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="text-center md:text-left"
            >
              <p className="font-serif text-2xl md:text-3xl font-semibold text-ink-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
