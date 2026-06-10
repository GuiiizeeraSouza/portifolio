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
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Projetos Pessoais
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-300 sm:text-lg">
            Trabalhos pessoais e experimentos que mostram design, usabilidade e entrega de produto.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {projects
            .filter((project) => project.category === "Pessoal")
            .map((project) => {
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
                    <span className="mt-5 inline-flex rounded-full border border-violet-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-violet-200">
                      Ver detalhes
                    </span>
                  </div>
                </Link>
              );
            })}
        </section>

        <div className="my-14 h-px bg-white/10" />

        <section className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Projetos Mobile Pessoais
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-300 sm:text-lg">
            Aplicativos mobile que desenvolvi pessoalmente, com foco em usabilidade e fluxo rápido para o usuário.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {projects
            .filter((project) => project.category === "Mobile")
            .map((project) => {
              const detailPath = `/projetos/${project.slug}`;

              return (
                <Link
                  key={project.slug}
                  href={detailPath}
                  className="group overflow-hidden rounded-3xl border border-white/15 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/60"
                >
                  <div className="grid gap-1 p-2 sm:p-3">
                    <div className="grid grid-cols-3 gap-1">
                      {(project.gallery.length ? project.gallery.slice(0, 3) : [project.coverImage, project.coverImage, project.coverImage]).map((image, index) => (
                        <div
                          key={image + index}
                          className="relative aspect-[9/19] overflow-hidden rounded-[36px] border border-white/10 bg-black shadow-2xl"
                        >
                          <div className="absolute left-1/2 top-1 h-1 w-12 -translate-x-1/2 rounded-full bg-white/20" />
                          <div className="absolute left-1/2 top-6 h-1 w-20 -translate-x-1/2 rounded-full bg-white/10" />
                          <div className="absolute inset-x-3 top-6 bottom-5 overflow-hidden rounded-[20px] bg-white/5">
                            <img
                              src={image}
                              alt={`Mockup ${index + 1} do projeto ${project.name}`}
                              className="h-full w-full object-cover transition duration-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-1 sm:p-2">
                      <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                        {project.shortDescription}
                      </p>
                      <span className="mt-5 inline-flex rounded-full border border-violet-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-violet-200">
                        Ver detalhes
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </section>

        <div className="my-14 h-px bg-white/10" />

        <section className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Projetos Profissionais
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-300 sm:text-lg">
            Dois projetos desenvolvidos para a empresa onde trabalho, com foco em eficiência interna e gestão de processos.
          </p>
        </section>

        <section className="grid gap-7 md:grid-cols-2">
          {projects
            .filter((project) => project.category === "Profissional")
            .map((project) => {
              const detailPath = `/projetos/${project.slug}`;

              return (
                <Link
                  key={project.slug}
                  href={detailPath}
                  className="group w-[102%] overflow-hidden rounded-3xl border border-white/15 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/60"
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
