import { useState } from "react";
import FadeIn from "../common/FadeIn";
import { projects } from "../../data/content";

export default function ProjectsSection({ t }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      style={{ padding: "7rem 2rem", borderTop: `1px solid rgba(${t.accentRgb},0.1)` }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "4rem" }}>
            <div
              style={{
                fontFamily: t.fontDisplay,
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                color: t.accent,
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              Featured Work
            </div>
            <h2
              style={{
                fontFamily: t.fontDisplay,
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 800,
                letterSpacing: "-0.01em",
              }}
            >
              Projects
            </h2>
            <p
              style={{
                color: "#666",
                fontSize: "0.97rem",
                maxWidth: "480px",
                lineHeight: 1.7,
                marginTop: "0.75rem",
              }}
            >
              A selection of engineering projects and digital experiments built for impact.
            </p>
          </div>
        </FadeIn>

        <div
          className="dv-proj-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1px",
            background: `rgba(${t.accentRgb},0.08)`,
            border: `1px solid rgba(${t.accentRgb},0.08)`,
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.06}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? t.card : "#050505",
                  padding: "2rem 2.2rem",
                  transition: "background 0.25s",
                  cursor: "pointer",
                  borderRight: `1px solid rgba(${t.accentRgb},0.08)`,
                  borderBottom: `1px solid rgba(${t.accentRgb},0.08)`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: t.accent,
                    opacity: hovered === i ? 1 : 0,
                    transition: "opacity 0.25s",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.4rem",
                  }}
                >
                  <span style={{ fontSize: "1rem", opacity: hovered === i ? 1 : 0.3, transition: "opacity 0.2s" }}>
                    {"->"}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: t.fontDisplay,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: hovered === i ? t.accent : "#fff",
                    transition: "color 0.25s",
                  }}
                >
                  {project.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.72rem",
                    color: t.accent,
                    opacity: 0.6,
                    marginBottom: "0.85rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {project.tag}
                </div>
                <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.65 }}>{project.desc}</p>
                <button
                  type="button"
                  onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                  style={{
                    marginTop: "1.15rem",
                    padding: "0.7rem 1rem",
                    borderRadius: "999px",
                    border: `1px solid rgba(${t.accentRgb},0.28)`,
                    background: hovered === i ? `rgba(${t.accentRgb},0.12)` : "transparent",
                    color: hovered === i ? t.accent : "#fff",
                    fontFamily: t.fontDisplay,
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Open GitHub
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
