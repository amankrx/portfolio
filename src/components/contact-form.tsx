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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-sm">
                <LuUser className="h-3.5 w-3.5" />
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="h-9 transition-all focus:border-primary/50"
                />
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
              <FormLabel className="flex items-center gap-2 text-sm">
                <LuMail className="h-3.5 w-3.5" />
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="john@example.com"
                  type="email"
                  {...field}
                  className="h-9 transition-all focus:border-primary/50"
                />
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
              <FormLabel className="flex items-center gap-2 text-sm">
                <LuMessageSquare className="h-3.5 w-3.5" />
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="min-h-[80px] resize-y transition-all focus:border-primary/50"
                  maxLength={300}
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
          size="default"
          className="group relative w-full overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25 sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <LuLoader className="relative z-10 mr-2 h-4 w-4 animate-spin" />
              <span className="relative z-10">Sending...</span>
            </>
          ) : (
            <>
              <LuSend className="relative z-10 mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="relative z-10">Send Message</span>
            </>
          )}
          <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </Button>
      </form>
    </Form>
  );
}
