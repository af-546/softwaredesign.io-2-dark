import { useLocation } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import { getCaseStudyBySlug } from "../../data/caseStudies";
import { getServiceBySlug } from "../../data/services";

const defaults = {
  title: "SoftwareDesign.io — Software design that ships.",
  description:
    "Strategy, design, and engineering for ambitious SMBs and SaaS teams. Boston-based design studio.",
};

export default function PageMeta() {
  const { pathname } = useLocation();

  let title = defaults.title;
  let description = defaults.description;

  if (pathname === "/about") {
    title = "About — SoftwareDesign.io";
    description = "A Boston design studio obsessed with shipping software for SMBs and SaaS teams.";
  } else if (pathname === "/contact") {
    title = "Contact — SoftwareDesign.io";
    description = "Start a project with SoftwareDesign.io. We reply within one business day.";
  } else if (pathname === "/work") {
    title = "Work — SoftwareDesign.io";
    description = "Selected client work with measurable outcomes.";
  } else if (pathname.startsWith("/work/")) {
    const study = getCaseStudyBySlug(pathname.replace("/work/", ""));
    if (study) {
      title = `${study.client} — SoftwareDesign.io`;
      description = study.summary;
    }
  } else if (pathname.startsWith("/services/")) {
    const service = getServiceBySlug(pathname.replace("/services/", ""));
    if (service) {
      title = `${service.title} — SoftwareDesign.io`;
      description = service.description;
    }
  } else if (pathname === "/privacy") {
    title = "Privacy — SoftwareDesign.io";
  } else if (pathname === "/terms") {
    title = "Terms — SoftwareDesign.io";
  }

  usePageTitle(title, description);
  return null;
}
