export default function Footer({ t }) {
  return (
    <div style={{ borderTop: `1px solid rgba(${t.accentRgb},0.12)` }}>
      <div style={{ padding: "2.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1100px", margin: "0 auto", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ fontFamily: t.fontDisplay, fontWeight: 800, fontSize: "1rem", color: t.accent }}>PORTFOLIO</div>
        <div style={{ color: "#333", fontSize: "0.82rem" }}>A dual-persona digital space bridging engineering and competitive gaming.</div>
        <div style={{ color: "#333", fontSize: "0.82rem" }}>Copyright 2026 Portfolio. System integrity secured.</div>
      </div>
    </div>
  );
}
