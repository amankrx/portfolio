import { useEffect } from "react"
import useSWR from "swr"
import { Flex } from "@chakra-ui/react"
import fetcher from "../lib/fetcher"
import { AiFillEye } from "react-icons/ai"

interface Views {
  total: number
}

export default function ViewCounter({ slug }: { slug: string }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      })

    registerView()
  }, [slug])

  return (
    <Flex align="center" justify="center">
      <Flex mr={0.5} mb={0.3}>
        <AiFillEye size={18} />{" "}
      </Flex>
      {`${views > 0 ? views.toLocaleString() : "–––"} views`}
    </Flex>
  )
}
