import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],

  /* 🔴 VERY IMPORTANT */
  content: [
    "./client/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      /* ================= FONTS ================= */
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
      },

      /* ================= COLORS ================= */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        neon: {
          green: "#00FF88",
          cyan: "#00FFFF",
          pink: "#FF0080",
        },
      },

      /* ================= RADIUS ================= */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ================= KEYFRAMES ================= */
      keyframes: {
        slideLeftFade: {
        '0%': { opacity: '0', transform: 'translateX(-60px) scale(0.95)' },
        '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        slideRightFade: {
          '0%': { opacity: '0', transform: 'translateX(60px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 0 rgba(4,215,141,0)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(4,215,141,0.6)',
          },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        viewGlow: {
        "0%": {
          boxShadow:
            "0 0 0 12px rgba(4,215,141,0.35), 0 0 0 24px rgba(4,215,141,0.15)",
        },

        /* Circle edge tak shrink */
        "50%": {
          boxShadow:
            "0 0 0 0px rgba(4,215,141,0.45), 0 0 0 0px rgba(4,215,141,0.25)",
        },

        "100%": {
          boxShadow:
            "0 0 0 12px rgba(4,215,141,0.35), 0 0 0 24px rgba(4,215,141,0.15)",
        },
      },

        arrowMove: {
          "0%,100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(6px)",
          },
        },

        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },

        /* 🔥 POP TEXT */
        heroPopUltra: {
          "0%": {
            opacity: "0",
            transform: "scale(0.28)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        heroPopUltraImage: {
          "0%": {
            opacity: "0",
            transform: "scale(0.24)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        verticalLoop: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },

        whatsappFloat: {
          /* 👇 BOTTOM — NO GLOW */
          "0%, 100%": {
            transform: "translateY(0)",
            boxShadow: "none",
          },

          /* 👆 TOP — STRONG GLOW */
          "50%": {
            transform: "translateY(-70px)", // 🔥 zyada upar float
            boxShadow: `
              0 0 35px rgba(37,211,102,0.9),
              0 0 70px rgba(37,211,102,0.65),
              0 0 120px rgba(37,211,102,0.4)
            `,
          },
        },

        whatsappEnter: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },

        smoothGlow: {
          "0%": {
            boxShadow:
              "0 0 0 0px rgba(4,215,141,0.0), 0 0 0 0px rgba(4,215,141,0.0)",
          },
          "100%": {
            boxShadow:
              "0 0 0 9px rgba(4, 215, 141, 0.6), 0 0 0 18px rgba(4, 215, 141, 0.3)",
          },
        },

        whatsappFloatGlow: {
          "0%": {
            transform: "translateY(0)",
            boxShadow: "none",
          },
          "45%": {
            transform: "translateY(-40px)",
            boxShadow:
              "0 0 14px rgba(37,211,102,0.45), 0 0 30px rgba(37,211,102,0.35)",
          },
          "60%": {
            transform: "translateY(-55px)",
            boxShadow:
              "0 0 26px rgba(37,211,102,0.75), 0 0 55px rgba(37,211,102,0.6)",
          },
          "100%": {
            transform: "translateY(0)",
            boxShadow: "none",
          },
        },

        /* 🔥 BUTTON GLOW */
        softGlow: {
          "0%, 100%": {
            boxShadow: `
              0 0 10px rgba(4,215,141,0.5),
              0 0 22px rgba(4,215,141,0.35),
              inset 0 0 32px rgba(4,215,141,0.22)
            `,
            color: "#04D78D",
          },
          "50%": {
            boxShadow: `
              0 0 22px rgba(4,215,141,0.9),
              0 0 44px rgba(4,215,141,0.75),
              inset 0 0 55px rgba(4,215,141,0.35)
            `,
            color: "#ffffff",
          },
        },
      },     

      /* ================= ANIMATION ================= */
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        scroll: "scroll 25s linear infinite",

        fadeUp: "fadeUp 1s ease-out forwards",
        fadeDown: "fadeDown 1s ease-out forwards",
        fadeLeft: "fadeLeft 1s ease-out forwards",
        fadeRight: "fadeRight 1s ease-out forwards",

        heroPopUltra: "heroPopUltra 1.15s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        heroPopUltraImage: "heroPopUltraImage 1.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",

        whatsappFloat: "whatsappFloat 3.6s ease-in-out infinite",
        whatsappEnter: "whatsappEnter 0.6s ease-out forwards",
        whatsappFloatGlow: "whatsappFloatGlow 3.8s ease-in-out infinite",

        softGlow: "softGlow 2.2s ease-in-out infinite",

        // ✅ COMBINED ENTRY + GLOW
        fadeDownGlow:
          "fadeDown 0.9s ease-out forwards, softGlow 2.2s ease-in-out infinite",

        fadeUpGlow:
          "fadeDown 0.9s ease-out forwards, softGlow 2.2s ease-in-out infinite",

        fadeLeftGlow:
          "fadeLeft 2s ease-out forwards, softGlow 2.2s ease-in-out infinite",

        fadeRightGlow:
          "fadeDown 1s ease-out forwards, softGlow 2.2s ease-in-out infinite",

        viewGlow: "viewGlow 2.2s ease-in-out infinite",
        arrowMove: "arrowMove 2.2s ease-in-out infinite",
        smoothGlow: "smoothGlow 0.4s ease-out forwards",

        slideLeftFade: 'slideLeftFade 1s ease-out forwards',
        slideRightFade: 'slideRightFade 1s ease-out forwards',
        glowPulse: 'glowPulse 2s ease-in-out infinite',

        verticalLoop: "verticalLoop 20s linear infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
