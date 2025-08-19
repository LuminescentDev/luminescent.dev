import { JSX } from '@builder.io/qwik/jsx-runtime';
import { LogoBirdflop, LogoDiscord, LogoLuminescent } from '@luminescent/ui-qwik';
import { MCTag, OliTag, QwikTag, ReactTag, SabTag } from './Tags';
import { Component } from '@builder.io/qwik';
import { Github, Globe } from 'lucide-icons-qwik';
const Mineplace = '/mineplace.svg';
import Cactie from '../components/images/Cactie.png?jsx';
import Luminara from '../components/images/Luminara.png?jsx';
import Lumin from '../components/images/Lumin.png?jsx';
import AetherSMP from '../components/images/AetherSMP.png?jsx';
import TwinkForsale from '../components/images/twinkforsale.png?jsx';

export type Project = {
  title: string;
  description: string;
  image: JSX.Element;
  tags: Component[];
  color: string;
  btnClass: string;
  buttons: Button[]
}

type Button = {
  icon: JSX.Element;
  title: string;
  href: string;
}

export const Projects: Project[] = [
  {
    title: 'Birdflop',
    description: 'A registered 501(c)(3) nonprofit server host aiming to provide affordable and accessible hosting and resources.',
    image: <LogoBirdflop size={200} class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" fillGradient={['#54daf4', '#545eb6']}/>,
    tags: [SabTag, OliTag, QwikTag, ReactTag, MCTag],
    color: 'lum-bg-cyan-500',
    btnClass: 'hover:lum-bg-cyan-500/20',
    buttons: [
      {
        icon: <Globe size={24} />,
        title: 'Visit page',
        href: 'https://birdflop.com',
      },
      {
        icon: <Github size={24} />,
        title: 'Github',
        href: 'https://github.com/birdflop/web',
      },
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: 'https://discord.gg/nmgtX5z',
      },
    ],
  },
  {
    title: 'Mineplace',
    description: 'A 3d version of r/place in Minecraft, powered by Birdflop Hosting.',
    image: <img src={Mineplace} alt="Mineplace Logo" width={200} height={200} class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [SabTag, OliTag, QwikTag, MCTag],
    color: 'lum-bg-orange-500',
    btnClass: 'hover:lum-bg-orange-500/20',
    buttons: [
      {
        icon: <Globe size={24} />,
        title: 'Visit page',
        href: 'https://mineplace.me',
      },
      {
        icon: <Github size={24} />,
        title: 'Github',
        href: 'https://github.com/LuminescentDev/mineplace',
      },
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: 'https://discord.gg/qNj5kMwE',
      },
    ],
  },
  {
    title: 'Luminescent / ui',
    description: 'A component library for Qwik and React built with Tailwind CSS.',
    image: <div class="flex items-center justify-center text-[#f0ccfb] fill-[#f0ccfb] text-3xl md:text-5xl" style="filter: drop-shadow(0 0 2rem #CB6CE6);">
      <LogoLuminescent size={150} class="my-5.5 md:my-12.5 w-19 h-19 md:w-30 md:h-30" />/ ui
    </div>,
    tags: [SabTag, QwikTag, ReactTag],
    color: 'lum-bg-pink-500',
    btnClass: 'hover:lum-bg-pink-500/20',
    buttons: [
      {
        icon: <Globe size={24} />,
        title: 'Visit page',
        href: 'https://ui.luminescent.dev',
      },
      {
        icon: <Github size={24} />,
        title: 'Github',
        href: 'https://github.com/LuminescentDev/ui',
      },
    ],
  },
  {
    title: 'Luminara',
    description: 'A Friendly Semi-Vanilla Minecraft Server also known as Nether Depths!',
    image: <Luminara class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [SabTag, QwikTag, MCTag],
    color: 'lum-bg-pink-500',
    btnClass: 'hover:lum-bg-pink-500/20',
    buttons: [
      {
        icon: <Globe size={24} />,
        title: 'Visit page',
        href: 'https://luminaramc.org',
      },
      {
        icon: <Github size={24} />,
        title: 'Github',
        href: 'https://github.com/saboooor/Luminara',
      },
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: 'https://discord.gg/Mw7fNpdg5N',
      },
    ],
  },
  {
    title: 'Aether SMP',
    description: 'A Friendly Semi-Vanilla Minecraft Server also known as Nether Depths!',
    image: <AetherSMP class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [OliTag, QwikTag, MCTag],
    color: 'lum-bg-yellow-500',
    btnClass: 'hover:lum-bg-yellow-500/20',
    buttons: [
      {
        icon: <Globe size={24} />,
        title: 'Visit page',
        href: 'https://aethersmp.com',
      },
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: 'https://discord.gg/r4ZFkajnqa',
      },
    ],
  },
  {
    title: 'Burgers on Fleek',
    description: 'The burgers you are craving.™ Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. est. 2019.',
    image: <img src="https://www.burgersonfleek.ca/branding/icon.svg" height={200} width={200} class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [SabTag, QwikTag],
    color: 'lum-bg-orange-500',
    btnClass: 'hover:lum-bg-orange-500/20',
    buttons: [
      {
        icon: <Globe size={24} />,
        title: 'Visit page',
        href: 'https://burgersonfleek.ca',
      },
      {
        icon: <Github size={24} />,
        title: 'Github',
        href: 'https://github.com/saboooor/burgersonfleek',
      },
    ],
  },
  {
    title: 'Botflop',
    description: 'A Discord bot originally written in Python ported to JavaScript with 300,000+ users that analyzes timings delay reports to suggest mitigations for common Minecraft server issues.',
    image: <LogoBirdflop size={200} class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" fillGradient={['#54daf4', '#545eb6']}/>,
    tags: [SabTag, OliTag, MCTag],
    color: 'lum-bg-cyan-500',
    btnClass: 'hover:lum-bg-cyan-500/20',
    buttons: [
      {
        icon: <Github size={24} />,
        title: 'Github',
        href: 'https://github.com/birdflop/botflop',
      },
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: 'https://discord.gg/nmgtX5z',
      },
    ],
  },
  {
    title: 'Cactie',
    description: 'The last Discord bot you need, Cactie. Moderation, Fun, QOL, Utilities, and More!',
    image: <Cactie class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [SabTag, QwikTag],
    color: 'lum-bg-green-500',
    btnClass: 'hover:lum-bg-green-500/20',
    buttons: [
      {
        icon: <Globe size={24} />,
        title: 'Visit page',
        href: 'https://cactie.luminescent.dev',
      },
      {
        icon: <Github size={24} />,
        title: 'Github',
        href: 'https://github.com/saboooor/Cactie',
      },
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: '/discord',
      },
    ],
  },
  {
    title: 'Lumin',
    description: 'A silly little moon themed bot. Interactions, Utilities, Fun!',
    image: <Lumin class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [OliTag, QwikTag],
    color: 'lum-bg-purple-500',
    btnClass: 'hover:lum-bg-purple-500/20',
    buttons: [
      {
        icon: <Globe size={24} />,
        title: 'Visit page',
        href: 'https://lumin.luminescent.dev',
      },
      {
        icon: <Github size={24} />,
        title: 'Github',
        href: 'https://github.com/bwmp/Lumin',
      },
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: '/discord',
      },
    ],
  },
  {
    title: 'twink.forsale',
    description: 'The cutest, most uwu file sharing service and bio site ever! I made this 80% with ai cuz i could (´｡• ᵕ •｡`) ♡',
    image: <TwinkForsale class="mx-auto mb-5 w-25 h-25 md:w-50 md:h-50" />,
    tags: [OliTag, QwikTag],
    color: 'lum-bg-pink-500',
    btnClass: 'hover:lum-bg-pink-500/20',
    buttons: [
      {
        icon: <Globe size={24} />,
        title: 'Visit page',
        href: 'https://twink.forsale',
      },
      {
        icon: <Github size={24} />,
        title: 'Github',
        href: 'https://github.com/LuminescentDev/twinkforsale',
      },
      {
        icon: <LogoDiscord size={24} />,
        title: 'Discord',
        href: 'https://discord.gg/hNVkv4M674',
      },
    ],
  },
];