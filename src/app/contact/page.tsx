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
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <div className="prose prose-lg dark:prose-invert">
            Have a question or want to work together? You can reach out to me
            via <Link href={siteConfig.links.email.url}>email</Link>,{' '}
            <Link href={siteConfig.links.linkedin.url}>LinkedIn</Link>, or{' '}
            <Link href={siteConfig.links.x.url}>X</Link>. Or fill out the form
            below and I&apos;ll get back to you as soon as possible.
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
