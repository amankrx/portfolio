import { ReactNode } from "react"
import { Box, Container, useMediaQuery } from "@chakra-ui/react"

// Display the layout if the width is less than 768px
const SideLayout = ({ children }: { children: ReactNode }) => {
  const [isMobile] = useMediaQuery("(max-width: 1280px)")
  if (!isMobile) {
    return (
      <Container maxW={"xs"} pos="relative">
        <Box pos="sticky" top={4}>
          {children}
        </Box>
      </Container>
    )
  } else {
    return <Container display="none" pos="relative"></Container>
  }
}

export default SideLayout
