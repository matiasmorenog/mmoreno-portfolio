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
        <linearGradient
          id="rochaBg"
          x1="0"
          y1="0"
          x2="800"
          y2="720"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEF3F1" />
          <stop offset="1" stopColor="#F4F6F5" />
        </linearGradient>
        <linearGradient id="rochaPanel" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F7FAF9" />
        </linearGradient>
      </defs>

      <rect width="800" height="720" fill="url(#rochaBg)" />

      <rect width="800" height="52" fill="#2F6B5E" />
      <rect x="24" y="16" width="120" height="20" rx="5" fill="#EEF3F1" opacity="0.95" />
      <rect x="160" y="16" width="72" height="20" rx="5" fill="#3F7F71" />
      <rect x="248" y="16" width="64" height="20" rx="5" fill="#3F7F71" />
      <rect x="648" y="12" width="128" height="28" rx="8" fill="#EEF3F1" opacity="0.92" />

      <rect
        x="24"
        y="72"
        width="176"
        height="624"
        rx="10"
        fill="url(#rochaPanel)"
        stroke="#DCE5E1"
      />
      <rect x="40" y="92" width="120" height="14" rx="4" fill="#2F6B5E" />
      <rect x="40" y="122" width="144" height="28" rx="7" fill="#2F6B5E" />
      <rect x="40" y="166" width="144" height="28" rx="7" fill="#E7EEEC" />
      <rect x="40" y="210" width="144" height="28" rx="7" fill="#E7EEEC" />
      <rect x="40" y="254" width="144" height="28" rx="7" fill="#E7EEEC" />
      <rect x="40" y="650" width="96" height="12" rx="3" fill="#A8B8B2" />
      <rect x="40" y="670" width="120" height="10" rx="3" fill="#C5D1CC" />

      <rect
        x="216"
        y="72"
        width="560"
        height="56"
        rx="10"
        fill="url(#rochaPanel)"
        stroke="#DCE5E1"
      />
      <rect x="232" y="88" width="180" height="14" rx="4" fill="#5C726B" />
      <rect x="232" y="108" width="120" height="10" rx="3" fill="#A8B8B2" />
      <rect x="568" y="86" width="96" height="28" rx="7" fill="#E7EEEC" />
      <rect x="676" y="86" width="84" height="28" rx="7" fill="#2F6B5E" />

      <rect x="216" y="144" width="560" height="36" rx="8" fill="#E7EEEC" />
      <rect x="232" y="154" width="72" height="16" rx="4" fill="#7A9089" />
      <rect x="340" y="154" width="160" height="16" rx="4" fill="#7A9089" />
      <rect x="540" y="154" width="64" height="16" rx="4" fill="#7A9089" />
      <rect x="640" y="154" width="64" height="16" rx="4" fill="#7A9089" />
      <rect x="728" y="154" width="32" height="16" rx="4" fill="#7A9089" />

      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          <rect
            x="216"
            y={196 + row * 72}
            width="560"
            height="60"
            rx="8"
            fill={row % 2 === 0 ? "#FFFFFF" : "#F7FAF9"}
            stroke="#DCE5E1"
          />
          <rect x="232" y={214 + row * 72} width="48" height="12" rx="3" fill="#C5D1CC" />
          <rect
            x="296"
            y={210 + row * 72}
            width="180"
            height="16"
            rx="4"
            fill="#A8B8B2"
          />
          <rect x="520" y={210 + row * 72} width="48" height="16" rx="4" fill="#DCE5E1" />
          <rect x="588" y={210 + row * 72} width="56" height="16" rx="4" fill="#DCE5E1" />
          <rect
            x="668"
            y={206 + row * 72}
            width="84"
            height="24"
            rx="6"
            fill="#2F6B5E"
            opacity={row < 3 ? 0.9 : 0.45}
          />
        </g>
      ))}

      <rect
        x="216"
        y="568"
        width="340"
        height="48"
        rx="8"
        fill="#FFFFFF"
        stroke="#DCE5E1"
      />
      <rect x="232" y="584" width="180" height="16" rx="4" fill="#A8B8B2" />

      <rect x="572" y="568" width="204" height="48" rx="8" fill="#2F6B5E" />
      <rect x="612" y="584" width="124" height="16" rx="4" fill="#EEF3F1" />

      <rect
        x="216"
        y="632"
        width="176"
        height="64"
        rx="8"
        fill="#FFFFFF"
        stroke="#DCE5E1"
      />
      <rect x="232" y="648" width="96" height="12" rx="3" fill="#A8B8B2" />
      <rect x="232" y="668" width="120" height="10" rx="3" fill="#C5D1CC" />

      <rect
        x="408"
        y="632"
        width="176"
        height="64"
        rx="8"
        fill="#FFFFFF"
        stroke="#DCE5E1"
      />
      <rect x="424" y="648" width="88" height="12" rx="3" fill="#A8B8B2" />
      <rect x="424" y="668" width="112" height="10" rx="3" fill="#C5D1CC" />

      <rect
        x="600"
        y="632"
        width="176"
        height="64"
        rx="8"
        fill="#F7FAF9"
        stroke="#DCE5E1"
      />
      <rect x="616" y="650" width="96" height="12" rx="3" fill="#2F6B5E" />
      <rect x="616" y="670" width="128" height="10" rx="3" fill="#7A9089" />
    </svg>
  );
}
