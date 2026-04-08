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
import BattleStationSection from "./components/sections/BattleStationSection";
import GameShowcaseSection from "./components/sections/GameShowcaseSection";
import GameGalleryPage from "./components/sections/GameGalleryPage";
import ConnectAndPlaySection from "./components/sections/ConnectAndPlaySection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

export default function App() {
  const [mode, setMode] = useState(PROFESSIONAL);
  const [scrolled, setScrolled] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [mode]);

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

  if (isGamer && selectedGame) {
    return (
      <div style={appStyle}>
        <Navbar t={t} mode={mode} setMode={setMode} scrolled={scrolled} />
        <GameGalleryPage t={t} game={selectedGame} onBack={() => setSelectedGame(null)} />
        <Footer t={t} />
      </div>
    );
  }

  return (
    <div style={appStyle}>
      <Navbar t={t} mode={mode} setMode={setMode} scrolled={scrolled} />
      <HeroSection t={t} isGamer={isGamer} scrollTo={scrollTo} />
      {!isGamer && <TimelineSection t={t} isGamer={isGamer} />}

      {!isGamer && <ProjectsSection t={t} />}
      {!isGamer && <SkillsSection t={t} />}

      {isGamer && <BattleStationSection t={t} />}
      {isGamer && <GameShowcaseSection t={t} onOpenGallery={setSelectedGame} />}
      {isGamer && <ConnectAndPlaySection t={t} />}

      {!isGamer && <ContactSection t={t} />}

      <Footer t={t} />
    </div>
  );
}
