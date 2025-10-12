// app/contact/page.tsx
import { ContactForm } from '@/components/contact-form';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${siteConfig.name}`,
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-10rem)] items-center bg-background">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative px-4 py-8">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          {/* Header */}
          <div className="animate-fade-in-up animation-delay-0 space-y-6 text-center opacity-0">
            <div className="space-y-4">
              <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                Get in Touch
              </h1>
              <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/60" />
            </div>

            <div className="mx-auto max-w-lg space-y-4 text-base text-muted-foreground md:text-lg">
              <p>
                Have a question or want to work together? You can reach out to
                me via{' '}
                <Link
                  href={siteConfig.links.email.url}
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  email
                </Link>
                ,{' '}
                <Link
                  href={siteConfig.links.linkedin.url}
                  target="_blank"
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  LinkedIn
                </Link>
                , or{' '}
                <Link
                  href={siteConfig.links.x.url}
                  target="_blank"
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  X
                </Link>
                .
              </p>
              <p>
                Or fill out the form below and I&#39;ll get back to you as soon
                as possible.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up animation-delay-200 opacity-0">
            <div className="rounded-2xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
