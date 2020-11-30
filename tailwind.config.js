const mode = process.env.NODE_ENV
const dev = mode === "development"

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
        extend: {
            colors: {
                primary: {
                    lightest: "#eee",
                    light: "#45cdcd",
                    DEFAULT: "#45cdcd",
                    dark: "#009eeb",
                },
                accent: {
                    DEFAULT: "rgb(24, 237, 227)",
                },
                gray: {
                    darkest: '#1f2d3d',
                    dark: '#3c4858',
                    welldark: 'rgb(85, 107, 112)',
                    DEFAULT: '#c0ccda',
                    light: '#e0e6ed',
                    lightest: '#f9fafc',
                }
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
