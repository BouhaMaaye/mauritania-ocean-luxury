import { useEffect, useRef, useState } from "react";

/**
 * Preloads a list of image URLs into memory and reports load progress.
 * Returns a stable ref to the <img> elements (in the same order as
 * frameUrls) so a caller can draw them to a canvas without re-fetching.
 */
export function useFrameSequence(frameUrls: string[]) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (frameUrls.length === 0) {
      setReady(true);
      return;
    }

    let cancelled = false;
    let loadedCount = 0;
    const total = frameUrls.length;

    setProgress(0);
    setReady(false);

    const images = frameUrls.map((src) => {
      const img = new Image();
      const onSettle = () => {
        loadedCount += 1;
        if (cancelled) return;
        setProgress(Math.round((loadedCount / total) * 100));
        if (loadedCount === total) setReady(true);
      };
      img.onload = onSettle;
      img.onerror = onSettle;
      img.src = src;
      return img;
    });

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [frameUrls]);

  return { images: imagesRef, progress, ready };
}
