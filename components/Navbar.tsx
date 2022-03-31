import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorMode,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { BsMoonStarsFill, BsSun } from "react-icons/bs"

const NAV_LINKS = [
  {
    name: "blog",
    link: "/blog",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "work",
    link: "/work",
  },
  {
    name: "contact",
    link: "/contact",
  },
]

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as="nav">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          bg="transparent"
          _hover={{
            bg: "transparent",
          }}
          _focus={{ boxShadow: "none" }}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Link
            href="/"
            _hover={{
              textDecoration: "none",
              color: "brand",
            }}
            _focus={{ boxShadow: "none" }}
          >
            Logo
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                px={2}
                py={1}
                _hover={{
                  textDecoration: "none",
                  color: "brand",
                }}
                _focus={{ boxShadow: "none" }}
                href={link.link}
              >
                {link.name}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            bg="transparent"
            _hover={{
              bg: "transparent",
            }}
            _focus={{ boxShadow: "none" }}
            w="fit-content"
          >
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                px={2}
                py={1}
                _hover={{
                  textDecoration: "none",
                }}
                _focus={{ boxShadow: "none" }}
                href={link.link}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Navbar
