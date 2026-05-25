import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { WritingCard } from "@/components/writing-card";
import { principles } from "@/content/principles";
import { selectedWork } from "@/content/projects";
import { plannedEssays } from "@/content/writing";

const siteDescription =
  "Jarryd Aubert is a QA-minded product builder focused on useful software, AI-assisted workflows, and quality.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jarryd Aubert",
  url: "https://jarrydaubert.com",
  email: "me@jarrydaubert.com",
  jobTitle: "Senior QA Specialist / Product Builder",
  sameAs: ["https://www.linkedin.com/in/jarrydaubert/"],
};

export const metadata: Metadata = {
  title: {
    absolute: "Jarryd Aubert",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const firstEssay = plannedEssays[0];

  return (
    <div className="space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="max-w-4xl space-y-10" aria-labelledby="home-title">
        <div className="space-y-6">
          <h1
            id="home-title"
            className="text-4xl font-semibold leading-tight tracking-normal text-stone-950 dark:text-stone-50 sm:text-5xl sm:leading-tight"
          >
            Jarryd Aubert
          </h1>
          <p className="max-w-3xl text-2xl leading-9 text-stone-800 dark:text-stone-100 sm:text-[1.7rem] sm:leading-10">
            QA-minded product builder shipping useful software with AI, taste,
            and tests.
          </p>
          <p className="max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-300">
            I build and test practical software products, with a focus on
            quality, evidence, and useful AI-assisted workflows.
          </p>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="principles">
        <h2
          id="principles"
          className="text-xl font-semibold text-stone-950 dark:text-stone-50"
        >
          Principles
        </h2>
        <ul className="grid gap-3 text-base leading-7 text-stone-700 dark:text-stone-200 sm:grid-cols-2">
          {principles.map((principle) => (
            <li
              key={principle}
              className="border-l border-stone-300 pl-4 dark:border-stone-700"
            >
              {principle}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5" aria-labelledby="selected-work">
        <div className="space-y-2">
          <h2
            id="selected-work"
            className="text-xl font-semibold text-stone-950 dark:text-stone-50"
          >
            Selected work
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-300">
            Selected products, client work, and experiments that show the shape
            of the work.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {selectedWork.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              summary={project.summary}
              href={`/projects/${project.slug}`}
              status={project.status}
            />
          ))}
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="first-essay">
        <h2
          id="first-essay"
          className="text-xl font-semibold text-stone-950 dark:text-stone-50"
        >
          First essay
        </h2>
        <WritingCard
          href={firstEssay.href}
          publishedAt={firstEssay.publishedAt}
          title={firstEssay.title}
          headingLevel={3}
          summary={firstEssay.summary}
          status={firstEssay.status}
        />
      </section>
    </div>
  );
}
