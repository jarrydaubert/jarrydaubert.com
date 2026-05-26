export type WritingBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    };

export type WritingItem = {
  href: string;
  publishedAt: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: string;
  body: WritingBlock[];
};

export const writing: WritingItem[] = [
  {
    href: "/writing/ai-assisted-development-demos-vs-shipping",
    publishedAt: "2026-05-25",
    slug: "ai-assisted-development-demos-vs-shipping",
    title: "AI demos reward speed. Shipping rewards judgement.",
    summary:
      "The gap between impressive AI-assisted development demos and software you can actually stand behind.",
    description:
      "AI demos reward speed. Shipping with AI rewards judgement, verification, and restraint.",
    status: "Published.",
    body: [
      {
        type: "paragraph",
        text: "The most impressive AI-assisted development demo is usually the one where almost nothing exists at the start. A prompt goes in. A working interface appears. There is a little suspense, a little theatre, and then a browser tab with something that looks surprisingly complete.",
      },
      {
        type: "paragraph",
        text: "That is a real shift. It is also a bad model for judging whether a product is ready to ship.",
      },
      {
        type: "paragraph",
        text: "Demos optimise for visible output. Shipping optimises for durable outcomes. Those are related, but they are not the same thing. A demo can hide weak acceptance criteria, missing edge cases, vague ownership, broken metadata, poor accessibility, and deployment shortcuts. A real release cannot hide those things for long.",
      },
      {
        type: "paragraph",
        text: 'The closer the work gets to production, the less useful it is to ask, "did the model make something?" The better question is, "do we understand what changed, why it changed, and what evidence says it is safe enough?"',
      },
      {
        type: "heading",
        text: "Generation is not the bottleneck anymore",
      },
      {
        type: "paragraph",
        text: "AI has made the act of producing code cheaper. It can scaffold a route, wire up metadata, generate a first pass at copy, suggest a test shape, or turn a rough instruction into a usable implementation. That speed is valuable. It gives small builders more leverage, especially when the task is well bounded and the surrounding system is simple enough to reason about.",
      },
      {
        type: "paragraph",
        text: "But faster production does not automatically mean safer production. In many cases, the bottleneck moves from typing to judging. Someone still has to decide whether the generated output fits the intent. Someone has to inspect the diff, notice the extra dependency that should not be there, catch the route that does not belong, and say no to the tempting flourish that would make the demo better and the product worse.",
      },
      {
        type: "paragraph",
        text: 'That operator work is not glamorous, but it is the work. The person using the tool has to frame the task, constrain the scope, preserve the architecture, run checks, read failures, and decide whether "looks done" has become "is safe to ship." AI can help with each of those steps, but it cannot remove responsibility for them.',
      },
      {
        type: "heading",
        text: "Acceptance criteria get more important",
      },
      {
        type: "paragraph",
        text: "When code is cheap to generate, vague requests become expensive in a different way. The cost shows up as review time, rework, and false confidence. A model can fill gaps quickly, but it may fill them with assumptions that feel plausible and still miss the thing that matters. Clear acceptance criteria act as a brake on that drift.",
      },
      {
        type: "paragraph",
        text: "While building the site you are reading now, the prompts that worked best were bounded: build the initial shell, use Next.js App Router, keep it static-first, install Vercel Analytics, do not add a workbench, do not add 3D, do not create fake metrics. Later passes had similarly narrow goals: remove the scroll behaviour warning, add a principles section, expose a contact path, add project stubs, harden metadata, add security headers, and tidy the public repository presentation.",
      },
      {
        type: "paragraph",
        text: "Those constraints did not slow the work down. They made the work shippable. Without them, it would have been easy to wander into the sort of impressive side quest that creates more surface area than value. The 3D or workbench idea can wait. The basic site needed identity, routes, copy, analytics, a deployment path, email, metadata, and a clean public repo first.",
      },
      {
        type: "heading",
        text: "Evidence beats vibes",
      },
      {
        type: "paragraph",
        text: "A generated change can look tidy and still be wrong. It can pass a glance and fail a build. It can satisfy the local page and break metadata, redirects, or accessibility.",
      },
      {
        type: "paragraph",
        text: "While building the site you are reading now, one generated update looked correct in the browser yet dropped the inherited Open Graph and Twitter image because the page metadata had quietly overwritten the base template. The page still worked. The route still loaded. But the share preview was worse, and the mistake was easy to miss without a release-minded check.",
      },
      {
        type: "paragraph",
        text: "That is why tests, checks, and release evidence become more important with AI, not less.",
      },
      {
        type: "paragraph",
        text: "The useful signals were ordinary ones: `bun run format`, `bun run lint`, `bun run lint:biome`, and `bun run build`. The build output showed which routes were generated. Live checks confirmed redirects, sitemap entries, robots, manifest, headers, and the contact path. Vercel inspection confirmed whether production was actually serving the right commit. GitHub Actions and Dependabot were not dramatic additions, but they made the public repo harder to break by accident.",
      },
      {
        type: "paragraph",
        text: "None of this is anti-AI. It is the opposite. If AI lets you move faster, your verification loop has to keep up. Speed without evidence just creates a nicer-looking pile of uncertainty.",
      },
      {
        type: "heading",
        text: "Review loops are product work",
      },
      {
        type: "paragraph",
        text: "There is a common mistake in treating review as a final gate, something that happens after the interesting creative work is done. With AI-assisted development, review is part of the creative work. The first generated version is often raw material. The quality comes from shaping it, cutting scope, checking behaviour, and asking whether it serves the product rather than the demo.",
      },
      {
        type: "paragraph",
        text: 'A frontend audit is a good example. It is easy to generate a homepage that looks complete. It is harder to notice that there is no contact mechanism, project cards all point to the same place, Open Graph data is missing, the sitemap is thin, muted text may be low contrast, and the page has too many "coming soon" signals.',
      },
      {
        type: "paragraph",
        text: "Those are not exotic engineering problems. They are judgement problems. They are the difference between a page that exists and a page that earns a little trust.",
      },
      {
        type: "paragraph",
        text: "The same pattern applies to deployment. A site can build locally and still be on the wrong production path. A domain can resolve and still need canonical behaviour checked. A repository can be public and still need a licence note, CI, Dependabot, secret scanning, and branch protection. Shipping is full of these small, unglamorous checks. They are easy to skip because each one feels minor. Together, they are the release.",
      },
      {
        type: "heading",
        text: "The operator matters",
      },
      {
        type: "paragraph",
        text: 'The best AI workflow I have found so far is not "ask for everything." It is closer to working with a fast, capable collaborator who needs clear boundaries. I want the tool to propose, implement, inspect, and verify. I do not want it to silently expand the product, invent facts, add dependencies, or turn every task into a redesign.',
      },
      {
        type: "paragraph",
        text: "That means the operator has to keep a thread of intent through the work. What is the smallest useful change? What should not change? What evidence will we accept? What is deliberately out of scope? Where is the risk?",
      },
      {
        type: "paragraph",
        text: "A good prompt is not just a request for output. It is a set of operating conditions.",
      },
      {
        type: "paragraph",
        text: "This matters even more for small builders. AI can make a solo or small-team project feel less constrained by time and blank-page friction. That is powerful. It also makes it easier to create more than you can maintain. The discipline is not only in shipping more. It is in choosing what not to ship yet.",
      },
      {
        type: "heading",
        text: "Looks done is not done",
      },
      {
        type: "paragraph",
        text: "The central gap between AI demos and shipping is the gap between appearance and confidence. A demo needs to look done. A release needs to be understood well enough that someone is willing to own it.",
      },
      {
        type: "paragraph",
        text: "That does not mean every small change needs enterprise ceremony. It means the evidence should match the risk. For a personal site, the evidence might be a clean build, working routes, correct redirects, readable copy, accessible focus states, sane metadata, no secrets in the repo, and a deployment connected to the right branch. For a tax calculator, a payment flow, a healthcare workflow, or anything with meaningful user harm, the bar should be much higher.",
      },
      {
        type: "paragraph",
        text: "AI-assisted development is not a shortcut around judgement. It is a way to spend less time on mechanical production and more time on framing, review, testing, release evidence, and product decisions.",
      },
      {
        type: "paragraph",
        text: "Used well, that is a serious advantage. Used lazily, it just moves the mess faster.",
      },
      {
        type: "paragraph",
        text: "The promise is not that AI makes shipping effortless. The promise is that it makes disciplined shipping more accessible. The work still has to be bounded. The diff still has to be read. The checks still have to pass. The operator still has to decide whether the result is good enough to carry their name.",
      },
      {
        type: "paragraph",
        text: "That decision is what separates the demo from the product.",
      },
    ],
  },
];

export function getWritingBySlug(slug: string) {
  return writing.find((item) => item.slug === slug);
}
