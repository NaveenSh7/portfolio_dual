import FadeIn from "../common/FadeIn";
import {
  skillMatrixLogos,
} from "../../data/content";
import {
  SiBootstrap,
  SiC,
  SiCloudinary,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGo,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const skillIcons = {
  AWS: FaAws,
  GCP: SiGooglecloud,
  Next: SiNextdotjs,
  React: SiReact,
  Node: SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  C: SiC,
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  Go: SiGo,
  Python: SiPython,
  TypeScript: SiTypescript,
  Cloudinary: SiCloudinary,
  Docker: SiDocker,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  Postman: SiPostman,
};

export default function SkillsSection({ t }) {
  const logoRail = [...skillMatrixLogos, ...skillMatrixLogos];
  const rows = [
    logoRail,
    [...logoRail.slice(5), ...logoRail.slice(0, 5)],
    [...logoRail.slice(9), ...logoRail.slice(0, 9)],
  ];

  return (
    <section id="skills" style={{ padding: "7rem 2rem", borderTop: `1px solid rgba(${t.accentRgb},0.1)` }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ fontFamily: t.fontDisplay, fontSize: "0.68rem", letterSpacing: "0.22em", color: t.accent, textTransform: "uppercase", marginBottom: "0.6rem" }}>Skill Matrix</div>
            <h2 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.01em" }}>Skill matrix</h2>
          </div>
        </FadeIn>
        <div className="dv-skill-rows">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="dv-skill-marquee">
              <div className={`dv-skill-track ${rowIdx % 2 === 1 ? "dv-skill-track-reverse" : ""} dv-skill-track-${rowIdx + 1}`}>
                {row.map((logo, i) => {
                  const Icon = skillIcons[logo.name];
                  if (!Icon) {
                    return null;
                  }
                  return (
                    <div key={`${logo.name}-${rowIdx}-${i}`} className="dv-skill-card" style={{ background: t.card, border: `1px solid rgba(${t.accentRgb},0.17)` }}>
                      <Icon size={56} color={t.accent} aria-label={logo.name} title={logo.name} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
