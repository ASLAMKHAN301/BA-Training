import { useState } from "react";
import { GOLD, NAVY, STONE, CREAM, BORDER, INK } from "../../constants/theme";

// ─── LogoMark ────────────────────────────────────────────────────────────────
export function LogoMark({ size = 36 }) {
  return (
    <div
      style={{
        width: size, height: size, background: NAVY, borderRadius: 2,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 18 18" fill="none">
        <rect x="2"  y="2"  width="6" height="6" rx="1" fill={GOLD} />
        <rect x="10" y="2"  width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)" />
        <rect x="2"  y="10" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)" />
        <rect x="10" y="10" width="6" height="6" rx="1" fill="rgba(255,255,255,0.2)" />
      </svg>
    </div>
  );
}

// ─── Eyebrow ─────────────────────────────────────────────────────────────────
export function Eyebrow({ label, dark = false }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <div style={{ width: 28, height: 1, background: dark ? "rgba(201,168,76,0.5)" : GOLD }} />
      <span style={{ fontSize: 11, fontWeight: 600, color: GOLD, letterSpacing: "2.5px", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}

// ─── DisplayH2 ───────────────────────────────────────────────────────────────
export function DisplayH2({ children, light = false, style = {} }) {
  return (
    <h2
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "clamp(28px, 3vw, 44px)",
        fontWeight: 700,
        color: light ? "white" : NAVY,
        lineHeight: 1.12,
        letterSpacing: "-0.8px",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

// ─── FormField ───────────────────────────────────────────────────────────────
export function FormField({ label, type = "text", placeholder, children }) {
  const [focused, setFocused] = useState(false);
  const inputStyle = {
    background: focused ? "white" : CREAM,
    border: `1px solid ${focused ? NAVY : BORDER}`,
    borderRadius: 2, padding: "11px 14px", fontSize: 14,
    fontFamily: "'Outfit', sans-serif", color: INK,
    outline: "none", width: "100%", appearance: "none",
    WebkitAppearance: "none", transition: "border-color 0.12s",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: NAVY, letterSpacing: "0.8px", textTransform: "uppercase" }}>
        {label}
      </label>
      {children ?? (
        <input
          type={type} placeholder={placeholder} style={inputStyle}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
}

// ─── FormSelect ──────────────────────────────────────────────────────────────
export function FormSelect({ label, options }) {
  const [focused, setFocused] = useState(false);
  return (
    <FormField label={label}>
      <select
        style={{
          background: focused ? "white" : CREAM,
          border: `1px solid ${focused ? NAVY : BORDER}`,
          borderRadius: 2, padding: "11px 14px", fontSize: 14,
          fontFamily: "'Outfit', sans-serif", color: INK,
          outline: "none", width: "100%", appearance: "none", WebkitAppearance: "none",
        }}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      >
        {options.map((o, i) => (
          <option key={i} value={i === 0 ? "" : o}>{o}</option>
        ))}
      </select>
    </FormField>
  );
}

// ─── StarRow ─────────────────────────────────────────────────────────────────
export function StarRow({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill={GOLD}>
          <polygon points="6.5,1 8,5 12.5,5 9,8 10.5,13 6.5,10 2.5,13 4,8 0.5,5 5,5" />
        </svg>
      ))}
    </div>
  );
}

// ─── SectionContainer ────────────────────────────────────────────────────────
export function SectionContainer({ children, style = {} }) {
  return (
    <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 60px", ...style }}>
      {children}
    </div>
  );
}

// ─── SectionHead ─────────────────────────────────────────────────────────────
export function SectionHead({ children, linkText, linkHref = "#enrol" }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
      <div>{children}</div>
      {linkText && (
        <a href={linkHref} style={{ fontSize: 13, color: GOLD, fontWeight: 600, textDecoration: "none" }}>
          {linkText}
        </a>
      )}
    </div>
  );
}

// ─── ArrowIcon ───────────────────────────────────────────────────────────────
export function ArrowIcon({ color = STONE }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6h8M7 3l3 3-3 3" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// ─── CheckIcon ───────────────────────────────────────────────────────────────
export function CheckIcon() {
  return (
    <div
      style={{
        width: 18, height: 18, background: "rgba(201,168,76,0.2)",
        border: `1px solid ${GOLD}`, borderRadius: "50%", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10">
        <polyline points="2,5 4.5,7.5 8,2.5" stroke={GOLD} strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}
