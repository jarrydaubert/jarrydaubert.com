import { labMetadata } from "./data";
import styles from "./lab.module.css";

export const metadata = labMetadata("Design lab", "/design-lab");

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.lab}>{children}</div>;
}
