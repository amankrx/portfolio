import {
  MdComputer,
  MdKeyboard,
  MdHeadphones,
  MdCameraAlt,
  MdDeveloperMode,
} from 'react-icons/md';
import { IconType } from 'react-icons';

interface SetupItem {
  name: string;
  description: string;
  link?: string;
  features: string[];
}

interface SetupCategory {
  icon: IconType;
  title: string;
  description: string;
  items: SetupItem[];
}

export const setupCategories: SetupCategory[] = [
  {
    icon: MdComputer,
    title: 'Computing',
    description: 'Primary and secondary machines for different workflows',
    items: [
      {
        name: 'MacBook Pro M3 Max',
        description: '36GB RAM | 512GB SSD | 14-core CPU, 30-core GPU',
        link: 'https://www.apple.com/macbook-pro/',
        features: [
          'Main development machine for heavy workloads',
          'Perfect for running multiple VMs and containers',
          'Handles 4K video editing smoothly',
          'Powers all intensive development tasks',
        ],
      },
      {
        name: 'MacBook Air M2',
        description: '16GB RAM | 256GB SSD | 8-core CPU',
        link: 'https://www.apple.com/macbook-air/',
        features: [
          'Secondary machine for travel and mobility',
          'Ideal for writing and light coding sessions',
          'Excellent battery life for all-day work',
          'Perfect for coffee shop productivity',
        ],
      },
      {
        name: 'Display Setup',
        description: 'Dual monitor configuration (coming soon)',
        features: [
          'Focusing on color-accurate displays',
          'Planning 27-inch 4K panels',
          'One for code, one for documentation/preview',
        ],
      },
    ],
  },
  {
    icon: MdKeyboard,
    title: 'Input & Control',
    description: 'Peripherals optimized for long coding sessions',
    items: [
      {
        name: 'Keychron K8 Pro',
        description: 'Wireless mechanical keyboard with hot-swap switches',
        link: 'https://www.keychron.com/products/keychron-k8-pro-qmk-via-wireless-mechanical-keyboard',
        features: [
          'Custom mechanical switches for tactile feedback',
          'Personalized keycaps for better aesthetics',
          'Hot-swappable design for easy experimentation',
          'Multi-device Bluetooth connectivity',
        ],
      },
      {
        name: 'Keyboard Palm Rest',
        description: 'Ergonomic additions for comfort',
        link: 'https://www.keychron.com/products/keychron-keyboard-wooden-palm-rest',
        features: [
          'Keychron palm rest for wrist support',
          'Reduces strain during marathon coding sessions',
          'Matches keyboard aesthetically',
        ],
      },
      {
        name: 'Logitech MX Master 3S',
        description: 'Premium wireless productivity mouse',
        link: 'https://www.logitech.com/en-us/products/mice/mx-master-3s.html',
        features: [
          'Ergonomic design for all-day comfort',
          'Customizable buttons for workflow shortcuts',
          'Multi-device support with easy switching',
          'Silent clicks for quiet environments',
        ],
      },
    ],
  },
  {
    icon: MdHeadphones,
    title: 'Audio',
    description: 'Recording, monitoring, and listening equipment',
    items: [
      {
        name: 'Focusrite Scarlett 2i2 (4th Gen)',
        description: 'Professional USB audio interface',
        link: 'https://focusrite.com/en/audio-interface/scarlett/scarlett-2i2',
        features: [
          'Studio-quality preamps with Air mode',
          'Low-latency direct monitoring',
          'USB-C connectivity for modern Macs',
          'Powers both XLR and instrument inputs',
        ],
      },
      {
        name: 'Blue Yeti',
        description: 'USB condenser microphone',
        link: 'https://www.logitechg.com/en-us/products/streaming-gear/yeti-premium-usb-microphone.988-000100.html',
        features: [
          'Primary mic for podcasting and calls',
          'Multiple pickup patterns',
          'Plug-and-play USB connectivity',
          'Built-in headphone monitoring',
        ],
      },
      {
        name: 'Shure SM57',
        description: 'Dynamic instrument microphone',
        link: 'https://www.shure.com/en-US/products/microphones/sm57',
        features: [
          'Industry-standard for instrument recording',
          'Connected via Scarlett interface',
          'Excellent for guitar amp capture',
          'Durable and road-tested design',
        ],
      },
      {
        name: 'Sony WH-1000XM4',
        description: 'Wireless noise-cancelling headphones',
        link: 'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-b',
        features: [
          'Active noise cancellation for focus',
          'Excellent for travel and open offices',
          'All-day comfort and battery life',
          'Multipoint connection support',
        ],
      },
      {
        name: 'Beyerdynamic DT 770 Pro',
        description: 'Closed-back studio headphones',
        link: 'https://global.beyerdynamic.com/p/dt-770-pro',
        features: [
          'Accurate monitoring for mixing',
          'Excellent isolation from ambient noise',
          'Comfortable for long sessions',
          'Industry-standard reference sound',
        ],
      },
      {
        name: 'AirPods Pro (2nd Gen)',
        description: 'Daily carry wireless earbuds',
        link: 'https://www.apple.com/airpods-pro/',
        features: [
          'Seamless Apple ecosystem integration',
          'Active noise cancellation on the go',
          'Perfect for calls and casual listening',
          'Transparency mode for awareness',
        ],
      },
    ],
  },
  {
    icon: MdCameraAlt,
    title: 'Photography & Video',
    description: 'Gear for capturing content and memories',
    items: [
      {
        name: 'Sony A7 III',
        description: 'Full-frame mirrorless camera',
        link: 'https://www.sony.com/electronics/interchangeable-lens-cameras/ilce-7m3',
        features: [
          '24.2MP sensor with excellent dynamic range',
          'Outstanding low-light performance',
          '4K video recording capabilities',
          'Dual SD card slots for backup',
        ],
      },
      {
        name: 'Tamron 28-75mm f/2.8',
        description: 'Versatile standard zoom lens',
        link: 'https://tamron-americas.com/product/28-75mm-f-2-8-di-iii-vxd-g2/',
        features: [
          'Perfect all-around focal range',
          'Fast f/2.8 aperture throughout zoom',
          'Great for portraits and general use',
          'Compact and lightweight',
        ],
      },
      {
        name: 'Sony 20mm f/1.8 G',
        description: 'Wide-angle prime lens',
        link: 'https://www.sony.com/electronics/camera-lenses/sel20f18g',
        features: [
          'Excellent for landscapes and astrophotography',
          'Fast f/1.8 aperture for low light',
          'Sharp across the frame',
          'Compact wide-angle option',
        ],
      },
      {
        name: 'Ulanzi Zero F38 Tripod',
        description: 'Portable carbon fiber tripod',
        link: 'https://www.ulanzi.com/products/ulanzi-f38-quick-release-travel-tripod-3131',
        features: [
          'Lightweight carbon fiber construction',
          'Quick-release plate for fast mounting',
          'Stable yet portable design',
          'Perfect for travel photography',
        ],
      },
    ],
  },
  {
    icon: MdDeveloperMode,
    title: 'Software & Tools',
    description: 'Daily drivers for development and productivity',
    items: [
      {
        name: 'RustRover',
        description: 'JetBrains IDE for Rust development',
        link: 'https://www.jetbrains.com/rust/',
        features: [
          'Primary IDE for Rust projects',
          'Intelligent code completion',
          'Built-in debugging and testing',
          'Seamless Cargo integration',
        ],
      },
      {
        name: 'iTerm2',
        description: 'Advanced terminal emulator for macOS',
        link: 'https://iterm2.com/',
        features: [
          'Custom color schemes and themes',
          'Split panes for multitasking',
          'Tmux integration for sessions',
          'Powerful search and autocomplete',
        ],
      },
      {
        name: 'Git & GitHub CLI',
        description: 'Version control and collaboration',
        link: 'https://cli.github.com/',
        features: [
          'Git with personalized aliases',
          'GitHub CLI for workflow automation',
          'Seamless pull request management',
          'Command-line issue tracking',
        ],
      },
    ],
  },
];
