import FadeIn from "../common/FadeIn";

export default function ContactSection({ t, formData, setFormData, submitted, setSubmitted }) {
  const inputStyle = {
    background: t.card,
    border: `1px solid ${t.border}`,
    color: t.text,
    padding: "0.8rem 1rem",
    borderRadius: "4px",
    fontSize: "0.9rem",
    fontFamily: t.fontBody,
    outline: "none",
    width: "100%",
  };

  return (
    <section id="contact" style={{ padding: "7rem 2rem", borderTop: `1px solid rgba(${t.accentRgb},0.1)` }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ fontFamily: t.fontDisplay, fontSize: "0.68rem", letterSpacing: "0.22em", color: t.accent, textTransform: "uppercase", marginBottom: "0.6rem" }}>Let Us Build</div>
            <h2 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.01em" }}>Let Us Build</h2>
            <p style={{ color: "#666", fontSize: "0.97rem", maxWidth: "500px", lineHeight: 1.7, marginTop: "0.75rem" }}>Ready to bridge the gap between high-end engineering and immersive gaming experiences. Let us create something legendary.</p>
          </div>
        </FadeIn>

        <div className="dv-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: "5rem", alignItems: "start" }}>
          <FadeIn fromLeft>
            <div>
              {[["COMMS", "hello@portfolio.io"], ["LOCATION", "Digital Frontier / Global"], ["PHONE", "+1 (555) 000-PORT"]].map(([label, value]) => (
                <div key={label} style={{ marginBottom: "1.75rem" }}>
                  <div style={{ fontFamily: t.fontDisplay, fontSize: "0.65rem", letterSpacing: "0.2em", color: t.accent, textTransform: "uppercase", marginBottom: "0.3rem" }}>{label}</div>
                  <div style={{ color: "#888", fontSize: "0.95rem" }}>{value}</div>
                </div>
              ))}
              <div style={{ marginTop: "2.5rem" }}>
                <div style={{ fontFamily: t.fontDisplay, fontSize: "0.65rem", letterSpacing: "0.2em", color: t.accent, textTransform: "uppercase", marginBottom: "0.75rem" }}>SOCIAL UPLINK</div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                    <a key={social} href="#" className="dv-social"
                      style={{ color: "#666", fontSize: "0.8rem", textDecoration: "none", border: "1px solid #222", padding: "0.4rem 1rem", borderRadius: "3px", transition: "color 0.2s, border-color 0.2s", fontFamily: t.fontDisplay, fontWeight: 700, letterSpacing: "0.08em" }}>
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn fromRight>
            {submitted ? (
              <div style={{ background: t.card, border: `1px solid ${t.accent}`, borderRadius: "6px", padding: "3rem", textAlign: "center" }}>
                <div style={{ fontFamily: t.fontDisplay, fontSize: "1.4rem", fontWeight: 800, color: t.accent, marginBottom: "0.75rem" }}>CONNECTION ESTABLISHED</div>
                <p style={{ color: "#777" }}>Message received. I typically respond within one business cycle.</p>
              </div>
            ) : (
              <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                {[ ["text", "Operator Name", "name"], ["email", "Email Address", "email"], ["tel", "Comms Number (Optional)", "phone"] ].map(([type, placeholder, field]) => (
                  <input
                    key={field}
                    type={type}
                    placeholder={placeholder}
                    required={field !== "phone"}
                    value={formData[field]}
                    onChange={(e) => setFormData((current) => ({ ...current, [field]: e.target.value }))}
                    style={inputStyle}
                  />
                ))}
                <select required value={formData.type} onChange={(e) => setFormData((current) => ({ ...current, type: e.target.value }))} style={inputStyle}>
                  <option value="">Select Objective</option>
                  {["Professional Inquiry", "Project Collaboration", "Mentorship Request", "Other / Misc"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <textarea placeholder="Briefing Data - define the scope of connection..." required value={formData.message} onChange={(e) => setFormData((current) => ({ ...current, message: e.target.value }))} style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }} />
                <button type="submit" className="dv-submit"
                  style={{ background: t.btnBg, color: t.btnText, border: "none", padding: "0.9rem 2.2rem", fontFamily: t.fontDisplay, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.16em", borderRadius: "3px", cursor: "pointer", textTransform: "uppercase", alignSelf: "flex-start", transition: "transform 0.2s", boxShadow: `0 0 20px rgba(${t.accentRgb},0.3)` }}>
                  ESTABLISH CONNECTION
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
