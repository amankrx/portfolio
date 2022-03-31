import nodemailer from "nodemailer"
import DETAILS from "../../lib/personalDetails"
import dotenv from "dotenv"
import { NextApiRequest, NextApiResponse } from "next"

dotenv.config()

interface MessageBody {
  name: string
  email: string
  message: string
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const ContactService = async (props: MessageBody) => {
  const messageBody = `
        <h2>Message:</h2>
        <p>${props.message}</p>
        <p>Regards, <br />${props.name}</p>
    `

  const mailOptions = {
    from: props.email,
    to: DETAILS.email,
    replyTo: props.email,
    subject: `Portfolio Contact by ${props.name}`,
    html: messageBody,
  }
  try {
    const response = await transporter.sendMail(mailOptions)
    return { response }
  } catch (error) {
    return { error }
  }
}

const emailService = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body
  if (email === "" || name === "" || message === "") {
    res.status(403).send("")
    return
  }

  const mailerRes = await ContactService({ name, email, message })
  res.send(mailerRes)
}

export default emailService
