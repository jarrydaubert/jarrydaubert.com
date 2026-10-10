"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./lab.module.css";

export function PayeTaxMedia() {
  const [calculator, setCalculator] = useState(false);
  return (
    <figure>
      <div className={styles.mediaSwitch}>
        <button
          type="button"
          aria-pressed={!calculator}
          onClick={() => setCalculator(false)}
        >
          The website
        </button>
        <button
          type="button"
          aria-pressed={calculator}
          onClick={() => setCalculator(true)}
        >
          The calculator
        </button>
      </div>
      <div className={`${styles.visual} ${styles.taxVisual}`}>
        <Image
          src={
            calculator
              ? "/design-lab/payetax-calculator.jpg"
              : "/design-lab/payetax.jpg"
          }
          alt={
            calculator
              ? "PayeTax calculation with an illustrative annual salary of 50,000 pounds and the resulting tax breakdown."
              : "The live PayeTax website introduction."
          }
          width={1440}
          height={1000}
          sizes="(max-width: 700px) 100vw, 80vw"
          priority
          loading="eager"
          className={styles.projectImage}
        />
      </div>
      <figcaption>
        {calculator
          ? "A live calculation using an illustrative salary. Not personal financial data."
          : "A capture of the live website."}
      </figcaption>
    </figure>
  );
}
