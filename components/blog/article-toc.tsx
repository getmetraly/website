"use client";

import { useEffect, useState } from "react";

export function ArticleToc({
  sections,
}: {
  sections: Array<{ id: string; title: string }>;
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0, 0.1, 0.2, 0.4],
      },
    );

    for (const section of sections) {
      const node = document.getElementById(section.id);
      if (node) {
        observer.observe(node);
      }
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="article-toc" aria-label="Article contents">
      <div className="article-toc-title">Contents</div>
      <div className="article-toc-links">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={activeId === section.id ? "true" : undefined}
          >
            {section.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
