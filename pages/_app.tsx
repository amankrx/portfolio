import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../layouts/Layout"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "../components/MDXComponents"
import type { AppProps } from "next/app"
import theme from "../themes/theme"
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
