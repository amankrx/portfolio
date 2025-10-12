// app/about/setup/page.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
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
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Header */}
          <div className="animate-fade-in-up animation-delay-0 space-y-6 opacity-0">
            <Button
              variant="ghost"
              asChild
              className="group -ml-2 hover:bg-primary/5"
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
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/60" />
            </div>

            <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
              A detailed look at the tools and equipment I use daily for
              development, content creation, and music. My setup is constantly
              evolving as I experiment with new ways to optimize my workflow and
              comfort.
            </p>
          </div>

          {/* Setup Categories */}
          <div className="space-y-8">
            {setupCategories.map((category, categoryIndex) => {
              const delayClass = `animation-delay-${Math.min(900, 100 + categoryIndex * 100)}`;
              return (
                <div
                  key={category.title}
                  className={`animate-fade-in-up group relative overflow-hidden rounded-2xl border border-primary/10 bg-card/50 opacity-0 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${delayClass}`}
                >
                  <div className="via-primary/3 pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative p-6 md:p-8">
                    {/* Category Header */}
                    <div className="mb-6 flex items-center gap-4 border-b border-primary/10 pb-4">
                      <div className="rounded-xl bg-primary/10 p-3 transition-all group-hover:scale-110 group-hover:bg-primary/20">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold transition-colors group-hover:text-primary md:text-3xl">
                        {category.title}
                      </h2>
                    </div>

                    {/* Items Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="group/item space-y-3 rounded-xl bg-background/50 p-4 transition-all hover:bg-background/80 hover:shadow-md"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover/item:text-primary">
                              {item.name}
                            </h3>
                            <IoMdArrowForward className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100" />
                          </div>

                          <ul className="space-y-2">
                            {item.specs.map((spec, specIndex) => (
                              <li
                                key={spec}
                                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors group-hover/item:text-foreground"
                              >
                                <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0">
                                  <span
                                    className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-primary opacity-0 group-hover/item:opacity-75"
                                    style={{
                                      animationDelay: `${specIndex * 100}ms`,
                                    }}
                                  />
                                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                                </span>
                                <span className="leading-relaxed">{spec}</span>
                              </li>
                            ))}
                          </ul>
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
            <div className="via-primary/3 space-y-6 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent p-8 backdrop-blur-sm md:p-10">
              <div className="space-y-2">
                <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-1 text-2xl font-bold text-transparent md:text-3xl">
                  Want to know more?
                </h2>
                <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-primary to-primary/60" />
              </div>

              <p className="text-base text-muted-foreground md:text-lg">
                If you&#39;re curious about any specific part of my setup or
                want to want to discuss workspace optimization, feel free to
                reach out. always happy to share experiences and learn from
                others&#39; setups as well.
              </p>

              <Button
                size="lg"
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="/contact">
                  <MdEmail className="relative z-10 mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
