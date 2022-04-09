import { ReactNode } from "react"
import { useMediaQuery, Box } from "@chakra-ui/react"

const MobileLayout = ({ children }: { children: ReactNode }) => {
  const [isMobile] = useMediaQuery("(max-width: 1280px)")
  if (!isMobile) {
    return (
      <Box maxW={"4xl"} pos="relative">
        {children}
      </Box>
    )
  } else {
    return (
      <Box maxW={"full"} pos="relative" mx={0}>
        {children}
      </Box>
    )
  }
}
export default MobileLayout
