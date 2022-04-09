import React from "react"
import Link from "next/link"
import {
  Box,
  ListItem,
  List,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import { useScrollSpy } from "../hooks/useScrollSpy"
interface Props {
  children: { text: string; id: string; level: number }[]
}

const TableOfContents = ({ children }: Props) => {
  const activeId = useScrollSpy(
    children.map(({ id }) => `[id="${id ? id.replaceAll("#", "") : ""}"]`),
    {
      rootMargin: "0% 0% -80% 0%",
    }
  )
  const ContentsText = useColorModeValue("textMediumLight", "textMediumDark")
  return (
    <Box as="nav" mt={8}>
      <Heading size="md" mb={3}>
        TABLE OF CONTENTS
      </Heading>
      <List>
        {children.map((heading) => (
          <ListItem
            key={heading.text}
            ml={heading.level === 2 ? 0 : heading.level === 3 ? 3 : 6}
            color={heading.id === `#${activeId}` ? "brand" : ContentsText}
            aria-current={
              heading.id === `#${activeId}` ? "location" : undefined
            }
            mb={2}
            _hover={{
              color: "brand",
            }}
          >
            <Link href={heading.id}>
              <a>{heading.text}</a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default TableOfContents
