import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../src/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString()

    if (req.method === "POST") {
      const newOrUpdatedViews = await prisma.view_counter.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          views: {
            increment: 1,
          },
        },
      })
      return res.status(200).json({
        total: newOrUpdatedViews.views.toString(),
      })
    }

    if (req.method === "GET") {
      const views = await prisma.view_counter.findUnique({
        where: {
          slug,
        },
      })
      if (!views) {
        return res.status(404).json({
          message: "View not found",
        })
      }
      return res.status(200).json({ total: views.views.toString() })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: error })
  }
}
