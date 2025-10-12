// src/app/about/page.tsx
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { FaGithub, FaCamera } from 'react-icons/fa';
import { MdComputer, MdEmail } from 'react-icons/md';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Me - Backend Developer & Software Engineer',
  description: `Learn about ${siteConfig.name}, a Backend Developer specializing in Rust, distributed systems, and cloud infrastructure. Passionate about photography, guitar, and open-source contributions.`,
  keywords: [
    'backend developer',
    'software engineer',
    'rust developer',
    'distributed systems',
    'cloud infrastructure',
    'systems programming',
    'NativeLink',
    'IIIT Nagpur',
    'photography',
    'developer story',
  ],
  openGraph: {
    title: 'About Me - Backend Developer & Software Engineer',
    description: `Learn about ${siteConfig.name}, a Backend Developer specializing in Rust, distributed systems, and cloud infrastructure.`,
    type: 'profile',
    url: `${siteConfig.url}/about`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Me - Backend Developer & Software Engineer',
    description: `Learn about ${siteConfig.name}, a Backend Developer specializing in Rust, distributed systems, and cloud infrastructure.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  // About page structured data
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/api/og`,
      jobTitle: 'Backend Developer',
      description: siteConfig.description,
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'IIIT Nagpur',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'NativeLink',
      },
      knowsAbout: [
        'Rust Programming',
        'Backend Development',
        'Distributed Systems',
        'Cloud Infrastructure',
        'Systems Programming',
        'Remote Build Execution',
        'Kubernetes',
        'Bazel',
      ],
      sameAs: [
        siteConfig.author.github,
        siteConfig.author.linkedin,
        siteConfig.author.x,
      ],
      email: siteConfig.author.email,
    },
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${siteConfig.url}/about`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="relative min-h-screen overflow-hidden bg-background">
        {/* Subtle background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <section className="container relative px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-16">
            {/* Header Section */}
            <div className="animate-fade-in-up animation-delay-0 space-y-4 opacity-0">
              <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-2 text-5xl font-bold tracking-tight text-transparent md:text-6xl">
                About Me
              </h1>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/60" />
            </div>

            {/* Main About Section */}
            <div className="animate-fade-in-up animation-delay-100 prose prose-lg mx-auto space-y-6 opacity-0 dark:prose-invert">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I build distributed systems and backend infrastructure with a
                focus on performance, reliability, and security. I studied
                Computer Science at{' '}
                <span className="font-semibold text-foreground">
                  IIIT Nagpur
                </span>{' '}
                and fell in love with systems programming and low-level
                engineering.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I currently work at{' '}
                <span className="font-semibold text-foreground">
                  NativeLink
                </span>
                , where I contribute to Remote Build Execution, scalable
                caching, and cloud-native deployment workflows. My day-to-day
                involves optimizing Bazel build configurations, improving
                distributed caching, and maintaining production-grade Kubernetes
                deployments.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I primarily work in{' '}
                <span className="font-semibold text-foreground">Rust</span> and
                Python and enjoy designing systems that are both fast and
                correct. I contribute to open-source projects and build tools
                that make large-scale engineering more reliable and predictable.
              </p>
            </div>

            {/* Work History and GitHub Links */}
            <div className="animate-fade-in-up animation-delay-200 flex flex-col gap-4 opacity-0 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href={siteConfig.links.work.url}>
                  <span className="relative z-10">
                    {siteConfig.links.work.label}
                  </span>
                  <IoMdArrowForward className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
              >
                <Link
                  href={siteConfig.links.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  {siteConfig.links.github.label}
                </Link>
              </Button>
            </div>

            {/* Beyond Work Section */}
            <div className="animate-fade-in-up animation-delay-300 space-y-8 opacity-0">
              <div className="space-y-4">
                <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-2 text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                  Beyond the Code
                </h2>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/60" />
              </div>

              <div className="prose prose-lg mx-auto space-y-6 dark:prose-invert">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Photography and travel are how I slow down and reconnect with
                  the world. I love shooting landscapes and astrophotography —
                  capturing quiet moments, distant horizons, and the beauty of
                  night skies. Exploring new places with a camera helps me see
                  the world with patience and curiosity.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Music and guitar are another creative outlet for me. I
                  practice fingerstyle regularly, enjoying the blend of melody,
                  rhythm, and expression it allows. It&#39;s a way to unwind,
                  focus, and keep creativity alive outside of work.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I also enjoy improving developer workflows and tooling,
                  whether that means tuning a CI pipeline, optimizing editor
                  ergonomics, or automating repetitive tasks to make engineering
                  teams more effective.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  <Link
                    href="https://photography.amankrx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCamera className="relative z-10 mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    <span className="relative z-10">View Photography</span>
                    <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
                >
                  <Link href={siteConfig.links.setup.url}>
                    <MdComputer className="mr-2 h-4 w-4" />
                    My Setup
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Section */}
            <div className="animate-fade-in-up animation-delay-400 space-y-8 opacity-0">
              <div className="space-y-4">
                <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-2 text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                  Let&#39;s Connect
                </h2>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/60" />
              </div>

              <div className="prose prose-lg mx-auto dark:prose-invert">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I&#39;m always open to conversations about systems
                  engineering, Rust, distributed architecture, photography, or
                  collaborative projects. If you have an idea or just want to
                  say hi, feel free to reach out.
                </p>
              </div>

              <Button
                size="lg"
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href={siteConfig.links.contact.url}>
                  <span className="relative z-10">Get in Touch</span>
                  <MdEmail className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
