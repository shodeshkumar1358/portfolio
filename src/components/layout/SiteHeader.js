"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${portfolio.name}, home`}>
        <span className="wordmark__mark">
          <span>{portfolio.initials}</span>
          <i aria-hidden="true">✦</i>
        </span>
        <span>{portfolio.name}</span>
      </a>
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        className={`site-nav-toggle${menuOpen ? " is-open" : ""}`}
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`main-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Main navigation"
      >
        {[
          ["Home", "#home"],
          ["About", "#about"],
          ["Projects", "#work"],
          ["Skills", "#skills"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a href={href} key={label} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a
        className="header-contact"
        href={portfolio.email ? `mailto:${portfolio.email}` : "#contact"}
      >
        Let&apos;s talk <ArrowIcon diagonal />
      </a>
    </header>
  );
}
