import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { markets, projects, services } from "./data/content";
import HomePage from "./sections/home";
import {
  AboutPage,
  CareersPage,
  AssociationsPropertyManagersPage,
  CommercialPage,
  ContactPage,
  DesignBuildPage,
  DetailPage,
  FederalPage,
  GetStartedPage,
  NotFound,
  PrivacyPage,
  ResidentialPage,
  ServicesPage,
  StateLocalPage,
} from "./sections/pages";
import { LoadingScreen } from "./sections/loading";

function usePath() {
  const [path, setPath] = useState(location.pathname);
  useEffect(() => {
    const fn = () => setPath(location.pathname);
    addEventListener("popstate", fn);
    return () => removeEventListener("popstate", fn);
  }, []);
  return path;
}

export default function App() {
  const path = usePath();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title =
      path === "/"
        ? "M&F | Construction Services for the Mid-Atlantic"
        : `M&F | ${path
            .split("/")
            .filter(Boolean)
            .map((s) => s.replaceAll("-", " "))
            .join(" / ")}`;
  }, [path]);

  const route = useMemo(() => {
    if (path === "/") return <HomePage />;
    if (path === "/services") return <ServicesPage />;
    if (path === "/services/design-build") return <DesignBuildPage />;
    if (path === "/markets/federal") return <FederalPage />;
    if (path === "/markets/state-local") return <StateLocalPage />;
    if (path === "/markets/residential") return <ResidentialPage />;
    if (path === "/markets/commercial") return <CommercialPage />;
    if (path === "/markets/associations-property-managers") return <AssociationsPropertyManagersPage />;
    if (path === "/about") return <AboutPage />;
    if (path === "/careers") return <CareersPage />;
    if (path === "/contact") return <ContactPage />;
    if (path === "/get-started") return <GetStartedPage />;
    if (path === "/privacy-policy") return <PrivacyPage />;

    const [, base, slug] = path.split("/");
    if (base === "services") {
      const service = services.find((s) => s.slug === slug);
      return service ? <DetailPage kind="service" item={service} /> : <NotFound />;
    }
    if (base === "markets") {
      const market = markets.find((m) => m.slug === slug);
      return market ? <DetailPage kind="market" item={market} /> : <NotFound />;
    }
    if (base === "projects") {
      const project = projects.find((p) => p.slug === slug);
      return project ? <DetailPage kind="project" item={project} /> : <NotFound />;
    }
    return <NotFound />;
  }, [path]);

  return (
    <AnimatePresence mode="wait">
      {loading ? <LoadingScreen key="loading" /> : <div key={path}>{route}</div>}
    </AnimatePresence>
  );
}
