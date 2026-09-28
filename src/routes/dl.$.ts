import { createFileRoute } from "@tanstack/react-router";
import { packText } from "@/lib/pack-contents";

export const Route = createFileRoute("/dl/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const name = decodeURIComponent(params._splat ?? "").split("/").pop() ?? "";
        if (!name || name.includes("..")) {
          return new Response("bad name", { status: 400 });
        }
        const text = packText(name);
        if (!text) {
          return new Response("not found", { status: 404 });
        }
        return new Response(text, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Content-Disposition": `attachment; filename="${name.replaceAll('"', "")}"`,
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
