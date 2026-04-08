import { useState } from "react";
import FadeIn from "../common/FadeIn";
import { gameShowcase } from "../../data/content";

export default function GameShowcaseSection({ t, onOpenGallery }) {
  const [hovered, setHovered] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const totalPages = Math.ceil(gameShowcase.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedGames = gameShowcase.slice(startIndex, startIndex + pageSize);

  return (
    <section id="game-showcase" style={{ padding: "7rem 2rem", borderTop: `1px solid rgba(${t.accentRgb},0.1)` }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "3rem" }}>
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
              Game Vault
            </div>
            <h2
              style={{
                fontFamily: t.fontDisplay,
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 800,
                letterSpacing: "0.02em",
                marginBottom: "0.9rem",
              }}
            >
              Games I have played for far
            </h2>
            <p style={{ color: "#777", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "560px" }}>
              Choose any title to open its gallery page.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "1rem",
          }}
        >
          {paginatedGames.map((game, i) => (
            <FadeIn key={game.id} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => onOpenGallery(game)}
                onMouseEnter={() => setHovered(game.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  borderRadius: "10px",
                  border: `1px solid rgba(${t.accentRgb},0.22)`,
                  cursor: "pointer",
                  overflow: "hidden",
                  textAlign: "left",
                  padding: "1rem",
                  boxSizing: "border-box",
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.18)), url(${game.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  boxShadow: hovered === game.id ? `0 0 26px rgba(${t.accentRgb},0.35)` : "none",
                  transform: hovered === game.id ? "translateY(-3px)" : "translateY(0)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    fontFamily: t.fontDisplay,
                    fontSize: "0.62rem",
                    letterSpacing: "0.13em",
                    color: t.accent,
                    marginBottom: "0.4rem",
                    marginTop: "auto",
                    textTransform: "uppercase",
                  }}
                >
                  {game.genre}
                </div>
                <div style={{ fontFamily: t.fontDisplay, fontSize: "1.05rem", fontWeight: 800, color: "#fff", letterSpacing: "0.05em" }}>
                  {game.name}
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        {totalPages > 1 && (
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem", marginTop: "1.8rem" }}>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                style={{
                  padding: "0.45rem 0.8rem",
                  borderRadius: "4px",
                  border: `1px solid rgba(${t.accentRgb},0.3)`,
                  background: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                  fontFamily: t.fontDisplay,
                  fontSize: "0.62rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Prev
              </button>

              <span style={{ fontFamily: t.fontDisplay, fontSize: "0.66rem", color: "#aaa", letterSpacing: "0.1em" }}>
                Page {currentPage} / {totalPages}
              </span>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                style={{
                  padding: "0.45rem 0.8rem",
                  borderRadius: "4px",
                  border: `1px solid rgba(${t.accentRgb},0.3)`,
                  background: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                  fontFamily: t.fontDisplay,
                  fontSize: "0.62rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Next
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
