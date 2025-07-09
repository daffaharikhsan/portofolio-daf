import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Konfigurasi yang sudah ada sebelumnya
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // TAMBAHKAN OBJEK BARU DI BAWAH INI
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
