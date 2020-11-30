const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
  future: {
    // for tailwind 2.0 compat
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.html"],
    // enabled: !dev, // disable purge in dev
    mode: "all",
  },
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Noto Sans", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
