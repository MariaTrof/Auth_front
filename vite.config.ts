import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
    }
  },
  //  "include": ["src/**/*.ts", "src/**/*.tsx"], // Убедитесь, что пути включены
  // "exclude": ["node_modules"]
});

// У меня не сработало добавление алиасов через конфиг, 
// но я все равно оставила код, потому что я не знаю, в чем ошибка