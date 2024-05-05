/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage:
      {
        "primaryRing":"url('../imgs/primaryRing.svg')",
        "roundPurple": "url('../imgs/roundPurple.svg')",
        "ringOne": "url('../imgs/rindOne.svg')",
        "ringTwo": "url('../imgs/ringTwo.svg')",
        "ringThree": "url('../imgs/ringThree.svg')",
        "ringFour": "url('../imgs/ringFour.svg')",
        "ringFive": "url('../imgs/ringFive.svg')",
        "ringSix": "url('../imgs/ringSix.svg')",
        "bigRing": "url('../imgs/intersect.svg')",
        "bigPinkRing": "url('../imgs/bigPinkRing.svg')",
        "smallPinkRing": "url('../imgs/smallPinkRing.svg')",
        "yellowRing": "url('../imgs/yellowRound.svg')",
        "bgChips": "url('../imgs/bgChips.svg')",
        "lastring": "url('../img/lastRing.svg')",
        "starGroup": "url('..img/StarGroup.svg')"

      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xs: "540px",
          sm: "720px",
          md: "960px",
          lg: "1140px",
          xl: "1200px",
        },
      },
      colors: {
        primary: {
          100: "#E1F4F3",
          200: "#C5E7E9",
          300: "#92B8BE",
          400: "#59767D",
          500: "#182327",
          600: "#111C21",
          700: "#0C151C",
          800: "#070F16",
          900: "#040B12"
        },
        layspink: "#FFE9F4",
        pageBg: "#80E2FF",
        pageYellow: "#FFD36A",
        lightYellow: "#FFFBD6",
        btnColor: "#1A1E21",
        gradiantColor: "#02B5EA"
      },
      fontFamily: {
        // Define your custom font families here
        Sentient: ["Sentient"],
        Manrope: ["Manrope"]
      },

    },
  },
  plugins: [],
}

