import type { Config } from 'tailwindcss';

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
        DEFAULT: '1rem', // Increase the default padding slightly
        sm: '0.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '100%', // Allow the container to take full width on small devices
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
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
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'hsl(var(--foreground))',
            '--tw-prose-headings': 'hsl(var(--foreground))',
            '--tw-prose-links': 'hsl(var(--primary))',
            '--tw-prose-code': 'hsl(var(--foreground))',
            '--tw-prose-quote': 'hsl(var(--muted-foreground))',
            color: 'var(--tw-prose-body)',
            maxWidth: '75ch',
            p: {
              marginBottom: '1.5em',
              fontSize: '1rem',
              lineHeight: '1.75',
              '@screen sm': {
                fontSize: '1.15rem',
              },
            },
            h1: {
              color: 'var(--tw-prose-headings)',
              fontSize: '2.5rem',
              lineHeight: '1.2',
              fontWeight: '800',
              marginTop: '2em',
              marginBottom: '1em',
              letterSpacing: '-0.025em',
              a: {
                textDecoration: 'none', // Disable anchor styles for headings
                color: 'inherit', // Inherit text color
              },
            },
            h2: {
              color: 'hsl(var(--tw-prose-headings))',
              fontSize: '2rem',
              lineHeight: '1.3',
              fontWeight: '700',
              marginTop: '2.5em',
              marginBottom: '1em',
              letterSpacing: '-0.015em',
              a: {
                textDecoration: 'none', // Disable anchor styles for headings
                color: 'inherit', // Inherit text color
              },
            },
            h3: {
              color: 'var(--tw-prose-headings)',
              fontSize: '1.5rem',
              lineHeight: '1.4',
              fontWeight: '600',
              marginTop: '2em',
              marginBottom: '0.75em',
              a: {
                textDecoration: 'none', // Disable anchor styles for headings
                color: 'inherit', // Inherit text color
              },
            },
            'ul, ol': {
              paddingLeft: '1.5rem',
              marginTop: '1.25em',
              marginBottom: '1.25em',
              fontSize: '1.125rem',
              '@screen sm': {
                fontSize: '1.25rem',
              },
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
              paddingLeft: '0.375rem',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderLeftColor: 'hsl(var(--primary))',
              paddingLeft: '1.5rem',
              marginLeft: 0,
              marginRight: 0,
              marginTop: '1.5em',
              marginBottom: '1.5em',
              fontSize: '1.125rem',
              '@screen sm': {
                fontSize: '1.25rem',
              },
            },
            code: {
              fontSize: '0.875rem',
              fontFamily: 'var(--font-geist-mono)',
              backgroundColor: 'hsl(var(--muted))',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              '@screen sm': {
                fontSize: '0.9375rem',
              },
            },
            pre: {
              backgroundColor: 'hsl(var(--muted))',
              padding: '1.25rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              fontSize: '0.875rem',
              '@screen sm': {
                fontSize: '0.9375rem',
              },
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5rem',
            },
            a: {
              // color: 'hsl(var(--primary))',
              textDecoration: 'none',
              '&:hover': {
                color: 'hsl(var(--primary))',
                opacity: 0.8,
              },
            },
            table: {
              fontSize: '1.125rem',
              '@screen sm': {
                fontSize: '1.25rem',
              },
            },
            hr: {
              marginTop: '3em',
              marginBottom: '3em',
            },
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
