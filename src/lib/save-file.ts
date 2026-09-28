import { zipSync, strToU8 } from "fflate";
import { allPackFiles, packText } from "@/lib/pack-contents";

let saving = false;

function saveBlob(filename: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function isPhone() {
  return window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
}

async function shareOrSave(filename: string, bytes: BlobPart, mime: string) {
  if (saving) return;
  saving = true;
  try {
    const blob = new Blob([bytes], { type: mime });
    const file = new File([blob], filename, { type: mime });
    const nav = navigator as Navigator & {
      canShare?: (data: ShareData) => boolean;
    };
    // Only the file — iOS saves `title`/`text` as a second "текст N" item.
    const payload: ShareData = { files: [file] };
    const canShareFiles =
      typeof nav.share === "function" &&
      (!nav.canShare || nav.canShare(payload));

    if (isPhone() && canShareFiles) {
      try {
        await nav.share(payload);
        return;
      } catch (error) {
        if ((error as DOMException).name === "AbortError") return;
      }
    }

    saveBlob(filename, blob);
  } finally {
    saving = false;
  }
}

export async function saveMarkdown(filename: string) {
  const text = packText(filename);
  if (!text) return false;
  await shareOrSave(filename, text, "text/plain");
  return true;
}

export async function saveAllZip() {
  const files: Record<string, Uint8Array> = {};
  for (const item of allPackFiles()) {
    files[item.filename] = strToU8(item.text);
  }
  const zipped = zipSync(files, { level: 6 });
  await shareOrSave("qiyal-skills.zip", zipped, "application/zip");
}
