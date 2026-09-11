import { useEffect, useState } from "react";
import {
  BrandMarquee,
  AboutUs,
  FAQ,
  Contact,
  WhatWeDo,
  Footer,
  Header,
  Hero,
  BenefitsStrip,
  RepairSupportCTA,
  Services,
  Testimonials,
} from "./components";
import Products, { ProductDetail } from "./components/Products";

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("app-route-change", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("app-route-change", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animatedElements = Array.from(
      document.querySelectorAll("main > section, footer")
    );

    animatedElements.forEach((element, index) => {
      element.classList.add("site-reveal");
      element.style.setProperty("--site-delay", `${Math.min(index * 80, 320)}ms`);
    });

    if (reduceMotion) {
      animatedElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/products") {
    return <Products />;
  }

  if (pathname.startsWith("/products/")) {
    return <ProductDetail slug={pathname.replace("/products/", "")} />;
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <WhatWeDo />
        <AboutUs />
        <Services />
        <BenefitsStrip />
        <Testimonials />
        <FAQ />
        <Contact />
        <RepairSupportCTA />
      </main>
      <Footer />
    </div>
  ); 
}
