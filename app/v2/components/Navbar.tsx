"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["India", "/india"],
  ["World", "/world"],
  ["Business", "/business"],
  ["Technology", "/technology"],
  ["Sports", "/sports"],
  ["Jobs", "/jobs"],
  ["Entertainment", "/entertainment"],
  ["Markets", "/markets"],
  ["Archive", "/archive"],
  ["Search", "/search"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">

        <Link href="/" className="logo">
          BREAKING NEWS AI
        </Link>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className={open ? "links open" : "links"}>
          {links.map(([title, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {title}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
