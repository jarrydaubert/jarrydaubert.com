import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import {
  type EssayFrontmatter,
  essayFrontmatterSchema,
  type ProjectFrontmatter,
  projectFrontmatterSchema,
} from "@/content/schema";

// Single content loader. Reads MDX at build time (node:fs, server/build only),
// validates frontmatter with Zod and THROWS on the first invalid document, so a
// malformed essay is a red build, not a production bug. The FILENAME IS THE SLUG.
// there is no second source of truth for routes, dates, RSS, or OG.
const CONTENT_DIR = join(process.cwd(), "src/content");
const includeDrafts = process.env.NODE_ENV !== "production";

export type Essay = EssayFrontmatter & {
  slug: string;
  href: string;
  body: string;
  readingTime: string;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  href: string;
  body: string;
};

type RawDoc = { slug: string; raw: string };

function readDir(dir: string): RawDoc[] {
  let entries: string[];
  try {
    entries = readdirSync(join(CONTENT_DIR, dir));
  } catch {
    return [];
  }
  return entries
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      slug: name.replace(/\.mdx$/, ""),
      raw: readFileSync(join(CONTENT_DIR, dir, name), "utf8"),
    }));
}

function formatIssues(error: {
  issues: { path: PropertyKey[]; message: string }[];
}) {
  return error.issues
    .map((issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`)
    .join("\n");
}

function loadEssays(): Essay[] {
  const essays = readDir("essays").map(({ slug, raw }) => {
    const { data, content } = matter(raw);
    const parsed = essayFrontmatterSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Invalid frontmatter in src/content/essays/${slug}.mdx:\n${formatIssues(parsed.error)}`,
      );
    }
    return {
      ...parsed.data,
      slug,
      href: `/writing/${slug}`,
      body: content,
      readingTime: readingTime(content).text,
    };
  });

  return essays
    .filter((essay) => includeDrafts || !essay.draft)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

function loadProjects(): Project[] {
  const projects = readDir("projects").map(({ slug, raw }) => {
    const { data, content } = matter(raw);
    const parsed = projectFrontmatterSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Invalid frontmatter in src/content/projects/${slug}.mdx:\n${formatIssues(parsed.error)}`,
      );
    }
    return { ...parsed.data, slug, href: `/projects/${slug}`, body: content };
  });

  return projects.sort((a, b) => a.order - b.order);
}

function assertUniqueSlugs(essays: Essay[], projects: Project[]) {
  const seen = new Set<string>();
  for (const { slug } of [...essays, ...projects]) {
    if (seen.has(slug)) {
      throw new Error(
        `Duplicate content slug across essays/projects: "${slug}"`,
      );
    }
    seen.add(slug);
  }
}

export const allEssays: Essay[] = loadEssays();
export const allProjects: Project[] = loadProjects();
assertUniqueSlugs(allEssays, allProjects);

export const essaySlugs = allEssays.map((essay) => essay.slug);
export const projectSlugs = allProjects.map((project) => project.slug);

const featured = allProjects.filter((project) => project.featured);
export const selectedWork: Project[] = featured.length
  ? featured
  : allProjects.slice(0, 3);

export function getEssay(slug: string): Essay | undefined {
  return allEssays.find((essay) => essay.slug === slug);
}

export function getProject(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}
