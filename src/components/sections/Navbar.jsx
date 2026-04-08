import { GAMER, PROFESSIONAL } from "../../data/content";

export default function Navbar({ t, mode, setMode, scrolled }) {
  const isGamer = mode === GAMER;

  return (
    <nav
      className="dv-navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
        height: "60px",
        background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
        borderBottom: scrolled ? `1px solid rgba(${t.accentRgb},0.15)` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.35s",
      }}
    >
      <div
        className="dv-navbar-brand"
        style={{ fontFamily: t.fontDisplay, fontWeight: 800, fontSize: "1.1rem", color: "#fff", cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Portfolio
      </div>

      <div className="dv-mode-wrap" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span
          className="dv-mode-label"
          style={{
            fontFamily: t.fontDisplay,
            fontSize: "0.65rem",
            color: !isGamer ? t.accent : "#444",
            letterSpacing: "0.1em",
            transition: "color 0.3s",
          }}
        >
          PROFESSIONAL
        </span>
        <div
          className="dv-mode-toggle"
          onClick={() => setMode((current) => (current === PROFESSIONAL ? GAMER : PROFESSIONAL))}
          style={{
            width: "44px",
            height: "24px",
            borderRadius: "12px",
            background: "#1a1a1a",
            border: `1px solid rgba(${t.accentRgb},0.4)`,
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            className="dv-mode-knob"
            style={{
              position: "absolute",
              top: "3px",
              left: isGamer ? "23px" : "3px",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: t.accent,
              transition: "left 0.3s, background 0.4s",
              boxShadow: `0 0 8px ${t.accent}`,
            }}
          />
        </div>
        <span
          className="dv-mode-label"
          style={{
            fontFamily: t.fontDisplay,
            fontSize: "0.65rem",
            color: isGamer ? t.accent : "#444",
            letterSpacing: "0.1em",
            transition: "color 0.3s",
          }}
        >
          GAMER
        </span>
      </div>
    </nav>
  );
}
