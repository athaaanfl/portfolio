"use client";

import { useEffect, useMemo, useState } from "react";

function getReducedMotionPreference() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useDeviceProfile() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);

    const cores = navigator.hardwareConcurrency ?? 8;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setIsLowPower(cores <= 4 || memory <= 4 || mobile);

    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  return useMemo(
    () => ({
      reducedMotion: reducedMotion || getReducedMotionPreference(),
      isLowPower,
      disable3D: reducedMotion || isLowPower,
    }),
    [isLowPower, reducedMotion],
  );
}
