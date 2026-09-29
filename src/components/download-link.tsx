import type { ReactNode } from "react";
import { downloadViaTelegram, hapticLight } from "@/lib/telegram";

type Props = {
  filename: string;
  className?: string;
  children: ReactNode;
};

function fileHref(filename: string) {
  if (filename.endsWith(".zip")) return "/qiyal-skills.zip";
  return `/attachments/${encodeURIComponent(filename)}`;
}

export function DownloadLink({ filename, className, children }: Props) {
  const href = fileHref(filename);

  return (
    <a
      href={href}
      download={filename}
      target="_blank"
      rel="noopener"
      className={className}
      onClick={(event) => {
        hapticLight();
        if (downloadViaTelegram(href, filename)) event.preventDefault();
      }}
    >
      {children}
    </a>
  );
}
