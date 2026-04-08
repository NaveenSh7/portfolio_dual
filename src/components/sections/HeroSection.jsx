import FadeIn from "../common/FadeIn";
import RadarAnim from "../common/RadarAnim";

export default function HeroSection({ t, isGamer, scrollTo }) {
  return (
    <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: t.heroGrad, pointerEvents: "none", transition: "background 0.6s" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "400px", height: "200px", background: "radial-gradient(ellipse at bottom right, rgba(0,60,40,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="dv-hero-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto", padding: "0 3rem", height: "100vh", gap: "2rem" }}>
        <div style={{ flex: 1, maxWidth: "620px" }}>
          <div className="dv-h1" style={{ fontFamily: t.fontDisplay, fontSize: "0.68rem", letterSpacing: "0.25em", color: t.accent, textTransform: "uppercase", marginBottom: "1.5rem", opacity: 0.8 }}>{t.label}</div>
          <h1 style={{ fontFamily: t.fontDisplay, fontWeight: 900, lineHeight: 1.0, marginBottom: "1.5rem" }}>
            <div className="dv-h2" style={{ fontSize: "clamp(3rem,6.5vw,5.5rem)", color: "#fff", letterSpacing: isGamer ? "0.04em" : "-0.02em" }}>{isGamer ? "Captain" : "Naveen S H"}</div>
            <div className="dv-h3" style={{ fontSize: "clamp(2.8rem,6vw,5rem)", color: t.accent, letterSpacing: isGamer ? "0.04em" : "-0.02em", textShadow: `0 0 40px rgba(${t.accentRgb},0.5)` }}>
              {isGamer ? "Jack Sparrow" : "Software Developer"}
            </div>
          </h1>
          <div className="dv-h4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {isGamer ? (
              <>
                <a href="https://www.youtube.com/@naveengamingyt1834" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: t.btnBg, color: t.btnText, border: "none", padding: "0.9rem 1.8rem", fontFamily: t.fontDisplay, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", borderRadius: "2px", cursor: "pointer", textTransform: "uppercase", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: `0 0 20px rgba(${t.accentRgb},0.35)` }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = `0 0 36px rgba(${t.accentRgb},0.55)`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 0 20px rgba(${t.accentRgb},0.35)`; }}>
                  YouTube
                </a>
                <a href="https://steamcommunity.com/profiles/76561199643168285" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: "transparent", color: "#fff", border: `1px solid rgba(${t.accentRgb},0.4)`, padding: "0.9rem 1.8rem", fontFamily: t.fontDisplay, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", borderRadius: "2px", cursor: "pointer", textTransform: "uppercase", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `rgba(${t.accentRgb},0.4)`; e.currentTarget.style.color = "#fff"; }}>
                  Steam
                </a>
              </>
            ) : (
              <>
                <a href="https://www.linkedin.com/in/naveen-sh-a7594b323/" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: t.btnBg, color: t.btnText, border: "none", padding: "0.9rem 1.8rem", fontFamily: t.fontDisplay, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", borderRadius: "2px", cursor: "pointer", textTransform: "uppercase", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: `0 0 20px rgba(${t.accentRgb},0.35)` }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = `0 0 36px rgba(${t.accentRgb},0.55)`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 0 20px rgba(${t.accentRgb},0.35)`; }}>
                  LinkedIn
                </a>
                <a href="https://github.com/NaveenSh7" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: "transparent", color: "#fff", border: `1px solid rgba(${t.accentRgb},0.4)`, padding: "0.9rem 1.8rem", fontFamily: t.fontDisplay, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", borderRadius: "2px", cursor: "pointer", textTransform: "uppercase", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `rgba(${t.accentRgb},0.4)`; e.currentTarget.style.color = "#fff"; }}>
                  GitHub
                </a>
              </>
            )}
          </div>
        </div>
        <div className="dv-radar-wrap dv-radar">
          <RadarAnim color={t.accent} />
        </div>
      </div>
    </section>
  );
}
