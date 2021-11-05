import reactRefresh from "@vitejs/plugin-react-refresh";
import reactJSX from "vite-react-jsx";
import { defineConfig } from "vite";

const plugins = [reactJSX()];

if (process.env.NODE_ENV !== "test") {
  plugins.push(reactRefresh());
}

const config = defineConfig(() => {
  return {
    plugins,
    server: {
      // TODO: update env
      port: 8080,
    },
  };
});

export default config;
