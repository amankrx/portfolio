import { ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Container, Box, Flex, Spacer } from "@chakra-ui/react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW="7xl" minH="100vh" pos="relative">
      <Flex flexDirection="column" justifyContent="space-between" minH="100vh">
        <Navbar />
        <Box as={"main"} pt={12}>
          {children}
        </Box>
        <Spacer />
        <Footer />
      </Flex>
    </Container>
  )
}

export default Layout
