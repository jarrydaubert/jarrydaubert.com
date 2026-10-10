import Link from "next/link";
import { site } from "@/lib/site";
import styles from "../lab.module.css";
import { Arrow } from "../shared";
import { RoomNav } from "./room-nav";

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.room}>
      <aside className={styles.roomRail}>
        <Link href="/design-lab/b" className={styles.roomWordmark}>
          Jarryd Aubert<span>.</span>
        </Link>
        <div className={styles.roomIntro}>
          <h1>
            Made out of
            <br />
            <span>curiosity.</span>
          </h1>
          <p>
            I explore AI by building real things.
            <br />
            Pick a project and have a look around.
          </p>
        </div>
        <RoomNav />
        <div className={styles.railBottom}>
          <a href={`mailto:${site.email}`}>
            Say hello
            <Arrow />
          </a>
          <Link href="/design-lab">
            Back to design lab
            <Arrow />
          </Link>
        </div>
      </aside>
      <main id="main-content" className={styles.roomMain}>
        {children}
      </main>
    </div>
  );
}
