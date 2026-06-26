export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border-subtle bg-bg-surface/70">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
        <span>
          &copy; {new Date().getFullYear()} Softwaredesign.io. All rights reserved.
        </span>
        <span className="flex gap-3">
          <a href="#contact" className="hover:text-ink-secondary">
            Contact
          </a>
          <a href="#" className="hover:text-ink-secondary">
            LinkedIn
          </a>
          <a href="#" className="hover:text-ink-secondary">
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}
