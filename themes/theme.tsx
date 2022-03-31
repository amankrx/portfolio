import { extendTheme, StyleProps } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

// Version 1: Using objects
const theme = extendTheme({
  colors: {
    brand: "#ea4e6d",
    bgDark: "#0a0a0a",
    bgLight: "#fafafa",
    textLight: "#fafafa",
    textDark: "#1a1a1a",
  },
  styles: {
    global: (props: StyleProps) => ({
      body: {
        h1: {
          color: "brand",
          fontSize: ["2.4rem", "2.8rem", "3.5rem"],
          mt: ["2rem", "3rem"],
          textAlign: "center",
        },
        h2: {
          fontSize: ["1.8rem", "2.4rem", "2.8rem"],
          mt: ["2rem", "3rem"],
        },
        h3: {
          fontSize: ["1.5rem", "2rem", "2.5rem"],
          mt: ["1.5rem", "2rem"],
        },
        h4: {
          fontSize: ["1.3rem", "1.8rem", "2rem"],
          mt: ["1.5rem", "2rem"],
        },
        small: {
          fontSize: ["0.5rem", "0.6rem", "0.8rem"],
          mt: ["1rem", "1.5rem"],
        },
        p: {
          fontSize: ["1rem", "1.2rem", "1.3rem"],
          fontWeight: "300",
          mt: ["1rem", "2rem"],
          textAlign: "justify",
        },
        a: {
          color: "brand",
          textDecoration: "none",
          cursor: "pointer",
          _hover: {
            color: mode("gray.900", "gray.50")(props),
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
          maxHeight: "24rem",
          overflow: "auto",
          code: {
            bg: "gray.900",
            fontSize: ["1rem"],
            display: "block",
            fontFamily: "Fira Code",
            overflowX: "auto",
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
          padding: "0.5rem",
          paddingLeft: "1rem",
          borderRadius: "0.5rem",
          maxHeight: "20rem",
          overflow: "auto",
        },
        hr: {
          marginTop: "2rem",
        },
        fontFamily: "Poppins",
        color: mode("textDark", "textLight")(props),
        bg: mode("bgLight", "bgDark")(props),
        lineHeight: "base",
      },
    }),
  },
})

export default theme
