import React from "react"
import Link from "next/link"
import { Box, ListItem, UnorderedList } from "@chakra-ui/react"

interface Props {
  children: { text: string; level: number }[]
}

const TableOfContents = ({ children }: Props) => {
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "")

  // Implement a Table of Contents based on depth levels
  return (
    <Box as="nav" mt={8}>
      <UnorderedList>
        {children.map((heading) => (
          <ListItem key={heading.text}>
            <Link href={`#${slugify(heading.text)}`}>
              <a>{heading.text}</a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default TableOfContents
