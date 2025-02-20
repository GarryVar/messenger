import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
      "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
      "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap",
      "https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap",
      "https://fonts.googleapis.com/css2?family=Coiny&family=Onest:wght@100..900&display=swap",
    ]),
  ],
});
