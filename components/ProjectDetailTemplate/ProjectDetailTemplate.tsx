"use client";

import Link from "next/link";
import { useRef } from "react";
import { Laptop, Smartphone, Tablet } from "lucide-react";
import { ProjectItem } from "@/lib/projects";

interface ProjectDetailTemplateProps {
  project: ProjectItem;
}

export default function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  const isMobile = project.category === "Mobile";

  const galleryChunks: string[][] = [];
  for (let index = 0; index < project.gallery.length; index += 4) {
    galleryChunks.push(project.gallery.slice(index, index + 4));
  }

  const handleGalleryScroll = (direction: "left" | "right") => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const amount = gallery.clientWidth + 16;
    gallery.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-36">
      <Link
        href="/projetos"
        className="mb-8 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet-300 hover:text-white"
      >
        Voltar para projetos
      </Link>

      {!isMobile && (
        <section className="mb-8 overflow-hidden rounded-3xl border border-white/15 bg-white/5">
          <div className="relative aspect-[16/8] w-full overflow-hidden">
            {project.demoVideo ? (
              <video
                src={project.demoVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              >
                Seu navegador não suporta reprodução de vídeo.
              </video>
            ) : (
              <img
                src={project.coverImage}
                alt={`Página principal do projeto ${project.name}`}
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-white sm:text-5xl">{project.name}</h1>
              <p className="mt-3 max-w-3xl text-sm text-zinc-200 sm:text-base">
                {project.shortDescription}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <article className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
          {project.category === "Mobile" ? (
            <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
              <div className="flex items-start justify-center">
                <div className="relative h-[435px] w-full max-w-[230px] overflow-hidden rounded-[36px] border border-white/10 bg-black shadow-2xl">
                  <div className="absolute left-1/2 top-3 h-1 w-12 -translate-x-1/2 rounded-full bg-white/20" />
                  <div className="absolute inset-x-4 top-6 bottom-4 overflow-hidden rounded-[20px] bg-white/5">
                    {project.demoVideo ? (
                      <video
                        src={project.demoVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={project.gallery[0] ?? project.coverImage}
                        alt={`Mockup principal do projeto ${project.name}`}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white">{project.name}</h1>
                <h2 className="mt-4 text-2xl font-semibold text-white">Sobre o projeto</h2>
                <p className="mt-4 leading-relaxed text-zinc-200">{project.objective}</p>

                <h3 className="mt-7 text-lg font-semibold text-violet-200">Destaques</h3>
                <ul className="mt-3 space-y-3 text-zinc-200">
                  {project.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-white">Sobre o projeto</h2>
              <p className="mt-4 leading-relaxed text-zinc-200">{project.objective}</p>

              <h3 className="mt-7 text-lg font-semibold text-violet-200">Destaques</h3>
              <ul className="mt-3 space-y-3 text-zinc-200">
                {project.highlights.slice(0, 2).map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </article>

        <aside className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Informações</h2>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Tecnologias</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-violet-300/35 bg-violet-500/10 px-3 py-1 text-sm text-violet-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Compatibilidade</p>
            <div className={`mt-3 grid gap-2 ${project.category === "Mobile" ? "grid-cols-1" : "grid-cols-3"}`}>
              <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-black/20 px-2 py-3 text-zinc-200">
                <Smartphone size={16} className="text-violet-200" aria-hidden />
                <span className="text-xs">Celular</span>
              </div>
              {project.category !== "Mobile" && (
                <>
                  <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-black/20 px-2 py-3 text-zinc-200">
                    <Tablet size={16} className="text-violet-200" aria-hidden />
                    <span className="text-xs">Tablet</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-black/20 px-2 py-3 text-zinc-200">
                    <Laptop size={16} className="text-violet-200" aria-hidden />
                    <span className="text-xs">PC</span>
                  </div>
                </>
              )}
            </div>
          </div>
          {project.category !== "Mobile" && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Acessar projeto online
            </a>
          )}
        </aside>
      </section>

      <section className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-white">Imagens do projeto</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleGalleryScroll("left")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-violet-300 hover:text-violet-200"
              aria-label="Voltar imagens"
            >
              <span aria-hidden>{"<"}</span>
            </button>
            <button
              type="button"
              onClick={() => handleGalleryScroll("right")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-violet-300 hover:text-violet-200"
              aria-label="Avançar imagens"
            >
              <span aria-hidden>{">"}</span>
            </button>
          </div>
        </div>

        <div ref={galleryRef} className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {galleryChunks.map((chunk, chunkIndex) => (
            <div
              key={`chunk-${chunkIndex}`}
              className={`grid min-w-full snap-start gap-4 ${project.category === "Mobile" ? "grid-flow-col auto-cols-[250px]" : "grid-cols-2"}`}
            >
              {chunk.map((image, imageIndex) => {
                const visibleIndex = chunkIndex * 4 + imageIndex + 1;

                return project.category === "Mobile" ? (
                  <figure
                    key={image}
                    className="relative aspect-[10/18] w-full overflow-hidden rounded-[36px] border border-white/15 bg-black/30"
                  >
                    <div className="absolute left-1/2 top-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/20" />
                    <div className="absolute left-1/2 top-10 h-1.5 w-24 -translate-x-1/2 rounded-full bg-white/10" />
                    <div className="absolute inset-x-4 top-14 bottom-4 overflow-hidden rounded-[32px] bg-white/5">
                      <img
                        src={image}
                        alt={`Imagem ${visibleIndex} do projeto ${project.name}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </figure>
                ) : (
                  <figure
                    key={image}
                    className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 bg-black/30"
                  >
                    <img
                      src={image}
                      alt={`Imagem ${visibleIndex} do projeto ${project.name}`}
                      className="h-full w-full object-contain bg-black"
                    />
                  </figure>
                );
              })}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
