import dotenv from "dotenv";
import react from "@vitejs/plugin-react-swc";


dotenv.config({ path: "../.env" });

export default {
  plugins: [react()],
  server: {
    proxy: {
      "/api": `http://localhost:${8000}`,
    },
  },
  cacheDir: "../node_modules/.vite",
};
