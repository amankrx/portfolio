// app/contact/page.tsx
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together? Fill out the form below
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
