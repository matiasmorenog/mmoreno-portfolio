export default function NexusApparelPreview({ style, ...props }) {
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
        <linearGradient id="nexusApparelBg" x1="0" y1="0" x2="800" y2="720" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0D1B2A" />
          <stop offset="1" stopColor="#152535" />
        </linearGradient>
        <linearGradient id="nexusApparelHero" x1="0" y1="56" x2="800" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#243B55" />
          <stop offset="1" stopColor="#2E4A62" />
        </linearGradient>
        <linearGradient id="nexusApparelProduct" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#4A6D8C" />
          <stop offset="1" stopColor="#2E4A62" />
        </linearGradient>
        <linearGradient id="nexusApparelShoe" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#3C5A76" />
          <stop offset="1" stopColor="#243B55" />
        </linearGradient>
      </defs>

      <rect width="800" height="720" fill="url(#nexusApparelBg)" />

      <rect width="800" height="48" fill="#1B263B" />
      <rect x="20" y="14" width="96" height="20" rx="5" fill="#3C5A76" />
      <rect x="140" y="14" width="48" height="20" rx="5" fill="#2A485F" />
      <rect x="200" y="14" width="52" height="20" rx="5" fill="#2A485F" />
      <rect x="264" y="14" width="40" height="20" rx="5" fill="#7DE2DB" />
      <rect x="560" y="12" width="220" height="24" rx="7" fill="#22384E" />
      <rect x="708" y="10" width="72" height="28" rx="8" fill="#7DE2DB" />

      <rect y="48" width="800" height="128" fill="url(#nexusApparelHero)" />
      <rect x="28" y="78" width="280" height="22" rx="6" fill="#3C5A76" />
      <rect x="28" y="110" width="200" height="12" rx="4" fill="#466987" />
      <rect x="28" y="132" width="112" height="24" rx="7" fill="#7DE2DB" />
      <rect x="520" y="64" width="120" height="96" rx="10" fill="url(#nexusApparelProduct)" />
      <path d="M548 88 L556 72 L592 72 L600 88 L600 148 L548 148 Z" fill="#5E86A8" />
      <rect x="660" y="72" width="108" height="88" rx="10" fill="url(#nexusApparelShoe)" />
      <ellipse cx="714" cy="132" rx="36" ry="14" fill="#466987" />

      <rect x="20" y="188" width="72" height="26" rx="7" fill="#7DE2DB" />
      <rect x="104" y="188" width="80" height="26" rx="7" fill="#2A485F" />
      <rect x="196" y="188" width="72" height="26" rx="7" fill="#2A485F" />
      <rect x="280" y="188" width="64" height="26" rx="7" fill="#2A485F" />
      <rect x="356" y="188" width="56" height="26" rx="7" fill="#2A485F" />
      <rect x="424" y="188" width="356" height="26" rx="7" fill="#22384E" />

      <rect x="20" y="228" width="178" height="248" rx="10" fill="#22384E" />
      <rect x="32" y="240" width="154" height="158" rx="8" fill="url(#nexusApparelProduct)" />
      <path d="M78 278 L86 262 L132 262 L140 278 L140 386 L78 386 Z" fill="#6B94B5" opacity="0.85" />
      <rect x="32" y="408" width="110" height="10" rx="4" fill="#466987" />
      <rect x="32" y="426" width="64" height="14" rx="5" fill="#7DE2DB" />

      <rect x="212" y="228" width="178" height="248" rx="10" fill="#22384E" />
      <rect x="224" y="240" width="154" height="158" rx="8" fill="url(#nexusApparelShoe)" />
      <ellipse cx="301" cy="350" rx="52" ry="22" fill="#5A7F9E" />
      <rect x="224" y="408" width="110" height="10" rx="4" fill="#466987" />
      <rect x="224" y="426" width="64" height="14" rx="5" fill="#7DE2DB" />

      <rect x="404" y="228" width="178" height="248" rx="10" fill="#22384E" />
      <rect x="416" y="240" width="154" height="158" rx="8" fill="url(#nexusApparelProduct)" />
      <rect x="448" y="272" width="90" height="110" rx="6" fill="#6B94B5" opacity="0.8" />
      <rect x="416" y="408" width="110" height="10" rx="4" fill="#466987" />
      <rect x="416" y="426" width="64" height="14" rx="5" fill="#7DE2DB" />

      <rect x="596" y="228" width="184" height="248" rx="10" fill="#22384E" />
      <rect x="608" y="240" width="160" height="158" rx="8" fill="url(#nexusApparelProduct)" />
      <path d="M654 282 L662 266 L714 266 L722 282 L722 386 L654 386 Z" fill="#5E86A8" opacity="0.85" />
      <rect x="608" y="408" width="116" height="10" rx="4" fill="#466987" />
      <rect x="608" y="426" width="68" height="14" rx="5" fill="#7DE2DB" />

      <rect x="20" y="492" width="760" height="36" rx="8" fill="#2E4A62" />
      <rect x="40" y="504" width="220" height="12" rx="4" fill="#7DE2DB" />
      <rect x="280" y="504" width="160" height="12" rx="4" fill="#466987" />
      <rect x="620" y="500" width="120" height="20" rx="6" fill="#7DE2DB" />

      <rect x="20" y="544" width="178" height="72" rx="8" fill="#22384E" />
      <rect x="32" y="558" width="154" height="36" rx="6" fill="url(#nexusApparelProduct)" />
      <rect x="32" y="602" width="90" height="8" rx="3" fill="#466987" />

      <rect x="212" y="544" width="178" height="72" rx="8" fill="#22384E" />
      <rect x="224" y="558" width="154" height="36" rx="6" fill="url(#nexusApparelShoe)" />
      <rect x="224" y="602" width="90" height="8" rx="3" fill="#466987" />

      <rect x="404" y="544" width="178" height="72" rx="8" fill="#22384E" />
      <rect x="416" y="558" width="154" height="36" rx="6" fill="url(#nexusApparelProduct)" />
      <rect x="416" y="602" width="90" height="8" rx="3" fill="#466987" />

      <rect x="596" y="544" width="184" height="72" rx="8" fill="#22384E" />
      <rect x="608" y="558" width="160" height="36" rx="6" fill="url(#nexusApparelProduct)" />
      <rect x="608" y="602" width="100" height="8" rx="3" fill="#466987" />

      <rect x="20" y="632" width="760" height="40" rx="8" fill="#22384E" />
      <rect x="40" y="646" width="100" height="12" rx="4" fill="#466987" />
      <rect x="160" y="646" width="88" height="12" rx="4" fill="#466987" />
      <rect x="280" y="646" width="96" height="12" rx="4" fill="#466987" />
      <rect x="400" y="646" width="80" height="12" rx="4" fill="#466987" />

      <rect x="20" y="684" width="120" height="24" rx="6" fill="#3C5A76" />
      <rect x="152" y="684" width="120" height="24" rx="6" fill="#3C5A76" />
      <rect x="284" y="684" width="120" height="24" rx="6" fill="#7DE2DB" />
      <rect x="416" y="684" width="120" height="24" rx="6" fill="#3C5A76" />
      <rect x="548" y="684" width="120" height="24" rx="6" fill="#3C5A76" />
      <rect x="680" y="684" width="100" height="24" rx="6" fill="#3C5A76" />
    </svg>
  );
}
