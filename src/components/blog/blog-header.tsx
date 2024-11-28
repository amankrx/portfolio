// src/components/blog/blog-header.tsx
export function BlogHeader() {
  return (
    <div className="space-y-4">
      <h1 className="font-sans text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Blog
      </h1>
      <p className="text-xl text-muted-foreground">
        Insights on Rust, backend development, system design, and algorithms,
        written to be helpful and approachable.
      </p>
    </div>
  );
}
