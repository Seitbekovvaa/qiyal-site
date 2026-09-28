import { PACK } from "@/lib/pack-data";

export function packText(filename: string) {
  return PACK[filename] ?? null;
}

export function allPackFiles() {
  return Object.entries(PACK).map(([filename, text]) => ({ filename, text }));
}
