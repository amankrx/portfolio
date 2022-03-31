import axios from "axios"

interface SendMailProps {
  name: string
  email: string
  message: string
}

const sendContactMail = async ({ name, email, message }: SendMailProps) => {
  const data = {
    name,
    email,
    message,
  }

  try {
    await axios({
      method: "post",
      url: "/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    })
    return true
  } catch (error) {
    return false
  }
}

export default sendContactMail
