type DownloadFileParams = {
  url: string;
  file_name: string;
};

type TelegramWebApp = {
  initData?: string;
  platform?: string;
  ready: () => void;
  expand: () => void;
  setHeaderColor?: (color: string) => void;
  setBackgroundColor?: (color: string) => void;
  enableClosingConfirmation?: () => void;
  downloadFile?: (params: DownloadFileParams, callback?: (ok: boolean) => void) => void;
  openLink?: (url: string) => void;
  HapticFeedback?: { impactOccurred: (style: "light" | "medium" | "heavy") => void };
};

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp };
  }
}

export function getTelegram() {
  if (typeof window === "undefined") return undefined;
  return window.Telegram?.WebApp;
}

export function isTelegramApp() {
  const tg = getTelegram();
  return Boolean(tg && (tg.initData || tg.platform));
}

export function bootTelegram() {
  const tg = getTelegram();
  if (!tg) return;
  tg.ready();
  tg.expand();
  tg.setHeaderColor?.("#050505");
  tg.setBackgroundColor?.("#050505");
}

export function hapticLight() {
  getTelegram()?.HapticFeedback?.impactOccurred("light");
}

export function downloadViaTelegram(path: string, filename: string) {
  const tg = getTelegram();
  if (!tg || !isTelegramApp()) return false;
  const url = new URL(path, window.location.origin).href;
  hapticLight();
  if (typeof tg.downloadFile === "function") {
    tg.downloadFile({ url, file_name: filename });
    return true;
  }
  if (typeof tg.openLink === "function") {
    tg.openLink(url);
    return true;
  }
  return false;
}
