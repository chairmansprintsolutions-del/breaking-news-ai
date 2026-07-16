"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface BreakingNews {
  id: number;
  title: string;
}

export default function BreakingTicker() {
  const [items, setItems] = useState<BreakingNews[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/breaking");

        if (!res.ok) return;

        const data = await res.json();

        setItems(data || []);
      } catch {}
    }

    load();

    const timer = setInterval(load, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ticker">

      <div className="ticker-label">
        LIVE
      </div>

      <div className="ticker-scroll">

        <div className="ticker-track">

          {items.length === 0 && (
            <>
              <span>
                Breaking news updates will appear here automatically.
              </span>

              <span>
                AI continuously monitors trusted sources.
              </span>
            </>
          )}

          {items.map((item) => (
            <Link
              key={item.id}
              href={`/alert/${item.id}`}
              className="ticker-item"
            >
              ● {item.title}
            </Link>
          ))}

          {items.map((item) => (
            <Link
              key={`repeat-${item.id}`}
              href={`/alert/${item.id}`}
              className="ticker-item"
            >
              ● {item.title}
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}
