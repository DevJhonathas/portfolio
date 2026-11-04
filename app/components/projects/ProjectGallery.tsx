
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Film,
  ImageIcon,
} from "lucide-react";

import type { ProjectMedia } from "@/app/data/projects";

interface ProjectGalleryProps {
  media: ProjectMedia[];
  projectName: string;
}

export function ProjectGallery({
  media,
  projectName,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  function changeMedia(index: number) {
    setActiveIndex((index + media.length) % media.length);
  }

  if (media.length === 0) {
    return (
      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:aspect-video">
        <ImageIcon
          size={42}
          strokeWidth={1}
          className="text-[var(--primary)]"
        />

        <p className="text-center text-sm text-[var(--muted)]">
          Imagens e vídeos deste projeto serão adicionados em breve.
        </p>
      </div>
    );
  }

  const currentMedia = media[activeIndex];

  return (
    <section className="w-full min-w-0">

      {/* Mídia principal */}
      <div className="group relative aspect-[4/3] max-h-[70svh] w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] sm:aspect-video sm:rounded-2xl">

        {currentMedia.type === "video" ? (
          <video
            key={currentMedia.src}
            controls
            playsInline
            preload="metadata"
            poster={currentMedia.poster}
            className="absolute inset-0 h-full w-full object-contain"
            aria-label={currentMedia.title ?? `Vídeo de ${projectName}`}
          >
            <source
              src={currentMedia.src}
              type={
                currentMedia.src.endsWith(".webm")
                  ? "video/webm"
                  : "video/mp4"
              }
            />

            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        ) : (
          <Image
            key={currentMedia.src}
            src={currentMedia.src}
            alt={currentMedia.alt ?? projectName}
            fill
            unoptimized
            priority={activeIndex === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1152px) 90vw, 1152px"
            className="object-contain"
          />
        )}

        {/* Controles de navegação */}
        {media.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => changeMedia(activeIndex - 1)}
              aria-label="Mídia anterior"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-lg backdrop-blur-md transition hover:bg-black/80 sm:left-4 sm:h-11 sm:w-11 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => changeMedia(activeIndex + 1)}
              aria-label="Próxima mídia"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-lg backdrop-blur-md transition hover:bg-black/80 sm:right-4 sm:h-11 sm:w-11 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Contador */}
        <span className="absolute bottom-2 right-2 rounded-lg bg-black/65 px-2.5 py-1 text-[11px] text-white backdrop-blur-md sm:bottom-4 sm:right-4 sm:px-3 sm:py-1.5 sm:text-xs">
          {activeIndex + 1} / {media.length}
        </span>

      </div>

      {/* Miniaturas */}
      {media.length > 1 && (
        <div className="mt-3 w-full min-w-0 sm:mt-4">
          <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-3 sm:gap-3">

            {media.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${item.src}-${index}`}
                  type="button"
                  onClick={() => changeMedia(index)}
                  aria-label={`Selecionar ${
                    item.type === "video" ? "vídeo" : "imagem"
                  } ${index + 1}`}
                  aria-pressed={isActive}
                  className={`relative flex h-16 w-24 shrink-0 snap-start items-center justify-center overflow-hidden rounded-lg border transition sm:h-20 sm:w-32 sm:rounded-xl ${
                    isActive
                      ? "border-[var(--primary)] opacity-100 ring-1 ring-[var(--primary)]"
                      : "border-[var(--border)] opacity-60 hover:opacity-100"
                  }`}
                >

                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt ?? `Imagem ${index + 1} de ${projectName}`}
                      fill
                      unoptimized
                      sizes="128px"
                      className="object-cover"
                    />
                  ) : item.poster ? (
                    <Image
                      src={item.poster}
                      alt={`Prévia do vídeo de ${projectName}`}
                      fill
                      unoptimized
                      sizes="128px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[var(--surface)]">
                      <Film
                        size={24}
                        className="text-[var(--primary)]"
                      />
                    </div>
                  )}

                  {/* Identificação de vídeo */}
                  {item.type === "video" && (
                    <span className="absolute bottom-1 left-1 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-medium text-white">
                      Vídeo
                    </span>
                  )}

                </button>
              );
            })}

          </div>
        </div>
      )}

    </section>
  );
}
