import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["eslint", "typescript", "unicorn", "oxc", "import"],
  options: { typeAware: true, typeCheck: true },
  rules: {
    "import/extensions": "error",
  },
});
