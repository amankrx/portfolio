import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';
import tailwindTypography from '@tailwindcss/typography';

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'hsl(var(--muted-foreground))',
            '--tw-prose-headings': 'hsl(var(--foreground))',
            '--tw-prose-links': 'hsl(var(--primary))',
            '--tw-prose-bold': 'hsl(var(--foreground))',
            '--tw-prose-quotes': 'hsl(var(--foreground))',
            '--tw-prose-quote-borders': 'hsl(var(--primary))',
            '--tw-prose-underline': 'hsl(var(--muted))',
            '--tw-prose-code': 'hsl(var(--foreground))',

            color: 'var(--tw-prose-body)',
            maxWidth: '75ch',

            // Paragraphs
            p: {
              marginBottom: '1.75em',
              fontSize: '1.05rem',
              lineHeight: '1.75',
              color: 'var(--tw-prose-body)',
              '&:not(:first-child)': {
                marginTop: '1.75em',
              },
            },

            // Strong/Bold
            strong: {
              color: 'var(--tw-prose-bold)',
              fontWeight: '600',
            },

            // Underline
            u: {
              textDecorationColor: 'hsl(var(--primary))',
              textDecorationThickness: '0.5px',
            },

            // Headings
            'h1, h2, h3, h4': {
              position: 'relative',
              color: 'var(--tw-prose-headings)',
              scrollMarginTop: '100px',
              fontWeight: '600',
              textDecoration: 'none',
              '@screen xl': {
                scrollMarginTop: '80px',
                '&:hover': {
                  '&::before': {
                    content: '"#"',
                    position: 'absolute',
                    left: '-1em',
                    top: '0.1em',
                    color: 'hsl(var(--primary))',
                    fontSize: '0.875em',
                    fontWeight: '400',
                    opacity: '0.75',
                    transition: 'opacity 0.4s ease-in-out',
                  },
                },
              },
              a: {
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  color: 'inherit',
                  textDecoration: 'none',
                },
              },
            },

            h1: {
              fontSize: '2rem',
              lineHeight: '1.2',
              marginTop: '2em',
              marginBottom: '1em',
              letterSpacing: '-0.025em',
            },

            h2: {
              fontSize: '1.5rem',
              lineHeight: '1.3',
              marginTop: '2.5em',
              marginBottom: '1em',
              letterSpacing: '-0.015em',
            },

            h3: {
              fontSize: '1.25rem',
              lineHeight: '1.4',
              marginTop: '2em',
              marginBottom: '0.75em',
            },

            h4: {
              fontSize: '1.125rem',
              lineHeight: '1.4',
              marginTop: '1.75em',
              marginBottom: '0.75em',
            },

            // Links
            a: {
              color: 'hsl(var(--primary))',
              textDecorationLine: 'underline',
              textDecorationColor:
                'color-mix(in srgb, hsl(var(--primary)) 25%, transparent)',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'hsl(var(--primary))',
                textDecorationColor: 'hsl(var(--primary))',
                textDecorationThickness: '1.5px',
              },
            },
            // Lists
            'ul, ol': {
              paddingLeft: '1.625em',
              marginTop: '1.75em',
              marginBottom: '1.75em',
              listStyleType: 'none', // Remove default list styles
            },

            // Unordered lists
            'ul > li': {
              position: 'relative',
              paddingLeft: '0.5em',
              marginTop: '0.75em',
              marginBottom: '0.75em',
              '&::before': {
                content: '"➔"', // Base-level arrow
                position: 'absolute',
                left: '-1.25em',
                color: 'hsl(var(--primary))',
                fontSize: '1em',
                lineHeight: 'inherit',
              },
            },

            // Ordered lists
            ol: {
              counterReset: 'list-counter',
            },

            'ol > li': {
              position: 'relative',
              paddingLeft: '0.5em',
              marginTop: '0.75em',
              marginBottom: '0.75em',
              counterIncrement: 'list-counter',
              '&::before': {
                content: 'counter(list-counter) "."', // Base-level numeric counter
                position: 'absolute',
                left: '-1em',
                color: 'hsl(var(--primary))',
                fontWeight: '500',
              },
            },

            // Nested unordered lists (first level)
            'li > ul': {
              marginTop: '0.75em',
              marginBottom: '0.75em',
              paddingLeft: '1.75em',
              '& > li::before': {
                content: '"•"', // First-level dot
                position: 'absolute',
                left: '-1em',
                color: 'hsl(var(--primary))',
                fontSize: '1em',
                lineHeight: 'inherit',
              },
            },

            // Nested ordered lists (first level)
            'li > ol': {
              marginTop: '0.75em',
              marginBottom: '0.75em',
              paddingLeft: '1.75em',
              counterReset: 'nested-counter', // Reset nested counter
              '& > li': {
                counterIncrement: 'nested-counter',
                '&::before': {
                  content: 'counter(nested-counter, lower-roman) "."', // Roman numeral
                  position: 'absolute',
                  left: '-1.5em',
                  color: 'hsl(var(--primary))',
                  fontWeight: '500',
                },
              },
            },

            // Suppress arrow for task list items
            'ul > li > input[type="checkbox"]': {
              position: 'relative',
              marginLeft: '-1.25em', // Align checkbox
            },

            'ul > li input[type="checkbox"] + span': {
              display: 'inline-block',
              marginLeft: '0.5rem', // Space between checkbox and text
            },

            'ul > li input[type="checkbox"] + span::before': {
              content: 'l', // Remove arrow for checkbox list items
            },

            'ul.todo li:before': {
              display: 'none',
            },
            // Form Input Styles
            'input[type="radio"]': {
              appearance: 'none',
              width: '1.25rem',
              height: '1.25rem',
              borderRadius: '50%',
              border: '2px solid hsl(var(--primary))',
              marginRight: '0.5rem',
              verticalAlign: 'middle',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s ease',

              '&:checked': {
                backgroundColor: 'hsl(var(--primary))',
                boxShadow: 'inset 0 0 0 4px hsl(var(--background))',
              },

              '&:focus': {
                outline: '2px solid hsl(var(--ring))',
                outlineOffset: '2px',
              },

              '&:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed',
              },
            },

            'input[type="checkbox"]': {
              appearance: 'none',
              width: '1.25rem',
              height: '1.25rem',
              borderRadius: '0.25rem',
              border: '2px solid hsl(var(--primary))',
              marginRight: '0.5rem',
              verticalAlign: 'middle',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s ease',

              '&:checked': {
                backgroundColor: 'hsl(var(--primary))',
                borderColor: 'hsl(var(--primary))',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '0.5rem',
                  height: '0.75rem',
                  borderRight: '2px solid hsl(var(--background))',
                  borderBottom: '2px solid hsl(var(--background))',
                  transform: 'translate(-50%, -50%) rotate(45deg)',
                },
              },

              '&:focus': {
                outline: '2px solid hsl(var(--ring))',
                outlineOffset: '2px',
              },

              '&:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed',
              },
            },

            // Blockquotes
            blockquote: {
              fontStyle: 'italic',
              color: 'var(--tw-prose-quotes)',
              borderLeftWidth: '3px',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              paddingLeft: '1.5rem',
              margin: '2em 0',
              fontSize: '1.1rem',
              lineHeight: '1.75',
              '& p:first-of-type': {
                marginTop: '0',
              },
              '& p:last-of-type': {
                marginBottom: '0',
              },
            },

            // Code blocks
            code: {
              fontSize: '0.875rem',
              fontFamily: 'var(--font-geist-mono)',
              backgroundColor: 'hsl(var(--muted))',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
            },

            pre: {
              backgroundColor: 'hsl(var(--muted))',
              padding: '1.25rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              fontSize: '0.875rem',
              border: '1px solid hsl(var(--border))',
              code: {
                backgroundColor: 'transparent',
                padding: '0',
                borderRadius: '0',
              },
            },

            // Images
            img: {
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5rem',
              border: '1px solid hsl(var(--border))',
            },

            // Tables
            table: {
              fontSize: '0.95rem',
              lineHeight: '1.5',
            },

            // Horizontal rules
            hr: {
              marginTop: '3em',
              marginBottom: '3em',
              borderColor: 'hsl(var(--border))',
            },
          },
        },
      }),
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [tailwindAnimate, tailwindTypography],
} satisfies Config;

export default config;
