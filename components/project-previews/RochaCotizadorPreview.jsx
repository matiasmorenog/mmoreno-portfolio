export default function RochaCotizadorPreview({ style, ...props }) {
  return (
    <svg
      viewBox="0 0 800 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={props["aria-label"] ? undefined : true}
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block", ...style }}
      {...props}
    >
      <defs>
        <linearGradient id="rochaBg" x1="0" y1="0" x2="800" y2="720" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1F2E" />
          <stop offset="1" stopColor="#232B3D" />
        </linearGradient>
        <linearGradient id="rochaPanel" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#2C3548" />
          <stop offset="1" stopColor="#242C3C" />
        </linearGradient>
      </defs>

      <rect width="800" height="720" fill="url(#rochaBg)" />

      <rect width="800" height="52" fill="#1E2535" />
      <rect x="24" y="16" width="120" height="20" rx="5" fill="#C45C26" />
      <rect x="160" y="16" width="72" height="20" rx="5" fill="#354055" />
      <rect x="248" y="16" width="64" height="20" rx="5" fill="#354055" />
      <rect x="648" y="12" width="128" height="28" rx="8" fill="#C45C26" opacity="0.9" />

      <rect x="24" y="72" width="752" height="56" rx="10" fill="url(#rochaPanel)" />
      <rect x="40" y="88" width="180" height="14" rx="4" fill="#4A5568" />
      <rect x="40" y="108" width="120" height="10" rx="3" fill="#3A4558" />
      <rect x="560" y="86" width="96" height="28" rx="7" fill="#354055" />
      <rect x="672" y="86" width="88" height="28" rx="7" fill="#C45C26" />

      <rect x="24" y="148" width="752" height="36" rx="8" fill="#2A3345" />
      <rect x="40" y="158" width="80" height="16" rx="4" fill="#4A5568" />
      <rect x="180" y="158" width="200" height="16" rx="4" fill="#4A5568" />
      <rect x="420" y="158" width="72" height="16" rx="4" fill="#4A5568" />
      <rect x="540" y="158" width="72" height="16" rx="4" fill="#4A5568" />
      <rect x="660" y="158" width="88" height="16" rx="4" fill="#4A5568" />

      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          <rect
            x="24"
            y={200 + row * 72}
            width="752"
            height="60"
            rx="8"
            fill={row % 2 === 0 ? "#242C3C" : "#283142"}
          />
          <rect x="40" y={218 + row * 72} width="56" height="12" rx="3" fill="#3A4558" />
          <rect x="120" y={214 + row * 72} width="220" height="16" rx="4" fill="#4A5568" />
          <rect x="420" y={214 + row * 72} width="48" height="16" rx="4" fill="#354055" />
          <rect x="500" y={214 + row * 72} width="64" height="16" rx="4" fill="#354055" />
          <rect x="600" y={210 + row * 72} width="72" height="24" rx="6" fill="#C45C26" opacity={row < 3 ? 0.85 : 0.45} />
          <rect x="688" y={218 + row * 72} width="72" height="12" rx="3" fill="#5A6578" />
        </g>
      ))}

      <rect x="24" y="572" width="480" height="48" rx="8" fill="#2A3345" />
      <rect x="40" y="588" width="200" height="16" rx="4" fill="#4A5568" />

      <rect x="520" y="572" width="256" height="48" rx="8" fill="#C45C26" />
      <rect x="580" y="588" width="136" height="16" rx="4" fill="#F4D5C4" />

      <rect x="24" y="640" width="160" height="56" rx="8" fill="#2A3345" />
      <rect x="40" y="656" width="96" height="12" rx="3" fill="#5A6578" />
      <rect x="40" y="674" width="120" height="10" rx="3" fill="#4A5568" />

      <rect x="204" y="640" width="160" height="56" rx="8" fill="#2A3345" />
      <rect x="220" y="656" width="88" height="12" rx="3" fill="#5A6578" />
      <rect x="220" y="674" width="104" height="10" rx="3" fill="#4A5568" />

      <rect x="384" y="640" width="392" height="56" rx="8" fill="#283142" />
      <rect x="400" y="658" width="280" height="12" rx="3" fill="#4A5568" />
      <rect x="400" y="676" width="200" height="10" rx="3" fill="#3A4558" />
    </svg>
  );
}
