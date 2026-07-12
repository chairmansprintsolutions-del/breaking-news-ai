"use client";

import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/india", label: "India" },
  { href: "/world", label: "World" },
  { href: "/business", label: "Business" },
  { href: "/technology", label: "Technology" },
  { href: "/breaking", label: "Breaking" },
  { href: "/archive", label: "Archive" },
  { href: "/search", label: "Search" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .news-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #111;
          color: white;
          border-bottom: 3px solid #a40000;
        }

        .navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          min-height: 58px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .navbar-logo {
          color: white;
          text-decoration: none;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          font-weight: 900;
          white-space: nowrap;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .navbar-link {
          color: #eee;
          text-decoration: none;
          padding: 19px 11px;
          font-size: 14px;
          font-weight: 700;
          transition: background 0.2s;
        }

        .navbar-link:hover {
          background: #292929;
          color: white;
        }

        .search-link {
          background: #a40000;
          margin-left: 8px;
          padding: 10px 16px;
        }

        .search-link:hover {
          background: #7d0000;
        }

        .menu-button {
          display: none;
          background: transparent;
          color: white;
          border: 1px solid #555;
          border-radius: 5px;
          padding: 8px 12px;
          font-size: 20px;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .menu-button {
            display: block;
          }

          .navbar-inner {
            position: relative;
          }

          .navbar-links {
            display: none;
            position: absolute;
            top: 58px;
            left: 0;
            right: 0;
            background: #111;
            flex-direction: column;
            align-items: stretch;
            padding: 10px;
            border-bottom: 3px solid #a40000;
          }

          .navbar-links.open {
            display: flex;
          }

          .navbar-link {
            padding: 14px;
          }

          .search-link {
            margin-left: 0;
          }
        }
      `}</style>

      <nav className="news-navbar">
        <div className="navbar-inner">
          <a
            href="/"
            className="navbar-logo"
          >
            Breaking News AI
          </a>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>

          <div
            className={`navbar-links ${
              open ? "open" : ""
            }`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.href === "/search"
                    ? "navbar-link search-link"
                    : "navbar-link"
                }
                onClick={() => setOpen(false)}
              >
                {link.href === "/search"
                  ? `🔍 ${link.label}`
                  : link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
