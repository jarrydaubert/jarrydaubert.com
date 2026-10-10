import { site } from "@/lib/site";
import { labMetadata } from "../../_lib/metadata";
import { labProjects } from "../../_lib/projects";
import { CopyEmail } from "../_components/copy-email";
import { OwnColour } from "../_components/own-colour";
import styles from "../b.module.css";

export const metadata = labMetadata(
  "About, concept B",
  "About Jarryd Aubert, design lab concept B.",
);

export default function ConceptBAbout() {
  return (
    <OwnColour
      options={labProjects.map((project) => ({
        name: project.name,
        bg: project.colour.bg,
        fg: project.colour.fg,
      }))}
    >
      <div className={styles.aboutPhoto}>
        <span>Photo of Jarryd</span>
        <span>Placeholder</span>
      </div>
      <div className={styles.aboutText}>
        <h1 className={styles.aboutTitle}>Hi, I&apos;m Jarryd.</h1>
        <p className={styles.aboutLead}>
          I make things with AI coding agents and then make sure they work.
        </p>
        <p>
          My day job is software testing, and my CV and LinkedIn cover that.
          This is the other half: a tax calculator, an iPhone app, a website for
          a padel venue and this site.
        </p>
        <p>
          The agents suggest approaches and write a lot of the code. I decide
          what to build, review what they make and own the final calls.
        </p>
        <div className={styles.aboutActions}>
          <CopyEmail
            email={site.email}
            className={styles.aboutButton}
            label="Copy my email"
          />
          <a href={site.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </OwnColour>
  );
}
