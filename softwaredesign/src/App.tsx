import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Work from "./components/sections/Work";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import CursorGlow from "./components/ui/CursorGlow";

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <CursorGlow />
      <Layout>
        <Hero />
        <Services />
        <Process />
        <Work />
        <FAQ />
        <Contact />
      </Layout>
    </div>
  );
}
