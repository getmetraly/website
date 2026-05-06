"use client";

import { useEffect, useState } from "react";

export function ReadingProgress({ targetId = "article-body" }: { targetId?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const target = document.getElementById(targetId);

      if (!target) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const fallbackProgress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
        setProgress(fallbackProgress);
        return;
      }

      const rect = target.getBoundingClientRect();
      const targetTop = window.scrollY + rect.top;
      const targetHeight = target.offsetHeight;
      const viewportAnchor = window.scrollY + window.innerHeight * 0.18;
      const readableHeight = Math.max(1, targetHeight - window.innerHeight * 0.35);
      const nextProgress = ((viewportAnchor - targetTop) / readableHeight) * 100;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [targetId]);

  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress-bar" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  );
}
