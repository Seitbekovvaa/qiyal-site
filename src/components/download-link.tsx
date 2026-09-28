import type { ReactNode } from "react";
import { hapticLight } from "@/lib/telegram";
import { saveAllZip, saveMarkdown } from "@/lib/save-file";

type Props = {
  filename: string;
  className?: string;
  children: ReactNode;
};

export function DownloadLink({ filename, className, children }: Props) {
  async function onClick() {
    hapticLight();
    if (filename.endsWith(".zip")) {
      await saveAllZip();
      return;
    }
    await saveMarkdown(filename);
  }

  return (
    <button type="button" className={className} onClick={() => void onClick()}>
      {children}
    </button>
  );
}
