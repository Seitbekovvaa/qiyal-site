import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let ready = false;

export function motion() {
  if (typeof window === "undefined") return null;
  if (!ready) {
    gsap.registerPlugin(ScrollTrigger);
    ready = true;
  }
  return { gsap, ScrollTrigger };
}
