import { Link } from "react-router-dom";
import MagneticButton from "../components/ui/MagneticButton";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">404</p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-primary">
        Page not found
      </h1>
      <p className="text-ink-secondary max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <MagneticButton
          href="/"
          className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors"
        >
          Back home
        </MagneticButton>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-full border border-border-subtle px-6 py-3 text-sm font-medium text-ink-primary hover:border-accent-soft/50 transition-colors"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
