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
  useColorModeValue,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { BsMoonStarsFill, BsSun } from "react-icons/bs"
import { useRouter } from "next/router"
import NextLink from "next/link"
import Image from "next/image"

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
  const router = useRouter()
  const color = useColorModeValue("textDark", "textLight")

  return (
    <Box
      as="nav"
      pos="sticky"
      top="0"
      bg={useColorModeValue("bgLight", "bgDark")}
      zIndex={1}
    >
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
          <NextLink href="/" passHref>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              color="brand"
              fontWeight="bold"
              fontSize="1.4rem"
              pb={1}
              mt={2}
              fontFamily="Noto Serif"
              _focus={{ boxShadow: "none" }}
            >
              <Image
                src={useColorModeValue(
                  "/brand/brandDark.svg",
                  "/brand/brandLight.svg"
                )}
                alt="Logo"
                width="68px"
                height="23px"
                objectFit="contain"
              />
            </Link>
          </NextLink>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {NAV_LINKS.map((link) => (
              <NextLink key={link.name} href={link.link} passHref>
                <Link
                  px={2}
                  py={1}
                  _hover={{
                    textDecoration: "none",
                    color: "brand",
                  }}
                  _focus={{ boxShadow: "none" }}
                  color={router.pathname === link.link ? "brand" : color}
                >
                  {link.name}
                </Link>
              </NextLink>
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
              <NextLink key={link.name} href={link.link} passHref>
                <Link
                  px={2}
                  py={1}
                  _hover={{
                    textDecoration: "none",
                  }}
                  _focus={{ boxShadow: "none" }}
                >
                  {link.name}
                </Link>
              </NextLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Navbar
