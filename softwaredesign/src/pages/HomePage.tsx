import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      <Hero />
      <TrustedBy />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
