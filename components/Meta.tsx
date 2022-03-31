import Head from "next/head"

interface Props {
  title?: string
  description?: string
  keywords?: string
  cover?: string
}

const Meta = ({ title, description, keywords, cover }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="cover" content={cover} />
    </Head>
  )
}

export default Meta

// let's set a default title
Meta.defaultProps = {
  title: "Aman Kumar",
  description:
    "I'm a 21-year-old aspiring software engineer, currently pursuing my BTech in Computer Science and Engineering from IIIT Nagpur. I'm currently working on my projects and looking for new opportunities. I'm passionate about learning new technologies, contributing to open-source and solving problems.",
  keywords: "Aman, Aman Kumar, GSoC, Gnome, Portfolio, amankrx",
  cover: "",
}
