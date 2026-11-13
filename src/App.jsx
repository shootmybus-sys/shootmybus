import React, { useEffect, useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Hero from "./Component/Hero/Hero";
import Services from "./Component/Services/Services";
import Experience from "./Component/Experience/Experience";
import Stats from "./Component/Stats/Stats";
import Portfolio from "./Component/Portfolio/Portfolio";
import Process from "./Component/Process/Process";
import WhyChooseUs from "./Component/WhyChooseUs/WhyChooseUs";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import SeoHead from "./Component/SeoHead/SeoHead";
import ServicesPage from "./pages/Services/ServicesPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailPage from "./pages/Blog/BlogDetailPage";
import { AboutPage, ContactPage, PortfolioPage } from "./pages/SubPages";
import NotFoundPage from "./pages/NotFoundPage";
import {
  CancellationPolicyPage,
  CopyrightPolicyPage,
  PrivacyPolicyPage,
  TermsConditionsPage,
} from "./pages/Legal";
import {
  PAGE_SEO,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
} from "./config/seoConfig";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function HomePage() {
  const schemas = useMemo(
    () => [
      buildOrganizationSchema(),
      buildWebsiteSchema(),
      buildWebPageSchema(PAGE_SEO.home),
    ],
    []
  );

  return (
    <>
      <SeoHead
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        path={PAGE_SEO.home.path}
        image={PAGE_SEO.home.image}
        schemas={schemas}
      />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="service">
          <Services />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="stats">
          <Stats />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="about">
          <WhyChooseUs />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
        <Route path="/copyright-policy" element={<CopyrightPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
