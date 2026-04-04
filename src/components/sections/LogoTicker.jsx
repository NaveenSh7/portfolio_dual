import { logos } from "../../data/content";

export default function LogoTicker({ t }) {
  return (
    <div style={{ overflow: "hidden", borderTop: `1px solid rgba(${t.accentRgb},0.1)`, borderBottom: `1px solid rgba(${t.accentRgb},0.1)`, padding: "1.5rem 0" }}>
      <div style={{ display: "flex", gap: "4rem", alignItems: "center", animation: "scroll-logos 24s linear infinite", whiteSpace: "nowrap" }}>
        {[...logos, ...logos].map((logo, i) => (
          <span key={`${logo}-${i}`} style={{ fontFamily: t.fontDisplay, fontSize: "0.75rem", letterSpacing: "0.2em", color: "#333", fontWeight: 700, textTransform: "uppercase", flexShrink: 0 }}>
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
