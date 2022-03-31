import { ReactNode } from "react"
import { Container, useMediaQuery } from "@chakra-ui/react"

const MobileLayout = ({ children }: { children: ReactNode }) => {
  const [isMobile] = useMediaQuery("(max-width: 1280px)")
  if (!isMobile) {
    return (
      <Container maxW={"4xl"} pos="relative">
        {children}
      </Container>
    )
  } else {
    return (
      <Container maxW={"full"} pos="relative">
        {children}
      </Container>
    )
  }
}
export default MobileLayout
