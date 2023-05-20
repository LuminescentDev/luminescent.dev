import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { LogoDiscord, LogoGithub } from 'qwik-ionicons';
import Logo from '~/components/elements/Logo';

import Card from '~/components/elements/Card';

export default component$(() => {
  return (
    <section class="flex flex-col gap-3 mx-auto max-w-6xl px-6 items-center justify-center py-10" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="px-[10%]">
        <div style="filter: drop-shadow(0 0 3rem #CB6CE6);">
          <Logo/>
        </div>
      </div>
      <h1 class="font-bold text-white text-xl sm:text-3xl mt-6">
        Our Projects
      </h1>
      <h1 class="text-sm sm:text-xl pb-10">
        Here are some of the projects we're working on
      </h1>
      <div class="flex w-full overflow-x-hidden" style={{
        '-webkit-mask-image': 'linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent);',
      }}>
        <div class="flex gap-4 projects px-10">
          <Card name="SimplyMC" icon="https://www.simplymc.art/icon-192x192.png" github="https://github.com/LuminescentDev/SimplyMC" link="https://simplymc.art">
            A Minecraft Multitool for server owners, developers, and players.
          </Card>
          <Card name="Cactie" icon="https://cactie.luminescent.dev/assets/images/Cactie.webp" github="https://github.com/saboooor/Cactie" link="https://cactie.luminescent.dev/">
            A Discord bot that does stuff ig
            Admin, Fun, Tickets, Utilities, Animals, and Actions!
          </Card>
          <Card name="Shoto" icon="https://cdn.discordapp.com/avatars/796935151417688074/6202f5e5cc62481162ef0a98b364f702.webp?size=2048" github="https://github.com/LuminescentDev/Shoto" link="https://shoto.akiradev.xyz/">
            Another Discord bot that does stuff<br />
            Fun, Utilies, and more!
          </Card>
          <Card name="Botflop" icon="https://rgb.birdflop.com/assets/images/new_birdflop_logo_large.png" github="https://github.com/LuminescentDev/botflop">
            Discord Bot for server hosts, devs, and admins. Analyzes timings reports & uploads text files to a bin
          </Card>
          <Card name="Nether Depths" icon="https://raw.githubusercontent.com/saboooor/Nether-Depths/main/Branding/nd.png" link="https://netherdepths.com">
            Surpass the limits of the Nether.
            A Minecraft server with various features and custom generation and more
          </Card>
          <Card name="Luminescent Transcript" icon="https://avatars.githubusercontent.com/u/86643576?s=200&v=4" github="https://github.com/LuminescentDev/LuminescentTranscript">
            A Discord message transcript viewer (Not public yet, specifically made for Cactie)
          </Card>
          <Card name="Burgers on Fleek" icon="https://www.burgersonfleek.ca/icon.svg" github="https://github.com/saboooor/burgersonfleek" link="https://burgersonfleek.ca">
            Not exactly a project- but if you live in Ontario, this burger spot is amazing guaranteed you will love it, (i made the website)
          </Card>
        </div>
      </div>

      <div class="flex flex-nowrap gap-3 pt-10">
        <a href="https://github.com/LuminescentDev" class="flex justify-center sm:justify-start transition duration-200 rounded-2xl shadow-lg backdrop-blur-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 px-6 py-3 font-bold text-purple-100 md:py-4 md:px-8 text-xl md:text-3xl whitespace-nowrap gap-4 items-center">
          <LogoGithub width="24" class="fill-current" />
        </a>
        <a href="/discord" class="flex justify-center sm:justify-start transition duration-200 rounded-2xl shadow-lg backdrop-blur-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 text-xl md:text-3xl whitespace-nowrap gap-4 items-center">
          <LogoDiscord width="24" class="fill-current"/>
        </a>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Welcome to our website idk',
    },
    {
      name: 'og:description',
      content: 'Welcome to our website idk',
    },
    {
      name: 'og:image',
      content: 'https://avatars.githubusercontent.com/u/86643576',
    },
  ],
};