import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 space-y-24 md:space-y-32 pt-24 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
