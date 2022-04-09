import { ReactNode } from "react"
import { Box, useMediaQuery } from "@chakra-ui/react"

// Display the layout if the width is less than 768px
const SideLayout = ({ children }: { children: ReactNode }) => {
  const [isMobile] = useMediaQuery("(max-width: 1280px)")
  if (!isMobile) {
    return (
      <Box maxW={"xs"} pos="relative" ml={8}>
        <Box pos="sticky" top={16}>
          {children}
        </Box>
      </Box>
    )
  } else {
    return <Box display="none" pos="relative"></Box>
  }
}

export default SideLayout
