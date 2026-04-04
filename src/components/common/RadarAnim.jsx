export default function RadarAnim({ color }) {
  return (
    <div style={{ width: "420px", height: "420px", flexShrink: 0 }}>
      <svg width="420" height="420" viewBox="0 0 420 420" fill="none">
        <circle
          cx="210"
          cy="210"
          r="200"
          stroke={color}
          strokeWidth="0.5"
          strokeDasharray="4 6"
          opacity="0.25"
          style={{ animation: "radar-ping2 3s ease-in-out .5s infinite" }}
        />
        <circle
          cx="210"
          cy="210"
          r="155"
          stroke={color}
          strokeWidth="0.8"
          opacity="0.2"
          style={{ animation: "radar-ping1 3s ease-in-out infinite" }}
        />
        <circle cx="210" cy="210" r="105" stroke={color} strokeWidth="1" opacity="0.3" />
        <circle cx="210" cy="210" r="60" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <circle cx="210" cy="210" r="30" fill={color} opacity="0.08" />
        <line x1="210" y1="10" x2="210" y2="410" stroke={color} strokeWidth="0.4" opacity="0.12" />
        <line x1="10" y1="210" x2="410" y2="210" stroke={color} strokeWidth="0.4" opacity="0.12" />
        <g style={{ animation: "radar-spin 4s linear infinite", transformOrigin: "210px 210px" }}>
          <line x1="210" y1="210" x2="210" y2="15" stroke={color} strokeWidth="1.5" opacity="0.6" />
          <path d="M210 210 L210 15 A195 195 0 0 1 370 140 Z" fill={color} opacity="0.04" />
        </g>
        <path d="M320 60 L360 60 L360 100" stroke={color} strokeWidth="1.5" opacity="0.6" fill="none" />
        <path d="M60 320 L60 360 L100 360" stroke={color} strokeWidth="1.5" opacity="0.6" fill="none" />
        <circle cx="210" cy="210" r="4" fill={color} opacity="0.9" />
        <circle
          cx="298"
          cy="145"
          r="4"
          fill={color}
          opacity="0.8"
          style={{ animation: "radar-blink 1.5s ease-in-out infinite" }}
        />
        <circle
          cx="145"
          cy="290"
          r="3"
          fill={color}
          opacity="0.5"
          style={{ animation: "radar-blink 1.5s ease-in-out .5s infinite" }}
        />
      </svg>
    </div>
  );
}
