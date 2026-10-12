import Image from "next/image";
import { Link } from "@/components/link";
import { allProjects } from "@/lib/content";
import { site } from "@/lib/site";
import styles from "./open-book.module.css";

export function Arrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

export function PayeTaxMedia({ priority = false }: { priority?: boolean }) {
  return (
    <div className={styles.payeMedia}>
      <Image
        unoptimized
        className={styles.desktopImage}
        src="/projects/payetax-desktop.webp"
        alt="PayeTax's live UK PAYE calculator homepage on desktop."
        width={1425}
        height={800}
        sizes="(max-width: 600px) 70vw, 72vw"
        priority={priority}
      />
      <Image
        unoptimized
        className={styles.mobileImage}
        src="/projects/payetax-mobile.webp"
        alt="The same PayeTax website on a mobile screen."
        width={375}
        height={814}
        sizes="(max-width: 600px) 22vw, 17vw"
      />
    </div>
  );
}

export function ProsePalMedia() {
  return (
    <div className={styles.proseMedia}>
      <Image
        unoptimized
        src="/projects/prosepal-icon.png"
        alt="ProsePal's feather app icon"
        width={180}
        height={180}
        sizes="96px"
        className={styles.proseIcon}
      />
      <p className={styles.proseName}>ProsePal</p>
      <p className={styles.proseNote}>
        Finding the words.
        <br />
        <em>Rebuilding it natively for iOS.</em>
      </p>
    </div>
  );
}

export function ProjectShowcase({
  headingLevel = 3,
}: {
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const payetax = allProjects.find((p) => p.slug === "payetax");
  const prosepal = allProjects.find((p) => p.slug === "prosepal");
  const website = allProjects.find((p) => p.slug === "this-website");
  if (!payetax || !prosepal || !website) return null;
  return (
    <div className={styles.work}>
      <article>
        <Link
          href={payetax.href}
          variant="nav"
          className={styles.mediaLink}
          aria-label="Explore PayeTax"
        >
          <PayeTaxMedia priority />
        </Link>
        <div className={styles.projectCaption}>
          <div>
            <Heading className={styles.projectTitle}>
              <Link href={payetax.href} variant="nav">
                {payetax.name} <Arrow />
              </Link>
            </Heading>
            <p>{payetax.summary}</p>
          </div>
          <span className={styles.status}>{payetax.status}</span>
        </div>
      </article>
      <article className={styles.proseProject}>
        <Link
          href={prosepal.href}
          variant="nav"
          className={styles.mediaLink}
          aria-label="Explore the ProsePal native rebuild"
        >
          <ProsePalMedia />
        </Link>
        <div className={styles.proseCopy}>
          <span className={styles.status}>{prosepal.status}</span>
          <Heading className={styles.projectTitle}>
            <Link href={prosepal.href} variant="nav">
              {prosepal.name} <Arrow />
            </Link>
          </Heading>
          <p>{prosepal.summary}</p>
          <p>{prosepal.theme}</p>
          <Link href={prosepal.href} className={styles.arrowLink}>
            A little more about it <Arrow />
          </Link>
        </div>
      </article>
      <article className={styles.websiteProject}>
        <Heading className={styles.projectTitle}>
          <Link href={website.href} variant="nav">
            This website <Arrow />
          </Link>
        </Heading>
        <div>
          <p>{website.summary} You&apos;re looking at it.</p>
          <Link
            href={website.liveUrl ?? website.href}
            className={styles.arrowLink}
          >
            Have a look on GitHub <Arrow />
          </Link>
        </div>
        <span className={styles.status}>{website.status}</span>
      </article>
    </div>
  );
}

export function AboutSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className={`${styles.about} ${standalone ? styles.aboutPage : ""}`}
    >
      <div>
        <p className={styles.smallLabel}>A little about me</p>
        <Heading id="about-title">
          Curiosity,
          <br />
          put to <em>work.</em>
        </Heading>
      </div>
      <div className={styles.aboutCopy}>
        <p className={styles.aboutLead}>I like finding out what I can make.</p>
        <p>
          I&apos;m Jarryd. These projects are how I explore AI: following an
          idea, making something useful, and learning as I go.
        </p>
        <p>
          I work with AI coding agents. They suggest approaches and write code;
          I direct the work, review the changes, and own the final decisions.
        </p>
        <p>
          My day job is in software testing, so checking that things work comes
          with the territory. The career details live on{" "}
          <Link href={site.socials.linkedin}>LinkedIn</Link>.
        </p>
        <Link href={`mailto:${site.email}`} className={styles.arrowLink}>
          Say hello <Arrow />
        </Link>
      </div>
    </section>
  );
}
