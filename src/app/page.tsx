import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { Fragment } from "react";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { cn } from "@/lib/cn";
import { allEssays, type Project, selectedWork } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { personJsonLd, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: site.name,
  absoluteTitle: true,
  description: site.homeDescription,
});

// The four stages of the method (not a claim about any one product). Only the
// final "ship" stage earns gold, so the eye lands on the shipped state.
const STAGES = ["build", "test", "verify", "ship"] as const;

const OPERATING = [
  { verb: "build", object: "small" },
  { verb: "test", object: "hard" },
  { verb: "verify", object: "evidence" },
  { verb: "ship", object: "properly" },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

function hostFromUrl(url?: string) {
  if (!url) {
    return null;
  }
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function Tick({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("size-3.5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

function WorkTile({
  project,
  lead = false,
}: {
  project: Project;
  lead?: boolean;
}) {
  const host = hostFromUrl(project.liveUrl);
  const isLive = /live/i.test(project.status);
  const statusLabel = isLive
    ? "live"
    : project.status.replace(/\.$/, "").toLowerCase();
  const image = project.previewImage;

  return (
    <NextLink
      href={project.href}
      className={cn(
        "group focus-ring block rounded-md",
        lead && "lg:grid lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-10",
      )}
    >
      {image ? (
        <div className="overflow-hidden rounded-md border border-border shadow-elevated transition duration-200 group-hover:-translate-y-px group-hover:border-border-hover">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={
              lead
                ? "(min-width: 1024px) 60vw, 100vw"
                : "(min-width: 1024px) 33vw, 100vw"
            }
            className="aspect-[1200/630] w-full object-cover transition duration-200 group-hover:brightness-[1.04]"
          />
        </div>
      ) : null}
      <div className={cn(lead ? "mt-6 lg:mt-0" : "mt-5")}>
        <h3
          className={cn("font-semibold text-fg", lead ? "text-2xl" : "text-xl")}
        >
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
        <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-subtle">
          {host ? (
            <span className="underline decoration-border underline-offset-4 transition-colors group-hover:decoration-accent">
              {host}
            </span>
          ) : null}
          <span
            aria-hidden="true"
            className={cn(
              "inline-block size-1.5 rounded-full",
              isLive ? "bg-accent" : "bg-subtle",
            )}
          />
          <span>{statusLabel}</span>
        </p>
      </div>
    </NextLink>
  );
}

export default function Home() {
  const firstEssay = allEssays[0];
  const [leadProject, ...restProjects] = selectedWork;

  return (
    <div>
      <JsonLd data={personJsonLd} />

      <section aria-labelledby="home-title" className="max-w-4xl">
        <p className="font-mono text-[13px] lowercase text-subtle">
          qa-minded product builder · uk
        </p>
        <h1
          id="home-title"
          className="mt-6 text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-tight text-fg"
        >
          Useful software, shipped with judgement
          <span className="text-accent">.</span>
        </h1>

        <div className="mt-9 max-w-[40rem]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-border py-3 font-mono text-sm">
            {STAGES.map((stage) => {
              const isShip = stage === "ship";
              return (
                <span key={stage} className="inline-flex items-center gap-1.5">
                  <span className={isShip ? "text-fg" : "text-muted"}>
                    {stage}
                  </span>
                  <Tick className={isShip ? "text-accent" : "text-subtle"} />
                </span>
              );
            })}
          </div>
          <p className="mt-2 text-right font-mono text-xs text-subtle">
            four stages, build to ship
          </p>
        </div>

        <p className="mt-9 max-w-[34rem] text-lg leading-8 text-muted">
          I build small software products, test them hard, and write about the
          judgement it takes to ship AI-assisted work properly.
        </p>

        <div className="mt-9 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <Link href={`mailto:${site.email}`}>Email me</Link>
          <span className="font-mono text-sm text-subtle select-all">
            {site.email}
          </span>
          <Link href="#selected-work" className="font-mono text-sm">
            View work ↓
          </Link>
        </div>
      </section>

      <section
        aria-label="How the work runs"
        className="mt-20 border-t border-border pt-12 sm:mt-24"
      >
        <p className="font-mono text-xs text-subtle">
          {"// how the work runs"}
        </p>
        <div className="mt-5 flex flex-col gap-3 font-mono text-base sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3.5">
          {OPERATING.map((step, index) => (
            <Fragment key={step.verb}>
              <span>
                <span className="text-fg">{step.verb}</span>{" "}
                <span className="text-muted">{step.object}</span>
              </span>
              {index < OPERATING.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden text-accent sm:inline"
                >
                  →
                </span>
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      <section
        id="selected-work"
        aria-labelledby="work-title"
        className="mt-20 scroll-mt-24 border-t border-border pt-12 sm:mt-24"
      >
        <p className="font-mono text-xs text-subtle">{"// selected work"}</p>
        <h2
          id="work-title"
          className="mt-3 text-2xl font-semibold text-fg sm:text-3xl"
        >
          Things I have built.
        </h2>
        <div className="mt-10 space-y-12">
          {leadProject ? <WorkTile project={leadProject} lead /> : null}
          {restProjects.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2">
              {restProjects.map((project) => (
                <WorkTile key={project.slug} project={project} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {firstEssay ? (
        <section
          aria-labelledby="writing-title"
          className="mt-20 border-y border-border py-12 sm:mt-24"
        >
          <p className="font-mono text-xs text-subtle">{"// writing"}</p>
          <p className="mt-3 font-mono text-xs text-subtle">
            <time dateTime={firstEssay.publishedAt}>
              {formatDate(firstEssay.publishedAt)}
            </time>{" "}
            · {firstEssay.readingTime}
          </p>
          <h2
            id="writing-title"
            className="mt-4 max-w-3xl text-2xl font-semibold leading-snug text-fg sm:text-3xl"
          >
            {firstEssay.title}
          </h2>
          <p className="mt-3 max-w-[40rem] text-base leading-7 text-muted">
            {firstEssay.summary}
          </p>
          <p className="mt-6">
            <Link href={firstEssay.href} className="font-mono text-sm">
              Read the essay →
            </Link>
          </p>
        </section>
      ) : null}
    </div>
  );
}
