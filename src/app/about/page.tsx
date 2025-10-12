import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { MdComputer, MdEmail } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'About Me',
  description: `${siteConfig.name}'s personal and professional journey`,
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <section className="container relative px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-16">
          {/* Header Section */}
          <div
            className="animate-fade-in-up space-y-4 opacity-0"
            style={{ animationDelay: '0ms' }}
          >
            <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
              About Me
            </h1>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/60" />
          </div>

          {/* Main About Section */}
          <div
            className="animate-fade-in-up prose prose-lg mx-auto space-y-6 opacity-0 dark:prose-invert"
            style={{ animationDelay: '100ms' }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey in technology began at{' '}
              <span className="font-semibold text-foreground">
                Indian Institute of Information Technology, Nagpur
              </span>
              , where I earned a BTech in Computer Science. It was there that I
              discovered my passion for systems programming and designing
              efficient software architectures.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently, I&#39;m a Backend Developer at{' '}
              <span className="font-semibold text-foreground">Fortanix</span>,
              where I specialize in creating secure, scalable distributed
              systems. My work revolves around pushing the limits of secure
              computing, exploring innovative ways to enhance system security
              and performance.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I&#39;m deeply invested in systems programming, particularly with{' '}
              <span className="font-semibold text-foreground">Rust</span>. Its
              balance of memory safety and performance captivated me, and
              it&#39;s now my go-to language for critical systems projects. I
              actively contribute to the Rust ecosystem, driven by a belief in
              the power of open-source collaboration.
            </p>
          </div>

          {/* Work History and GitHub Links */}
          <div
            className="animate-fade-in-up flex flex-col gap-4 opacity-0 sm:flex-row"
            style={{ animationDelay: '200ms' }}
          >
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
              <Link href={siteConfig.links.github.url} target="_blank">
                <FaGithub className="mr-2 h-4 w-4" />
                {siteConfig.links.github.label}
              </Link>
            </Button>
          </div>

          {/* Beyond Work Section */}
          <div
            className="animate-fade-in-up space-y-8 opacity-0"
            style={{ animationDelay: '300ms' }}
          >
            <div className="space-y-4">
              <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                Beyond the Code
              </h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/60" />
            </div>

            <div className="prose prose-lg mx-auto space-y-6 dark:prose-invert">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Outside of work, I enjoy exploring the intersection of
                technology and creativity. Optimizing my development environment
                is one of my favorite pursuits—whether it&#39;s experimenting
                with mechanical keyboards or setting up ergonomic monitor
                configurations. I believe that the right tools elevate both
                productivity and satisfaction.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Music is my creative outlet, with fingerstyle guitar as my
                primary focus. The precision and expressiveness of this playing
                style resonate deeply with me. In many ways, the discipline
                required to master fingerstyle techniques mirrors the dedication
                needed in software development.
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
            >
              <Link href={siteConfig.links.setup.url}>
                <MdComputer className="mr-2 h-4 w-4" />
                {siteConfig.links.setup.label}
              </Link>
            </Button>
          </div>

          {/* Contact Section */}
          <div
            className="animate-fade-in-up space-y-8 opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            <div className="space-y-4">
              <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                Let&#39;s Connect
              </h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/60" />
            </div>

            <div className="prose prose-lg mx-auto dark:prose-invert">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&#39;m always eager to connect with fellow developers, tech
                enthusiasts, and musicians. Whether it&#39;s discussing system
                architecture, debating programming paradigms, sharing guitar
                tips, or exploring new collaboration opportunities, feel free to
                reach out.
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
  );
}
