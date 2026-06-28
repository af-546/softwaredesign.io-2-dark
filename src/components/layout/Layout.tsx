import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pb-16 pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
