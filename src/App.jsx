import { useEffect, useMemo, useState } from "react";
import {
  GAMER,
  PROFESSIONAL,
  themes,
} from "./data/content";
import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import TimelineSection from "./components/sections/TimelineSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import LogoTicker from "./components/sections/LogoTicker";
import BattleStationSection from "./components/sections/BattleStationSection";
import ConnectAndPlaySection from "./components/sections/ConnectAndPlaySection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

export default function App() {
  const [mode, setMode] = useState(PROFESSIONAL);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const t = themes[mode];
  const isGamer = mode === GAMER;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", t.accent);
    document.documentElement.style.setProperty("--scroll-thumb", `rgba(${t.accentRgb},0.4)`);
  }, [t.accent, t.accentRgb]);

  const appStyle = useMemo(
    () => ({
      background: t.bg,
      color: t.text,
      fontFamily: t.fontBody,
      minHeight: "100vh",
      transition: "background 0.5s, color 0.4s",
      overflowX: "hidden",
    }),
    [t]
  );

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={appStyle}>
      <Navbar t={t} mode={mode} setMode={setMode} scrolled={scrolled} />
      <HeroSection t={t} isGamer={isGamer} scrollTo={scrollTo} />
      <TimelineSection t={t} isGamer={isGamer} />

      {!isGamer && <ProjectsSection t={t} />}
      {!isGamer && <SkillsSection t={t} />}
      {!isGamer && (
        <TestimonialsSection
          t={t}
          testimonialIdx={testimonialIdx}
          setTestimonialIdx={setTestimonialIdx}
        />
      )}

      <LogoTicker t={t} />

      {isGamer && <BattleStationSection t={t} />}
      {isGamer && <ConnectAndPlaySection t={t} />}

      {!isGamer && (
        <ContactSection
          t={t}
          formData={formData}
          setFormData={setFormData}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      )}

      <Footer t={t} />
    </div>
  );
}
