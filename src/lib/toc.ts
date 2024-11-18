// src/lib/toc.ts
interface Heading {
  id: string;
  level: number;
  text: string;
}

export function extractHeadingsFromCode(code: string): Heading[] {
  const headings: Heading[] = [];
  const headingRegex = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h\1>/g;

  let match;
  while ((match = headingRegex.exec(code)) !== null) {
    const [, level, id, text] = match;

    // Clean the text content by removing HTML tags
    const cleanText = text.replace(/<[^>]*>/g, '');

    headings.push({
      level: parseInt(level, 10),
      id,
      text: cleanText,
    });
  }
  console.log(headings);

  return headings;
}
