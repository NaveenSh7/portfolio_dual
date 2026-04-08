import FadeIn from "../common/FadeIn";

export default function ConnectAndPlaySection({ t }) {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    color: ["#ff0055", "#c8b8ff", "#00e5ff", "#ffd700", "#ff6b35"][i % 5],
    shape: i % 3 === 0 ? "50%" : i % 3 === 1 ? "2px" : "99px",
    delay: (Math.random() * 4).toFixed(1),
    dur: (3 + Math.random() * 4).toFixed(1),
  }));

  return (
    <section id="connect-play" style={{ position: "relative", overflow: "hidden", padding: "7rem 2rem", background: "linear-gradient(135deg, #1a0015 0%, #000 40%, #003830 100%)", borderTop: `1px solid rgba(${t.accentRgb},0.1)` }}>
      {particles.map((particle, i) => (
        <div key={i} style={{ position: "absolute", left: `${particle.x}%`, top: `${particle.y}%`, width: particle.shape === "99px" ? `${particle.size * 2.5}px` : `${particle.size}px`, height: `${particle.size}px`, borderRadius: particle.shape, background: particle.color, opacity: 0.55, animation: `floatParticle ${particle.dur}s ease-in-out ${particle.delay}s infinite`, pointerEvents: "none" }} />
      ))}

      <div style={{ position: "relative", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontFamily: t.fontDisplay, fontWeight: 900, fontSize: "clamp(3rem,8vw,6rem)", lineHeight: 1, marginBottom: "3.5rem", letterSpacing: "0.04em" }}>
            <span style={{ color: "#ff6b8a" }}>CONNECT</span>
            <br />
            <span style={{ color: "#fff" }}>& </span>
            <span style={{ color: "#00e5ff" }}>PLAY</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <a href="https://steamcommunity.com/profiles/76561199643168285" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(0,0,0,0.5)", border: "2px solid #ff0055", padding: "1rem 2.5rem", borderRadius: "4px", textDecoration: "none", fontFamily: t.fontDisplay, fontWeight: 800, fontSize: "1rem", color: "#c8b8ff", letterSpacing: "0.18em", backdropFilter: "blur(8px)", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 0 20px rgba(255,0,85,0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(255,0,85,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(255,0,85,0.3)"; }}>
              STEAM
            </a>
          </div>
          <div style={{ textAlign: "center", color: "#9aa", fontSize: "0.82rem", marginTop: "-0.7rem", marginBottom: "1rem", letterSpacing: "0.03em" }}>
            captnjacksparrow07 | Steam ID: 76561199643168285
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { name: "YOUTUBE", href: "https://www.youtube.com/@naveengamingyt1834", border: "#00e5ff", glow: "rgba(0,229,255,0.3)" },
              { name: "DISCORD", href: "https://discord.com/users/naveen07_", border: "#ffd700", glow: "rgba(255,215,0,0.3)" },
            ].map((service) => (
              <a key={service.name} href={service.href} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(0,0,0,0.5)", border: `2px solid ${service.border}`, padding: "0.9rem 2rem", borderRadius: "4px", textDecoration: "none", fontFamily: t.fontDisplay, fontWeight: 800, fontSize: "0.9rem", color: service.border, letterSpacing: "0.16em", backdropFilter: "blur(8px)", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: `0 0 16px ${service.glow}` }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.boxShadow = `0 0 36px ${service.glow}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 0 16px ${service.glow}`; }}>
                {service.name}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
