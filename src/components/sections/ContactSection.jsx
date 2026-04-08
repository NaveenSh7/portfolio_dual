import { useEffect, useState } from "react";
import FadeIn from "../common/FadeIn";

export default function ContactSection({ t }) {
  const [profileViews, setProfileViews] = useState(null);

  useEffect(() => {
    const hitCounter = async () => {
      try {
        const res = await fetch("https://api.countapi.xyz/hit/naveensh7-portfolio/profile-views");
        if (!res.ok) return;
        const data = await res.json();
        if (typeof data?.value === "number") {
          setProfileViews(data.value);
        }
      } catch {
        // Keep UI stable if the counter service is unavailable.
      }
    };

    hitCounter();
  }, []);

  return (
    <section id="contact" style={{ padding: "7rem 2rem", borderTop: `1px solid rgba(${t.accentRgb},0.1)` }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ fontFamily: t.fontDisplay, fontSize: "0.68rem", letterSpacing: "0.22em", color: t.accent, textTransform: "uppercase", marginBottom: "0.6rem" }}>Let Us Connect</div>
            <h2 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.01em" }}>Let Us Connect</h2>
            <p style={{ color: "#666", fontSize: "0.97rem", maxWidth: "500px", lineHeight: 1.7, marginTop: "0.75rem" }}>Ready to connect for collaborations, projects, or opportunities. Reach out through your preferred channel below.</p>
          </div>
        </FadeIn>

        <div className="dv-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: "5rem", alignItems: "start" }}>
          <FadeIn fromLeft>
            <div>
              {[["COMMS", "naveensharalayya@gmail.com"]].map(([label, value]) => (
                <div key={label} style={{ marginBottom: "1.75rem" }}>
                  <div style={{ fontFamily: t.fontDisplay, fontSize: "0.65rem", letterSpacing: "0.2em", color: t.accent, textTransform: "uppercase", marginBottom: "0.3rem" }}>{label}</div>
                  <div style={{ color: "#888", fontSize: "0.95rem" }}>{value}</div>
                </div>
              ))}
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{ fontFamily: t.fontDisplay, fontSize: "0.65rem", letterSpacing: "0.2em", color: t.accent, textTransform: "uppercase", marginBottom: "0.3rem" }}>PROFILE VIEWS</div>
                <div style={{ color: "#888", fontSize: "0.95rem" }}>
                  {profileViews === null ? "Loading..." : `Profile Views: ${profileViews.toLocaleString()}`}
                </div>
              </div>
              <div style={{ marginTop: "2.5rem" }}>
                <div style={{ fontFamily: t.fontDisplay, fontSize: "0.65rem", letterSpacing: "0.2em", color: t.accent, textTransform: "uppercase", marginBottom: "0.75rem" }}>SOCIAL UPLINK</div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {[
                    { label: "GitHub", href: "https://github.com/NaveenSh7" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/naveen-sh-a7594b323/" },
                    { label: "Instagram", href: "https://instagram.com/naveen._.s.h" },
                    { label: "Email", href: "mailto:naveensharalayya@gmail.com" },
                  ].map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="dv-social"
                      style={{ color: "#666", fontSize: "0.8rem", textDecoration: "none", border: "1px solid #222", padding: "0.4rem 1rem", borderRadius: "3px", transition: "color 0.2s, border-color 0.2s", fontFamily: t.fontDisplay, fontWeight: 700, letterSpacing: "0.08em" }}>
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn fromRight>
            <div style={{ background: t.card, border: `1px solid rgba(${t.accentRgb},0.25)`, borderRadius: "6px", padding: "2rem" }}>
              <div style={{ fontFamily: t.fontDisplay, fontSize: "1.1rem", fontWeight: 800, color: t.accent, marginBottom: "0.6rem", letterSpacing: "0.08em" }}>DIRECT CONTACT</div>
              <p style={{ color: "#777", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                Prefer email? Reach me directly and I will get back to you as soon as possible.
              </p>
              <a
                href="mailto:naveensharalayya@gmail.com"
                style={{ display: "inline-block", background: t.btnBg, color: t.btnText, border: "none", padding: "0.75rem 1.2rem", fontFamily: t.fontDisplay, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", borderRadius: "3px", textTransform: "uppercase", textDecoration: "none" }}
              >
                EMAIL NAVEEN
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
