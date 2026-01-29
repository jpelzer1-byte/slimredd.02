import React from "react";

/**
 * Minimal red landing page (Vercel + GitHub compatible)
 * - Solid red background
 * - White terminal-style font (Courier New)
 * - Perfectly centered text links
 */

const LINKS = [
  { label: "Apple Music", href: "https://music.apple.com/us/artist/slim-redd/1868493309" },
  { label: "TikTok", href: "https://www.tiktok.com/@slimredd0?lang=en" },
  { label: "YouTube", href: "https://www.youtube.com/@dooma3stro" },
  { label: "Spotify", href: "https://open.spotify.com/artist/0QShqQ1HftKHjtINR1Kdtj?si=UwgmcUgtTOKgispBj0kwWA" },
  { label: "Instagram", href: "https://www.instagram.com/s1imredd/" },
];

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      display: "grid",
      placeItems: "center",
      background: "#b00000",
      color: "#fff",
      textAlign: "center",
      fontFamily: `"Courier New", Courier, monospace`
    }}>
      <nav
        style={{
          display: "flex",
          gap: 56,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: 18,
              letterSpacing: "0.12em",
              opacity: 0.95,
              transition: "opacity 120ms ease, transform 120ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.95";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
