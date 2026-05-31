import { buildLlmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

// Thin route wrapper — the body is built (and unit-tested) in lib/llms.ts.
export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
