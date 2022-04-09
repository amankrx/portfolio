import { useState } from "react"
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react"
import * as Yup from "yup"
import { Formik, Form, Field, FormikState, FieldInputProps } from "formik"
import sendContactMail from "../lib/contact"

interface ContactFormProps {
  name: string
  email: string
  message: string
}

interface FormProps {
  field: FieldInputProps<string>
  form: FormikState<ContactFormProps>
}

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name is too short!")
    .max(25, "Your name is too long!")
    .required("Your name is Required"),

  email: Yup.string().email("Invalid email").required("Your Email is Required"),

  message: Yup.string()
    .min(10, "Too Short! Must be 10 characters minimum")
    .max(250, "Too Long! Must be 250 characters maximum")
    .required("Your Message is Required"),
})

const ContactForm = () => {
  const [status, setStatus] = useState({
    success: false,
    message: "Send",
  })
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={async (values, actions) => {
        const messageVerdict = await sendContactMail(values)
        actions.setSubmitting(false)
        actions.resetForm()
        setStatus({
          success: messageVerdict ? true : false,
          message: messageVerdict ? "Message Sent" : "Message Failed",
        })
      }}
    >
      {(props) => (
        <Form>
          <Field name="name">
            {({ field, form }: FormProps) => (
              <FormControl
                isInvalid={form.errors.name !== undefined && form.touched.name}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...field} id="name" placeholder="Aman Kumar" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }: FormProps) => (
              <FormControl
                isInvalid={
                  form.errors.email !== undefined && form.touched.email
                }
              >
                <FormLabel htmlFor="email" mt={4}>
                  Email
                </FormLabel>
                <Input {...field} id="email" placeholder="username@email.com" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="message">
            {({ field, form }: FormProps) => (
              <FormControl
                isInvalid={
                  form.errors.message !== undefined && form.touched.message
                }
              >
                <FormLabel htmlFor="message" mt={4}>
                  Message
                </FormLabel>
                <Textarea
                  {...field}
                  id="message"
                  rows={5}
                  placeholder="A message between 10 and 250 characters."
                />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            color="white"
            bg={status.success ? "green.500" : "brand"}
            isDisabled={props.isSubmitting || status.success}
            isLoading={props.isSubmitting}
            _hover={{
              bg: "gray.700",
            }}
            type="submit"
          >
            {status.message}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
