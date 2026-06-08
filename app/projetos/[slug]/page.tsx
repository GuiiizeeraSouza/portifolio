import { notFound } from "next/navigation";
import Header from "@/components/_ui/Header/Header";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate/ProjectDetailTemplate";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjetoDetalheProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjetoDetalhePage({ params }: ProjetoDetalheProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a1f] to-[#0f0a20]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute right-8 top-40 h-72 w-72 rounded-full bg-purple-700/20 blur-[120px]" />

      <Header title={project.name} />
      <ProjectDetailTemplate project={project} />
    </div>
  );
}
