import { useEffect } from "react";
import { bootTelegram } from "@/lib/telegram";

export function TelegramBoot() {
  useEffect(() => {
    bootTelegram();
  }, []);
  return null;
}
