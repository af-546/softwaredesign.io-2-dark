import MagneticButton from "../components/ui/MagneticButton";
import Reveal from "../components/ui/Reveal";

export default function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft mb-4">
          404
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-primary mb-4">
          Page not found
        </h1>
        <p className="text-ink-secondary mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <MagneticButton to="/">Back home</MagneticButton>
      </Reveal>
    </section>
  );
}
