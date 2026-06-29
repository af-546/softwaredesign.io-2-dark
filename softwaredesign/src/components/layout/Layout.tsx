import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorGlow from "../ui/CursorGlow";
import SmoothScroll from "../ui/SmoothScroll";
import ScrollProgress from "../ui/ScrollProgress";
import GrainOverlay from "../ui/GrainOverlay";
import BackToTop from "../ui/BackToTop";
import CustomCursor from "../ui/CustomCursor";
import PageMeta from "../ui/PageMeta";

export default function Layout() {
  return (
    <SmoothScroll>
      <PageMeta />
      <ScrollProgress />
      <GrainOverlay />
      <CustomCursor />
      <div className="relative min-h-screen mesh-bg">
        <CursorGlow />
        <Navbar />
        <main className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pt-20 pb-16 md:pb-24">
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}
