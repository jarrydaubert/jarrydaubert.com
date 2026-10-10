"use client";

import { useState } from "react";
import styles from "../a.module.css";
import { Mark } from "./marks";

// ProsePal's real routing, sketched. Names and behaviour come from
// prosepal-ios/Sources/ProsePalAPI/MessageWritingService.swift.
const MOMENTS = {
  everyday: {
    label: "A birthday note",
    lane: "device",
    note: "Everyday moments are drafted on the phone first. Only if that can't help does it try the cloud.",
  },
  careful: {
    label: "A sympathy card",
    lane: "cloud",
    note: "Sympathy, apologies and other careful moments go to the cloud first, if you've allowed online writing. If that fails, it falls back to the phone.",
  },
} as const;

type MomentKey = keyof typeof MOMENTS;

export function RouteSketch() {
  const [moment, setMoment] = useState<MomentKey>("everyday");
  const lane = MOMENTS[moment].lane;

  return (
    <figure className={styles.sketch}>
      <fieldset className={styles.sketchToggle}>
        <legend className={styles.visuallyHidden}>
          Pick a moment to see where it gets written
        </legend>
        {(Object.keys(MOMENTS) as MomentKey[]).map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={moment === key}
            className={styles.sketchChoice}
            onClick={() => setMoment(key)}
          >
            {MOMENTS[key].label}
            <Mark
              kind="underline"
              drawn={moment === key}
              className={styles.sketchUnderline}
            />
          </button>
        ))}
      </fieldset>

      <div className={styles.lanes}>
        <div
          className={styles.lane}
          data-on={lane === "device" ? "true" : "false"}
        >
          <Mark
            kind="circle"
            drawn={lane === "device"}
            className={styles.laneCircle}
          />
          <p className={styles.laneTitle}>On the iPhone</p>
          <p className={styles.laneBody}>
            Drafted by Apple&apos;s on-device model, on the phone itself.
          </p>
          <p className={styles.laneCode}>FoundationModelsPrivateDraftClient</p>
        </div>
        <div
          className={styles.lane}
          data-on={lane === "cloud" ? "true" : "false"}
        >
          <Mark
            kind="circle"
            drawn={lane === "cloud"}
            className={styles.laneCircle}
          />
          <p className={styles.laneTitle}>In the cloud</p>
          <p className={styles.laneBody}>
            A cloud model, reached through a Supabase edge function.
          </p>
          <p className={styles.laneCode}>generate-card</p>
        </div>
      </div>

      <figcaption className={styles.sketchNote} aria-live="polite">
        {MOMENTS[moment].note}
      </figcaption>
    </figure>
  );
}
