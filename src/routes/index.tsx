import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Search } from "lucide-react";
import { DownloadLink } from "@/components/download-link";
import { HeroReel } from "@/components/hero-reel";
import { ALL_PACK, REFERENCES, SKILLS } from "@/lib/catalog";
import { motion } from "@/lib/gsap";
import { cn, formatBytes } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: SkillsLibrary,
});

type Filter = "Все" | "Скиллы" | "Справочники";

function SkillsLibrary() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("Все");
  const headerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const list = useMemo(() => {
    const pool =
      filter === "Скиллы" ? SKILLS : filter === "Справочники" ? REFERENCES : ALL_PACK;
    const q = query.trim().toLowerCase();
    if (!q) return pool;
    return pool.filter((item) =>
      [item.title, item.name, item.description, item.filename]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query, filter]);

  useEffect(() => {
    const api = motion();
    const header = headerRef.current;
    const cards = listRef.current?.querySelectorAll("li");
    if (!api || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tweens: Array<{ kill: () => void; scrollTrigger?: { kill: () => void } }> = [];
    if (header) {
      tweens.push(
        api.gsap.from(header, {
          y: 36,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
          },
        }),
      );
    }
    if (cards && cards.length) {
      tweens.push(
        api.gsap.fromTo(
          cards,
          { y: 18, opacity: 0.35 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.04,
            ease: "power2.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 96%",
              once: true,
            },
          },
        ),
      );
    }

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, [list]);

  return (
    <div className="qiyal-page bg-bg text-fg">
      <HeroReel />
      <div className="qiyal-catalog">
        <header ref={headerRef} className="qiyal-masthead">
          <div className="max-w-xl">
            <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Qiyal Studio
            </p>
            <h1 className="font-display text-3xl font-semibold uppercase leading-none tracking-tight text-fg sm:text-5xl">
              Скиллы
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:mt-4">
              Все прикреплённые файлы: 8 скиллов и 31 справочник.
            </p>
          </div>
          <DownloadLink
            filename="qiyal-skills.zip"
            className="qiyal-press inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg hover:opacity-90 sm:h-11 sm:w-auto"
          >
            <Download className="size-4" strokeWidth={1.75} />
            Скачать все 39 файлов
          </DownloadLink>
        </header>

        <div className="qiyal-toolbar">
          <label className="relative min-w-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по файлу"
              className="h-12 w-full rounded-md border border-line bg-surface pl-10 pr-3 text-sm text-fg outline-none placeholder:text-subtle focus:border-accent sm:h-11"
            />
          </label>
          <p className="text-sm tabular-nums text-muted">
            {list.length} из {ALL_PACK.length}
          </p>
        </div>

        <div className="qiyal-chips">
          {(["Все", "Скиллы", "Справочники"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "h-11 shrink-0 rounded-full border px-4 text-sm qiyal-press sm:h-9 sm:px-3.5",
                filter === item
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-line bg-surface text-muted hover:text-fg",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="text-sm text-muted">Ничего не найдено.</p>
        ) : (
          <ul ref={listRef} className="qiyal-files">
            {list.map((item) => (
              <li
                key={item.id}
                className="qiyal-card rounded-xl border border-line bg-surface p-4 sm:p-5"
              >
                <div className="qiyal-card-body">
                  <div className="qiyal-card-main">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-raised text-muted sm:size-11">
                      <FileText className="size-4 sm:size-5" strokeWidth={1.6} />
                    </div>
                    <div className="qiyal-card-copy">
                      <div className="qiyal-card-title">
                        <h2 className="font-display text-base font-medium uppercase leading-snug tracking-wide text-fg sm:text-lg">
                          {item.title}
                        </h2>
                        <span className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                          {item.kind === "skill" ? "скилл" : "справочник"}
                        </span>
                      </div>
                      <p className="mt-1 truncate font-mono text-xs text-subtle">{item.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                      <p className="mt-2 break-all font-mono text-xs text-subtle">
                        {item.filename}
                        <span className="mx-2">·</span>
                        {formatBytes(item.sizeBytes)}
                      </p>
                    </div>
                  </div>
                  <DownloadLink
                    filename={item.filename}
                    className="qiyal-press mt-auto inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg hover:opacity-90 sm:h-11"
                  >
                    <Download className="size-4" strokeWidth={1.75} />
                    Скачать
                  </DownloadLink>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
