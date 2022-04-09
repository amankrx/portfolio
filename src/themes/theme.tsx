import { extendTheme, StyleProps } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

// Version 1: Using objects
const theme = extendTheme({
  colors: {
    brand: "#E84855",
    brandTextH2: "#F9DC5C",
    bgDark: "#121212",
    bgLight: "#fafafa",
    bgElevetedOneLight: "#f5f5f5",
    bgElevetedOneDark: "#222222",
    textPrimaryLight: "rgba(0, 0, 0, 0.87)",
    textMediumLight: "rgba(0, 0, 0, 0.6)",
    textDisabledLight: "rgba(0, 0, 0, 0.38)",
    textPrimaryDark: "rgba(255, 255, 255, 0.87)",
    textMediumDark: "rgba(255, 255, 255, 0.6)",
    textDisabledDark: "rgba(255, 255, 255, 0.38)",
  },
  styles: {
    global: (props: StyleProps) => ({
      body: {
        h1: {
          color: "brand",
          fontFamily: "Noto Serif",
          fontSize: ["2.4rem", "2.8rem", "3.5rem"],
          fontWeight: "bold",
          mt: ["2rem", "3rem"],
          textAlign: "center",
        },
        h2: {
          color: mode("brand", "brandTextH2")(props),
          fontSize: ["1.8rem", "2.4rem", "2.8rem"],
          mt: ["2rem", "3rem"],
          a: {
            textDecoration: "none",
            cursor: "pointer",
            _hover: {
              color: "brand",
            },
          },
        },
        h3: {
          fontSize: ["1.5rem", "2rem", "2.4rem"],
          mt: ["1.5rem", "2rem"],
          a: {
            textDecoration: "none",
            cursor: "pointer",
            _hover: {
              color: "brand",
            },
          },
        },
        h4: {
          fontSize: ["1.3rem", "1.8rem", "2rem"],
          mt: ["1.5rem", "2rem"],
          a: {
            textDecoration: "none",
            cursor: "pointer",
            _hover: {
              color: "brand",
            },
          },
        },
        small: {
          color: mode("textMediumLight", "textMediumDark")(props),
          fontSize: ["0.5rem", "0.6rem", "0.8rem"],
          mt: ["1rem", "1.5rem"],
        },
        p: {
          fontSize: ["1rem", "1.1rem", "1.2rem"],
          lineHeight: "1.5",
          mt: "1rem",
          a: {
            color: "brand",
            textDecoration: "none",
            cursor: "pointer",
            _hover: {
              textDecoration: "underline",
            },
          },
        },
        sup: {
          fontSize: ["0.8rem", "0.9rem", "1rem"],
          fontWeight: "300",
          position: "relative",
          bottom: "0.5rem",
        },
        sub: {
          fontSize: ["0.8rem", "0.9rem", "1rem"],
          fontWeight: "300",
          position: "relative",
          top: "0.5rem",
        },
        code: {
          fontSize: ["1rem", "1.2rem", "1.3rem"],
          fontFamily: "Fira Code",
          bg: mode("gray.200", "whiteAlpha.200")(props),
          padding: "0.2rem",
        },
        pre: {
          fontWeight: "300",
          mt: ["1rem", "2rem"],
          textAlign: "justify",
          bg: "gray.900",
          color: "white",
          borderRadius: "0.8rem",
          maxHeight: "28rem",
          overflow: "auto",
          overflowStyle: "none",
          code: {
            bg: "gray.900",
            fontSize: ["1rem"],
            display: "block",
            fontFamily: "Fira Code",
            overflowX: "auto",
            overflowStyle: "none",
          },
        },
        blockquote: {
          fontSize: ["1rem", "1.2rem", "1.3rem"],
          fontWeight: "300",
          mt: ["1rem", "2rem"],
          textAlign: "justify",
          bg: mode("gray.200", "whiteAlpha.200")(props),
          borderLeftWidth: "0.5rem",
          borderLeftStyle: "solid",
          borderLeftColor: "brand",
          padding: "0.2rem 1rem 2rem 1rem",
          borderRadius: "0.5rem",
          maxHeight: "20rem",
        },
        hr: {
          marginTop: "2rem",
        },
        fontFamily: "Poppins",
        color: mode("textPrimaryLight", "textPrimaryDark")(props),
        bg: mode("bgLight", "bgDark")(props),
        lineHeight: "base",
      },
    }),
  },
})

export default theme
