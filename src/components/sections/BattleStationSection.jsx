import FadeIn from "../common/FadeIn";
import { podium, rankList } from "../../data/content";

export default function BattleStationSection({ t }) {
  return (
    <section id="rankings" style={{ padding: "7rem 2rem", borderTop: `1px solid rgba(${t.accentRgb},0.1)` }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3.5rem" }}>
            <div style={{ width: "4px", height: "1.4rem", background: t.accent, borderRadius: "2px" }} />
            <h2 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Battle Station Rankings
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            {podium.map((item) => {
              const isFirst = item.rank === 1;
              const medal = item.rank === 1 ? "#1" : item.rank === 2 ? "#2" : "#3";

              return (
                <div key={item.rank} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: isFirst ? "0 0 200px" : "0 0 160px" }}>
                  <div style={{ fontSize: isFirst ? "1rem" : "0.9rem", marginBottom: "0.4rem", color: item.color }}>{medal}</div>
                  <div style={{ width: isFirst ? "80px" : "64px", height: isFirst ? "80px" : "64px", borderRadius: "50%", border: `2px solid ${item.color}`, background: `radial-gradient(circle at 40% 35%, ${item.color}33, #000)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem", boxShadow: `0 0 20px ${item.color}44`, fontSize: isFirst ? "1rem" : "0.85rem", fontFamily: t.fontDisplay }}>
                    {item.icon}
                  </div>
                  <div style={{ background: "#0f0f18", border: `1px solid ${item.color}55`, borderRadius: "6px", padding: isFirst ? "1.2rem 1.5rem" : "1rem 1.2rem", textAlign: "center", width: "100%", boxShadow: isFirst ? `0 0 30px ${item.color}22` : "none" }}>
                    <div style={{ fontFamily: t.fontDisplay, fontSize: "0.56rem", color: "#555", letterSpacing: "0.12em", marginBottom: "0.3rem" }}>{item.game}</div>
                    <div style={{ fontFamily: t.fontDisplay, fontWeight: 800, fontSize: isFirst ? "1.1rem" : "0.9rem", color: item.color, letterSpacing: "0.08em" }}>{item.rankName}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {rankList.map((rank, i) => (
            <FadeIn key={rank.num} delay={i * 0.05}>
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
                <span style={{ fontFamily: t.fontDisplay, fontSize: "0.68rem", color: "#444", minWidth: "24px" }}>{rank.num}</span>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#1a1a2e", border: "1px solid #2a2a44", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", flexShrink: 0 }}>
                  AIM
                </div>
                <span style={{ fontFamily: t.fontDisplay, fontSize: "0.7rem", letterSpacing: "0.1em", color: "#ccc", flex: 1 }}>{rank.game}</span>
                <span style={{ fontFamily: t.fontDisplay, fontSize: "0.66rem", fontWeight: 700, color: t.accent, border: `1px solid rgba(${t.accentRgb},0.3)`, padding: "0.3rem 0.8rem", borderRadius: "3px", letterSpacing: "0.08em", background: `rgba(${t.accentRgb},0.05)` }}>
                  {rank.rank}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
