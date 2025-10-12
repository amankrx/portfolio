// src/components/blog/blog-header.tsx
export function BlogHeader() {
  return (
    <div className="animate-fade-in-up animation-delay-0 space-y-6 opacity-0">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent md:text-5xl">
          Blog
        </h1>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/60" />
      </div>
      <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
        Insights on Rust, backend development, system design, and algorithms,
        written to be helpful and approachable.
      </p>
    </div>
  );
}
