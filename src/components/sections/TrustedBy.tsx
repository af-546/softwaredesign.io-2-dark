const clients = [
  { name: "Rowan Lim", src: "/logos/rowan-lim.png" },
  { name: "Umbulizer", src: "/logos/umbulizer.jpg" },
  { name: "Sarah Cleaners", src: "/logos/sarah-cleaners.avif" },
];

export default function TrustedBy() {
  return (
    <section className="relative left-1/2 -translate-x-1/2 w-screen py-12 md:py-16 border-y border-border-subtle bg-bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <p className="text-center text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted mb-8">
          Trusted by founders, operators, and product teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((client) => (
            <img
              key={client.name}
              src={client.src}
              alt={client.name}
              className="h-10 md:h-12 w-auto max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity grayscale brightness-200"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
