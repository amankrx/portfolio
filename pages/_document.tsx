// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import colorTheme from "../themes/colorTheme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="I'm a 21-year-old aspiring software engineer, currently pursuing my BTech in Computer Science and Engineering from IIIT Nagpur. I'm currently working on my projects and looking for new opportunities. I'm passionate about learning new technologies, contributing to open-source and solving problems."
          />
          <meta
            name="keywords"
            content="Aman, Aman Kumar, GSoC, Gnome, Portfolio, amankrx"
          />
          <meta name="author" content="Aman Kumar" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={colorTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
