import { notFound } from "next/navigation";
import { findProject, labMetadata, projects } from "../../data";
import { Viewer } from "../viewer";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return labMetadata(
    findProject(slug)?.name ?? "Project not found",
    `/design-lab/b/${slug}`,
  );
}
export default async function RoomProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  return <Viewer project={project} />;
}
