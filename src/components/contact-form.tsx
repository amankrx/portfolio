// components/contact-form.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  LuMessageSquare,
  LuLoader,
  LuSend,
  LuMail,
  LuUser,
} from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { formSchema, FormData } from '@/lib/form-schema';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: 'Message sent successfully! 🎉',
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      form.reset();
    } catch {
      toast({
        title: 'Error sending message',
        description:
          'Please try again later or contact us through alternative means.',
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <LuUser className="h-4 w-4" />
                Name
              </FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <LuMail className="h-4 w-4" />
                Email
              </FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <LuMessageSquare className="h-4 w-4" />
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="min-h-[150px] resize-none"
                  {...field}
                />
              </FormControl>
              <div className="flex items-center justify-between">
                <FormMessage />
                <p className="text-xs text-muted-foreground">
                  {field.value.length}/300
                </p>
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <LuLoader className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <LuSend className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
