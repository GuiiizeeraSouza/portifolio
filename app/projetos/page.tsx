import Link from "next/link";
import Header from "@/components/_ui/Header/Header";
import { projects } from "@/lib/projects";

export default function ProjetosPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a1f] to-[#0f0a20]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-[140px]" />

      <Header title="Projetos" />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-36">
        <section className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-violet-300">
            Portifolio
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Meus Projetos em Destaque
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-300 sm:text-lg">
            Clique em um projeto para ver detalhes, tecnologias, imagens e o link
            da aplicacao publicada.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            // O card leva para a tela de detalhes do projeto.
            const detailPath = `/projetos/${project.slug}`;

            return (
              <Link
                key={project.slug}
                href={detailPath}
                className="group overflow-hidden rounded-3xl border border-white/15 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={`Preview do projeto ${project.name}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {project.shortDescription}
                  </p>
                  {project.slug === "inovacao-carros" && (
                    <p className="mt-4 truncate text-xs text-violet-200 sm:text-sm">
                      Caminho: {detailPath}
                    </p>
                  )}
                  <span className="mt-5 inline-flex rounded-full border border-violet-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-violet-200">
                    Ver detalhes
                  </span>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
    </div>
  );
}
