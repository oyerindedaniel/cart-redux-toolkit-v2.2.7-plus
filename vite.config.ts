import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Convert `import.meta.url` to a file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   "@": path.resolve(__dirname, "./src"),
    //   "@/components": path.resolve(__dirname, "./src/components"),
    // },
  },
  assetsInclude: ["**/*.woff", "**/*.woff2"],
});