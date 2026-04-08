import FadeIn from "../common/FadeIn";

export default function GameGalleryPage({ t, game, onBack }) {
  return (
    <section style={{ minHeight: "100vh", padding: "6.5rem 2rem 3rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <FadeIn>
          <button
            type="button"
            onClick={onBack}
            style={{
              marginBottom: "1.2rem",
              background: "transparent",
              color: t.accent,
              border: `1px solid rgba(${t.accentRgb},0.35)`,
              borderRadius: "4px",
              padding: "0.5rem 0.95rem",
              fontFamily: t.fontDisplay,
              fontSize: "0.66rem",
              letterSpacing: "0.12em",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            Back To Games
          </button>
          <h2 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "0.55rem" }}>
            {game.name} Gallery
          </h2>
          <p style={{ color: "#777", marginBottom: "2rem" }}>{game.genre}</p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "0.9rem",
          }}
        >
          {game.gallery.map((image, i) => (
            <FadeIn key={`${game.id}-${i}`} delay={i * 0.04}>
              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: `1px solid rgba(${t.accentRgb},0.2)`,
                  background: "#060606",
                }}
              >
                <img
                  src={image}
                  alt={`${game.name} screenshot ${i + 1}`}
                  style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
