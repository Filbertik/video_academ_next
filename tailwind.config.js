module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        /* Primary Colors */
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },
        /* Secondary Colors */
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          accent: "var(--secondary-accent)",
          muted: "var(--secondary-muted)",
        },
        /* Text Colors */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          white: "var(--text-white)",
        },
        /* Background Colors */
        background: {
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          accent: "var(--bg-accent)",
          dark: "var(--bg-dark)",
        },
        /* Border Colors */
        border: {
          primary: "var(--border-primary)",
          accent: "var(--border-accent)",
        },
        /* Component-specific Colors */
        header: {
          text: "var(--header-text)",
          background: "var(--header-bg)",
        },
        button: {
          primary: {
            background: "var(--button-primary-bg)",
            text: "var(--button-primary-text)",
          },
          secondary: {
            background: "var(--button-secondary-bg)",
            text: "var(--button-secondary-text)",
          },
          border: "var(--button-border)",
        },
        input: {
          background: "var(--input-bg)",
          text: "var(--input-text)",
          border: "var(--input-border)",
        },
        modal: {
          background: "var(--modal-bg)",
          overlay: "var(--modal-overlay)",
        },
      },
      /* Typography */
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
        "7xl": "var(--font-size-7xl)",
        "8xl": "var(--font-size-8xl)",
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
        extrabold: "var(--font-weight-extrabold)",
      },
      lineHeight: {
        xs: "var(--line-height-xs)",
        sm: "var(--line-height-sm)",
        base: "var(--line-height-base)",
        lg: "var(--line-height-lg)",
        xl: "var(--line-height-xl)",
        "2xl": "var(--line-height-2xl)",
        "3xl": "var(--line-height-3xl)",
        "4xl": "var(--line-height-4xl)",
        "5xl": "var(--line-height-5xl)",
        "6xl": "var(--line-height-6xl)",
        "7xl": "var(--line-height-7xl)",
        "8xl": "var(--line-height-8xl)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        sansation: ["Sansation", "sans-serif"],
      },
      /* Spacing */
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
        "5xl": "var(--spacing-5xl)",
        "6xl": "var(--spacing-6xl)",
        "7xl": "var(--spacing-7xl)",
        "8xl": "var(--spacing-8xl)",
        "9xl": "var(--spacing-9xl)",
        "10xl": "var(--spacing-10xl)",
        "11xl": "var(--spacing-11xl)",
        "12xl": "var(--spacing-12xl)",
        "13xl": "var(--spacing-13xl)",
        "14xl": "var(--spacing-14xl)",
        "15xl": "var(--spacing-15xl)",
        "16xl": "var(--spacing-16xl)",
        "17xl": "var(--spacing-17xl)",
      },
      /* Border Radius */
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        "4xl": "var(--radius-4xl)",
        full: "var(--radius-full)",
      },
    },
  },
  plugins: [],
};
