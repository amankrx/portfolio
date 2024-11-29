import {
  MdChair,
  MdComputer,
  MdDevices,
  MdHeadphones,
  MdKeyboard,
} from 'react-icons/md';

export const setupCategories = [
  {
    icon: MdComputer,
    title: 'Main Workstation',
    items: [
      {
        name: 'MacBook Air M2',
        specs: ['16GB RAM', '256GB SSD', 'Apple M2 8-core CPU'],
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
        specs: ['Keychron K8 Pro', 'Keychron Silicone Palm Rest'],
      },
      {
        name: 'Mouse',
        specs: ['Logitech MX Master 3S'],
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
          'RustRover as primary editor',
          'iTerm for terminal multiplexing',
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
        specs: ['Blue Yeti', 'Boom arm with shock mount'],
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
        specs: ['Custom Built Desk'],
      },
      {
        name: 'Chair',
        specs: ['Green Soul Monster Ultimate'],
      },
    ],
  },
];
