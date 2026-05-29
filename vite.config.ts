import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  plugins: [
    tanstackStart({
      customViteReactPlugin: true,
    }),
    nitro({
      preset: isVercel ? "vercel" : undefined,
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
