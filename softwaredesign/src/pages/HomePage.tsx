import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import TrustedBy from "../components/sections/TrustedBy";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <div className="space-y-8 md:space-y-14">
      <Hero />
      <StatsBar />
      <TrustedBy />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
