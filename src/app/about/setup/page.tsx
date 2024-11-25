'use client';

import { Button } from '@/components/ui/button';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import {
  MdComputer,
  MdKeyboard,
  MdDevices,
  MdHeadphones,
  MdChair,
  MdEmail,
} from 'react-icons/md';

const setupCategories = [
  {
    icon: MdComputer,
    title: 'Main Workstation',
    items: [
      {
        name: 'Custom Built PC',
        specs: [
          'AMD Ryzen 9 5950X',
          '32GB DDR4 RAM',
          'NVIDIA RTX 3080',
          '2TB NVMe SSD',
        ],
      },
      {
        name: 'Displays',
        specs: [
          'LG 27" 4K IPS Primary Monitor',
          'Dell 27" 1440p Secondary Monitor',
        ],
      },
    ],
  },
  {
    icon: MdKeyboard,
    title: 'Input Devices',
    items: [
      {
        name: 'Keyboards',
        specs: [
          'Custom mechanical keyboard with Zealios V2 switches',
          'Keychron K2 (backup)',
        ],
      },
      {
        name: 'Mouse',
        specs: ['Logitech MX Master 3'],
      },
    ],
  },
  {
    icon: MdDevices,
    title: 'Development Tools',
    items: [
      {
        name: 'Software',
        specs: [
          'NeoVim as primary editor',
          'tmux for terminal multiplexing',
          'zsh with custom configuration',
        ],
      },
      {
        name: 'Version Control',
        specs: ['Git with custom aliases', 'GitHub CLI tools'],
      },
    ],
  },
  {
    icon: MdHeadphones,
    title: 'Audio Setup',
    items: [
      {
        name: 'Audio Interface',
        specs: ['Focusrite Scarlett 2i2'],
      },
      {
        name: 'Microphone',
        specs: ['Shure SM7B', 'Boom arm with shock mount'],
      },
      {
        name: 'Headphones',
        specs: ['Sony WH-1000XM4 (wireless)', 'Sennheiser HD 6XX (wired)'],
      },
    ],
  },
  {
    icon: MdChair,
    title: 'Ergonomics',
    items: [
      {
        name: 'Desk',
        specs: ['Standing desk (electric)', 'Cable management system'],
      },
      {
        name: 'Chair',
        specs: ['Herman Miller Aeron'],
      },
    ],
  },
];

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="mb-12">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/about">
                <IoMdArrowBack className="mr-2 h-4 w-4" />
                Back to About
              </Link>
            </Button>
            <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl">
              My Setup
            </h1>
            <p className="text-lg text-muted-foreground">
              A detailed look at the tools and equipment I use daily for
              development, content creation, and music. My setup is constantly
              evolving as I experiment with new ways to optimize my workflow and
              comfort.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {setupCategories.map((category) => (
              <AccordionItem
                key={category.title}
                value={category.title}
                className="rounded-lg border px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <category.icon className="h-6 w-6" />
                    <span className="text-xl font-semibold">
                      {category.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 py-4">
                    {category.items.map((item) => (
                      <div key={item.name} className="space-y-2">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                          {item.specs.map((spec) => (
                            <li key={spec} className="ml-4">
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 border-t pt-8">
            <h2 className="mb-4 text-2xl font-bold">Want to know more?</h2>
            <p className="mb-6 text-muted-foreground">
              If you&#39;re curious about any specific part of my setup or want
              to discuss workspace optimization, feel free to reach out. I&#39;m
              always happy to share experiences and learn from others&#39;
              setups as well.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto">
                  <MdEmail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
