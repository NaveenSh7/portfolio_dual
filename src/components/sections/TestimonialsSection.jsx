import FadeIn from "../common/FadeIn";
import { testimonials } from "../../data/content";

export default function TestimonialsSection({ t, testimonialIdx, setTestimonialIdx }) {
  return (
    <section id="impact" style={{ padding: "7rem 2rem", borderTop: `1px solid rgba(${t.accentRgb},0.1)`, textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: t.fontDisplay, fontSize: "0.68rem", letterSpacing: "0.22em", color: t.accent, textTransform: "uppercase", marginBottom: "0.6rem" }}>Proven Impact</div>
          <h2 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: "0.6rem" }}>What They Are Saying</h2>
          <p style={{ color: "#666", fontSize: "0.97rem", lineHeight: 1.7, marginBottom: "3rem" }}>Collaborations and feedback from industry leaders and the global gaming community.</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{ background: t.card, border: `1px solid rgba(${t.accentRgb},0.25)`, borderRadius: "8px", padding: "3rem 3.5rem", marginBottom: "1.75rem", position: "relative" }}>
            <div style={{ fontFamily: t.fontDisplay, fontSize: "4rem", color: t.accent, opacity: 0.12, position: "absolute", top: "1rem", left: "2rem", lineHeight: 1 }}>
              "
            </div>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#ccc", marginBottom: "1.75rem", fontStyle: "italic", position: "relative" }}>
              "{testimonials[testimonialIdx].quote}"
            </p>
            <div style={{ fontFamily: t.fontDisplay, fontWeight: 700, fontSize: "0.9rem", color: t.accent }}>{testimonials[testimonialIdx].name}</div>
            <div style={{ color: "#666", fontSize: "0.82rem", marginTop: "0.25rem" }}>{testimonials[testimonialIdx].role}</div>
          </div>
          <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center" }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTestimonialIdx(i)}
                style={{ width: i === testimonialIdx ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === testimonialIdx ? t.accent : "#333", cursor: "pointer", border: "none", transition: "all 0.3s" }} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
