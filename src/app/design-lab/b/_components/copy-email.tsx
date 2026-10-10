"use client";

import { useEffect, useState } from "react";
import styles from "../b.module.css";

// Copies the address and says so. If the clipboard is unavailable it falls
// back to opening the mail app, so the button always does something useful.
export function CopyEmail({
  email,
  className,
  label = "Say hi",
}: {
  email: string;
  className?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(id);
  }, [copied]);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
          } catch {
            window.location.href = `mailto:${email}`;
          }
        }}
      >
        {label}
      </button>
      <output
        className={`${styles.toast} ${copied ? styles.toastOn : ""}`}
        aria-live="polite"
      >
        {copied ? `Copied ${email}` : ""}
      </output>
    </>
  );
}
