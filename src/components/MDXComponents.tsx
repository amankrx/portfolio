/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import Image from "next/image"
import {
  AspectRatio,
  Text,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react"

const MDXComponents = {
  img: ({ alt, src }: any) => {
    return (
      <Center>
        <AspectRatio pos="relative" width="80%" ratio={4 / 3}>
          <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </AspectRatio>
      </Center>
    )
  },
  a: ({ href, children }: any) => {
    return (
      <Link href={href} passHref>
        <Text as="a">{children}</Text>
      </Link>
    )
  },
  p: ({ children }: any) => {
    return (
      <Text as="p" fontSize={"lg"}>
        {children}
      </Text>
    )
  },
  table: ({ children }: any) => {
    return (
      <TableContainer>
        <Table>{children}</Table>
      </TableContainer>
    )
  },
  thead: ({ children }: any) => {
    return <Thead>{children}</Thead>
  },
  th: ({ children }: any) => {
    return <Th>{children}</Th>
  },
  tbody: ({ children }: any) => {
    return <Tbody>{children}</Tbody>
  },
  tr: ({ children }: any) => {
    return <Tr>{children}</Tr>
  },
  td: ({ children }: any) => {
    return <Td>{children}</Td>
  },
  tfoot: ({ children }: any) => {
    return <Tfoot>{children}</Tfoot>
  },
  ul: ({ children }: any) => {
    return <UnorderedList>{children}</UnorderedList>
  },
  ol: ({ children }: any) => {
    return <OrderedList>{children}</OrderedList>
  },
  li: ({ children }: any) => {
    return (
      <ListItem fontSize={"lg"} mt={2}>
        {children}
      </ListItem>
    )
  },
}

export default MDXComponents
