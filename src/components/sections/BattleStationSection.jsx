import FadeIn from "../common/FadeIn";
import { topGameRatings } from "../../data/content";

export default function BattleStationSection({ t }) {
  return (
    <section id="rankings" style={{ padding: "7rem 2rem", borderTop: `1px solid rgba(${t.accentRgb},0.1)` }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3.5rem" }}>
            <div style={{ width: "4px", height: "1.4rem", background: t.accent, borderRadius: "2px" }} />
            <h2 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              My Top 7 Game Ratings
            </h2>
          </div>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {topGameRatings.map((rating, i) => (
            <FadeIn key={rating.num} delay={i * 0.05}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "#0c0c18",
                  border: "1px solid #1c1c30",
                  borderRadius: "6px",
                  padding: "0.85rem 1.25rem",
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `rgba(${t.accentRgb},0.4)`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1c1c30")}
              >
                <span style={{ fontFamily: t.fontDisplay, fontSize: "0.68rem", color: "#444", minWidth: "24px" }}>{rating.num}</span>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#1a1a2e", border: "1px solid #2a2a44", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", flexShrink: 0 }}>
                  AIM
                </div>
                <span style={{ fontFamily: t.fontDisplay, fontSize: "0.7rem", letterSpacing: "0.1em", color: "#ccc", flex: 1 }}>{rating.game}</span>
                <span style={{ fontFamily: t.fontDisplay, fontSize: "0.66rem", fontWeight: 700, color: t.accent, border: `1px solid rgba(${t.accentRgb},0.3)`, padding: "0.3rem 0.8rem", borderRadius: "3px", letterSpacing: "0.08em", background: `rgba(${t.accentRgb},0.05)` }}>
                  {rating.rating}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
