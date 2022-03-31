import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import ContactForm from "./ContactForm"
import DETAILS from "../lib/personalDetails"
import MobileLayout from "../layouts/MobileLayout"

const mailTo =
  "mailto:" +
  DETAILS.email +
  "?subject=Hello%20" +
  DETAILS.firstName +
  "&body=Hi%20" +
  DETAILS.firstName +
  "%20" +
  DETAILS.lastName

const ContactPage = () => {
  return (
    <Flex>
      <MobileLayout>
        <Box>
          <h1>/contact</h1>
          <p>
            Got any questions or have any work opportunities? Feel free to send
            an email to me at <a href={mailTo}>{DETAILS.email}</a> or fill out
            the form below.
          </p>
          <Box
            padding={8}
            borderWidth={1}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderRadius={12}
            mt={4}
          >
            <ContactForm />
          </Box>
        </Box>
      </MobileLayout>
    </Flex>
  )
}

export default ContactPage
