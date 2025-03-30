/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        consolas: ["Consolas", "monospace"],
      },
      utilities: {
        ".strong2": {
          fontWeight: "bold",
        },
      },
      colors: {
        background: "#222",
        backgroundLight: "#2b2e31",
        textLight: "#E4E4E4",
        primary: {
          DEFAULT: "#42687D",
          200: "#A2BBCB",
          300: "#809FB3",
          400: "#688AA0",
          500: "#42687D",
          600: "#42687D",
          700: "#335467",
          800: "#264252",
          900: "#152D3A",
        },
        success: {
          DEFAULT: "#44AA99",
          200: "#8ACEC3",
          300: "#809FB3",
          400: "#44AA99",
          500: "#359A88",
          600: "#F29F4C",
          700: "#2C7D6C",
        },
        error: {
          DEFAULT: "#CC6677",
          200: "#D67A8C",
          300: "#809FB3",
          400: "#CC6677",
          500: "#C45A65",
          600: "#B45461",
          700: "#9E4E5B",
          800: "#884955",
          900: "#653C48",
        },
      },
      typography: /** @type {any} */ (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.textLight"),
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.500"),
              },
            },
            h3: {
              color: theme("colors.textLight"),
            },
            strong: {
              color: theme("colors.success.DEFAULT"),
            },
            strong2: {
              fontWeight: "bold",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],

  // Classes which may be used in the dynamic HTML content (e.g. from product markdown/JSON content through API)
  safelist: [

    // Layout & Flexbox
    'flex',
    'flex-col',
    'flex-1',
    'flex-shrink-0',
    'flex-wrap',
    'items-center',
    'items-stretch',
    'justify-center',
    'gap-2',

    // Spacing (Padding & Margin)
    'p-5',
    'p-4',
    'p-1',
    'p-0',
    'px-0',
    'px-2',
    'px-3',
    'px-5',
    'pr-5',
    'pr-10',
    'pr-12',
    'pb-10',
    'pb-20',
    'm-1',
    'm-2',
    'm-3',
    'mr-2',
    'mx-2',
    'mx-auto',

    // Width & Height
    'w-full',
    'w-5',
    'w-[200px]',
    'w-[240px]',
    'w-[250px]',
    'w-[300px]',
    'w-[400px]',
    'w-[500px]',
    'h-5',
    'h-full',
    'min-h-[4rem]',
    'h-[calc(100vh - 4rem)]',

    // Background & Text
    'bg-backgroundLight',
    'bg-success',
    'text-white',
    'prose',
    'prose-white',

    // Responsive Design
    'md:px-[20%]',
    'lg:px-[32%]',

    // Other
    'cursor-pointer',

    // Custom Classes
    'description',
    'note',
    'service-tak',
    'cards-container'

  ],
};
