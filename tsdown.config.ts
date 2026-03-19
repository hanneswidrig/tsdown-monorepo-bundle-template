import { defineConfig } from "tsdown";

export default defineConfig({
  workspace: ["apps/*", "libs/*"],
  dts: {
    tsgo: true,
  },
  exports: {
    devExports: true,
  },
});
