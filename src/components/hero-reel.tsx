import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "@/lib/gsap";

export function HeroReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = () => {
      video.play().catch(() => {});
    };
    play();
    const keepPlaying = () => {
      if (video.paused) play();
    };
    video.addEventListener("pause", keepPlaying);
    document.addEventListener("visibilitychange", keepPlaying);
    return () => {
      video.removeEventListener("pause", keepPlaying);
      document.removeEventListener("visibilitychange", keepPlaying);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const api = motion();
    if (!video || !section || !api) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = api.gsap.fromTo(
      video,
      { yPercent: 0 },
      {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.55,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    video.play().catch(() => {});
  }

  return (
    <section ref={sectionRef} className="qiyal-hero">
      <video
        ref={videoRef}
        src="/hero.mp4"
        width={1920}
        height={1080}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
      />
      <div className="qiyal-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-accent" />
      <div className="qiyal-flare pointer-events-none absolute left-1/2 top-1/2 z-10 h-px w-3/5 -translate-x-1/2 bg-accent" />
      <div className="qiyal-hero-fade" />
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={!muted}
        aria-label={muted ? "Включить звук" : "Выключить звук"}
        className="qiyal-press qiyal-mute absolute z-20 inline-flex h-12 min-w-12 items-center justify-center gap-2 rounded-full border border-line bg-surface/80 px-4 text-sm text-fg backdrop-blur-sm hover:border-accent hover:bg-accent hover:text-accent-fg"
      >
        <span className="relative size-4">
          <VolumeX
            className={`absolute inset-0 size-4 qiyal-icon ${muted ? "qiyal-icon-on" : "qiyal-icon-off"}`}
            strokeWidth={1.8}
          />
          <Volume2
            className={`absolute inset-0 size-4 qiyal-icon ${muted ? "qiyal-icon-off" : "qiyal-icon-on"}`}
            strokeWidth={1.8}
          />
        </span>
        <span className="hidden sm:inline">{muted ? "Звук выкл" : "Звук вкл"}</span>
      </button>
    </section>
  );
}
