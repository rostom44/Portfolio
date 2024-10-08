import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Define the base URL based on the mode
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/Portfolio/" : "/", // Use 'mode' argument
}));
