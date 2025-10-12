import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { setupCategories } from '@/config/setup';

export const metadata: Metadata = {
  title: 'My Setup',
  description: `${siteConfig.name}'s setup`,
};

export default function SetupPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background elements - more subtle */}
      <div className="pointer-events-none absolute inset-0">
        <div className="from-primary/3 absolute left-1/4 top-20 h-96 w-96 rounded-full bg-gradient-to-br to-transparent blur-3xl" />
        <div className="from-primary/3 absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br to-transparent blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Header */}
          <div className="animate-fade-in-up animation-delay-0 space-y-6 opacity-0">
            <Button
              variant="ghost"
              asChild
              className="group -ml-2 hover:bg-accent"
            >
              <Link href="/about">
                <IoMdArrowBack className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to About
              </Link>
            </Button>

            <div className="space-y-4">
              <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                My Setup
              </h1>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-foreground/80 to-foreground/40" />
            </div>

            <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
              A curated collection of tools and equipment that power my daily
              work in software development, content creation, and photography.
              This setup has evolved over time to balance performance,
              ergonomics, and creativity.
            </p>
          </div>

          {/* Setup Categories */}
          <div className="space-y-6">
            {setupCategories.map((category, categoryIndex) => {
              const delayClass = `animation-delay-${Math.min(900, 100 + categoryIndex * 100)}`;
              return (
                <div
                  key={category.title}
                  className={`animate-fade-in-up group relative overflow-hidden rounded-2xl border bg-card opacity-0 transition-all duration-300 hover:shadow-lg ${delayClass}`}
                >
                  <div className="relative p-6 md:p-8">
                    {/* Category Header */}
                    <div className="mb-6 flex flex-col gap-3 border-b pb-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-accent p-3 transition-all group-hover:scale-105">
                          <category.icon className="h-6 w-6 text-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h2 className="text-2xl font-bold md:text-3xl">
                            {category.title}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="group/item flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                        >
                          <div className="via-primary/3 pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />

                          {/* Item Header */}
                          <div className="relative space-y-1 border-b border-primary/10 bg-accent/30 px-5 py-4">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-lg font-semibold leading-tight transition-colors group-hover/item:text-primary">
                                {item.name}
                              </h3>
                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="relative z-10 shrink-0 rounded-lg p-1.5 text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary"
                                  aria-label={`View ${item.name}`}
                                >
                                  <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </a>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          </div>

                          {/* Item Features */}
                          <div className="relative flex-1 p-5">
                            <ul className="space-y-3">
                              {item.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover/item:text-foreground"
                                >
                                  <svg
                                    className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40 transition-colors group-hover/item:text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in-up animation-delay-700 opacity-0">
            <div className="space-y-6 rounded-2xl border bg-card p-8 shadow-sm md:p-10">
              <div className="space-y-2">
                <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-1 text-2xl font-bold text-transparent md:text-3xl">
                  Questions About My Setup?
                </h2>
                <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-foreground/80 to-foreground/40" />
              </div>

              <p className="text-base text-muted-foreground md:text-lg">
                Curious about specific gear choices or considering similar
                equipment? I&#39;m happy to share more details about my
                experience with any of these tools, recommendations, or discuss
                workspace optimization strategies.
              </p>

              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  <MdEmail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
