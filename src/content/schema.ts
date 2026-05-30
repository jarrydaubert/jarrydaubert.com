import { z } from "zod";

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "expected an ISO date (YYYY-MM-DD)");

export const previewImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export const essayFrontmatterSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  description: z.string().min(1),
  publishedAt: isoDate,
  updatedAt: isoDate.optional(),
  status: z.string().min(1),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
});

export const projectFrontmatterSchema = z.object({
  name: z.string().min(1),
  summary: z.string().min(1),
  theme: z.string().min(1),
  status: z.string().min(1),
  caseStudyStatus: z.string().min(1),
  liveUrl: z
    .string()
    .regex(/^https?:\/\//, "must be an absolute http(s) URL")
    .optional(),
  previewImage: previewImageSchema.optional(),
  featured: z.boolean().default(false),
  order: z.number().int(),
});

export type EssayFrontmatter = z.infer<typeof essayFrontmatterSchema>;
export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
