import FadeIn from "../common/FadeIn";
import { timeline } from "../../data/content";

function Timeline({ t }) {
  const tlColor = t.timelineAccent;

  return (
    <div style={{ position: "relative", maxWidth: "860px", margin: "0 auto" }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "2px",
          background: `rgba(${t.accentRgb === "255,0,85" ? "255,0,85" : "0,229,255"},0.5)`,
          boxShadow: `0 0 18px rgba(${t.accentRgb === "255,0,85" ? "255,0,85" : "0,229,255"},0.7)`,
          transform: "translateX(-50%)",
        }}
      />

      {timeline.map((item, i) => {
        const isLeft = i % 2 === 0;
        const isHighlightedTitle = ["Deloitte USI", "Shourya Foundation", "Shourya Foundationa", "EESA Web Head", "IIT Indore(joining)"].includes(item.title);

        return (
          <FadeIn key={item.year} delay={i * 0.12} fromLeft={isLeft} fromRight={!isLeft}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 40px 1fr",
                alignItems: "flex-start",
                marginBottom: "5rem",
                position: "relative",
              }}
            >
              <div style={{ textAlign: "right", paddingRight: "2.5rem", paddingTop: "0.1rem" }}>
                {isLeft && (
                  <>
                    <div
                      style={{
                        fontFamily: t.fontDisplay,
                        fontSize: "clamp(2.8rem,5vw,4rem)",
                        fontWeight: 900,
                        color: tlColor,
                        lineHeight: 1,
                        marginBottom: "0.4rem",
                        textShadow: `0 0 30px ${tlColor}66`,
                      }}
                    >
                      {item.year}
                    </div>
                    <div
                      style={{
                        fontFamily: t.fontDisplay,
                        fontSize: isHighlightedTitle ? "1.02rem" : "0.85rem",
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "0.65rem",
                        textShadow: "none",
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.9rem",
                        color: "#a8a8a8",
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                        lineHeight: 1.75,
                        maxWidth: "320px",
                        marginLeft: "auto",
                      }}
                    >
                      {item.desc}
                    </p>
                  </>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.6rem" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: tlColor,
                    flexShrink: 0,
                    boxShadow: `0 0 14px ${tlColor}99`,
                  }}
                />
              </div>

              <div style={{ paddingLeft: "2.5rem", paddingTop: "0.1rem" }}>
                {!isLeft && (
                  <>
                    <div
                      style={{
                        fontFamily: t.fontDisplay,
                        fontSize: "clamp(2.8rem,5vw,4rem)",
                        fontWeight: 900,
                        color: tlColor,
                        lineHeight: 1,
                        marginBottom: "0.4rem",
                        textShadow: `0 0 30px ${tlColor}66`,
                      }}
                    >
                      {item.year}
                    </div>
                    <div
                      style={{
                        fontFamily: t.fontDisplay,
                        fontSize: isHighlightedTitle ? "1.02rem" : "0.85rem",
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "0.65rem",
                        textShadow: "none",
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.9rem",
                        color: "#a8a8a8",
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                        lineHeight: 1.75,
                        maxWidth: "320px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </>
                )}
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

export default function TimelineSection({ t, isGamer }) {
  return (
    <section id="career" style={{ padding: "7rem 2rem" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div
            style={{
              fontFamily: t.fontDisplay,
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              color: t.accent,
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Career Path
          </div>
          <h2
            style={{
              fontFamily: t.fontDisplay,
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800,
              letterSpacing: isGamer ? "0.04em" : "-0.01em",
            }}
          >
            The Career Path
          </h2>
          <p style={{ color: "#555", fontSize: "0.95rem", marginTop: "0.75rem" }}>
            A technical chronicle of professional milestones and architectural evolution.
          </p>
        </div>
      </FadeIn>
      <Timeline t={t} />
    </section>
  );
}
