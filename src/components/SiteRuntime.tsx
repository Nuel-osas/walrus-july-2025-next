"use client";
import { useEffect } from "react";
import { initializeInteractions } from "@/lib/interactions";

export default function SiteRuntime({ namespace }: { namespace: string }) {
  useEffect(() => {
    let disposed = false;
    let disposeAnimations: (() => void) | undefined;
    const disposeInteractions = initializeInteractions(namespace);
    Promise.all([document.fonts.ready, import("@/lib/animations")])
      .then(([, module]) => {
        if (disposed) return;
        document.documentElement.dataset.siteReady = "true";
        disposeAnimations = module.initializeAnimations(namespace);
      })
      .catch((error) =>
        console.error("Could not initialize the archived animations", error),
      );
    return () => {
      disposed = true;
      disposeInteractions();
      disposeAnimations?.();
      delete document.documentElement.dataset.siteReady;
    };
  }, [namespace]);
  return null;
}
