/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
  ],
  layers: {
    "no-tailwind": {
      // Add any styles you want to disable here
      ".no-tailwind": {
        all: "unset",
      },
    },
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        blog: "url(/blogs/bg.svg)",
        "all-blogs": "url(/blogs/all_blogs_bg.svg)",
        50: "50%, 50%",
        "get-started": "url(/get_started/ellipse.svg)",
        careers: "url(/careers/mainbg.svg)",
        faq: "url(/faq/bg.svg)",
        herobg: "url(/herobg.svg)",
        "products-bg": "url(/products_bg.svg)",
        "service-banner": "url(/services/banner-bg.svg)",
      },

      colors: {
        /*   =============================== TERMOR START ==================================== */
        // light mode
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229",
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: "#131A2B",
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[700],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
        /*   =============================== TERMOR END ==================================== */

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        blue: {
          1: "#4982FBD9",
        },

        primary: {
          DEFAULT: "#001C48",
          foreground: "#fff",
          700: "#177fca",
          600: "#a7ceeb",
          500: "#c1ddf1",
          400: "#daebf7",
          300: "#ecf5fb",
          200: "#f4f9fd",
          100: "#fcfdfe",
        },
        secondary: {
          DEFAULT: "#78c1fa",
          foreground: "#ffe0e6",
          800: "#ff5d5d",
          700: "#78c1fa",
          600: "#e92b58",
          500: "#20bf55",
          400: "#E53B3A",
          300: "#FF4241",
          200: "#eaf8ec",
          100: "#ffe0e6",
        },
        ui: {
          700: "#262626",
          600: "#333",
          500: "#666666",
          400: "#999",
          300: "#ccc",
          200: "#e6e6e6",
          100: "#fcfcfc",
        },

        accent: {
          teal: "#008080",
          green: "#228b22",
        },
        reddish: {
          1: "#E53B3A",
          2: "#FF4241",
          3: "#CD3534",
        },

        translucent: {
          light: {
            100: "rgba(255,255,255,0.1)",
            200: "rgba(255,255,255,0.2)",
            300: "rgba(255,255,255,0.3)",
            400: "rgba(255,255,255,0.4)",
            500: "rgba(255,255,255,0.5)",
            600: "rgba(255,255,255,0.6)",
            700: "rgba(255,255,255,0.7)",
          },
          dark: {
            100: "rgba(0,0,0,0.1)",
            200: "rgba(0,0,0,0.2)",
            300: "rgba(0,0,0,0.3)",
            400: "rgba(0,0,0,0.4)",
            500: "rgba(0,0,0,0.5)",
            600: "rgba(0,0,0,0.6)",
            700: "rgba(0,0,0,0.7)",
          },
        },

        why_bg: "#0A2540",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
