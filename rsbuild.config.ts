import { readFileSync } from "fs";
import { resolve } from "path";

import { defineConfig, loadEnv, type Rspack } from "@rsbuild/core";
import { pluginEslint } from "@rsbuild/plugin-eslint";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

const { publicVars } = loadEnv({ prefixes: ["APP_"], processEnv: import.meta.env });

const config = defineConfig(({ command }) => ({
  dev: {
    cliShortcuts: {
      help: false,
    },
    lazyCompilation: {
      entries: true,
      imports: true,
    },
    progressBar: true,
  },
  html: {
    template: "./public/index.html",
    templateParameters: {
      sprite: readFileSync(resolve(import.meta.dirname, "public/sprite.svg"), "utf-8"),
    },
  },
  performance: {
    removeConsole: command !== "dev",
  },
  plugins: [
    pluginEslint({
      enable: true,
      eslintPluginOptions: {
        configType: "flat",
        cwd: import.meta.dirname,
        exclude: ["dist", "node_modules"],
        flags: ["unstable_native_nodejs_ts_config"],
      },
    }),
    pluginReact(),
    pluginTypeCheck(),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "src"),
      "@/ui": resolve(import.meta.dirname, "src/theme/components"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  source: {
    define: publicVars,
    entry: {
      index: resolve(import.meta.dirname, "src/index.tsx"),
    },
    exclude: [resolve(import.meta.dirname, "dist")],
  },
  tools: {
    rspack: (config, { appendPlugins }): Rspack.Configuration | void => {
      appendPlugins([new VanillaExtractPlugin()]);

      config.optimization = {
        ...config.optimization,
        minimize: command !== "dev",
      };
    },
  },
}));

export default config;
