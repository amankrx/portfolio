import * as z from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name must be less than 30 characters')
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(50, 'Email must be less than 50 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(300, 'Message must be less than 300 characters'),
});

export type FormData = z.infer<typeof formSchema>;
