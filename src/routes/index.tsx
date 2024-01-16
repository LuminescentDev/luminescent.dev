import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { LogoDiscord, LogoGithub } from 'qwik-ionicons';
import Logo from '~/components/elements/Logo';

import Card from '~/components/elements/Card';

export default component$(() => {
  return (
    <section class="flex flex-col gap-3 mx-auto max-w-6xl px-6 items-center justify-center py-20" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="px-[10%]">
        <div style="filter: drop-shadow(0 0 3rem #CB6CE6);">
          <Logo/>
        </div>
      </div>

      <div class="flex flex-nowrap gap-3">
        <a href="https://github.com/LuminescentDev" class="flex justify-center sm:justify-start transition rounded-xl hover:bg-gray-700 border border-gray-900 px-4 py-3 font-bold text-purple-100 text-xl md:text-3xl whitespace-nowrap gap-4 items-center">
          <LogoGithub width="24" class="fill-current" />
        </a>
        <a href="/discord" class="flex justify-center sm:justify-start transition rounded-xl hover:bg-gray-700 border border-gray-900 px-4 py-3 font-bold text-indigo-100 text-xl md:text-3xl whitespace-nowrap gap-4 items-center">
          <LogoDiscord width="24" class="fill-current"/>
        </a>
      </div>

      <h1 class="font-bold text-white text-xl sm:text-3xl mt-10">
        Our Projects
      </h1>
      <h1 class="text-sm sm:text-xl pb-8">
        Here are some of the projects we're working on - Hover over them to see more info
      </h1>
      <div class="flex w-full overflow-x-hidden" style={{
        '-webkit-mask-image': 'linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent);',
      }}>
        <div class="flex gap-4 px-10 overflow-x-auto py-2">
          <Card
            name="SimplyMC"
            icon="https://www.simplymc.art/icon-192x192.png"
            github="https://github.com/LuminescentDev/SimplyMC"
            link="https://simplymc.art"
            discord="https://discord.simplymc.art"
            color="purple">
            A Minecraft Multitool for server owners, developers, and players.
          </Card>
          <Card
            name="Cactie"
            icon="https://cactie.luminescent.dev/icon-512x512.png"
            github="https://github.com/saboooor/Cactie"
            link="https://cactie.luminescent.dev/"
            discord="/discord"
            color="orange">
            A Discord bot that does stuff ig
            Admin, Fun, Tickets, Utilities, Animals, and Actions!
          </Card>
          <Card
            name="Lumin"
            icon="https://lumin.luminescent.dev/Lumin.png"
            github="https://github.com/bwmp/Lumin"
            link="https://lumin.luminescent.dev/"
            discord="/discord"
            color="pink">
            A silly little moon themed bot<br />
            Interactions, Utilities, Fun!
          </Card>
          <Card
            name="Nether Depths"
            icon="https://raw.githubusercontent.com/saboooor/Nether-Depths/main/Branding/nd.png"
            discord="https://discord.gg/Mw7fNpdg5N"
            color="red">
            Surpass the limits of the Nether.
            A former Minecraft server which shut down and turned into a community Discord server.
          </Card>
          <Card
            name="Botflop"
            icon="https://birdflop.com/assets/images/bf-3-121x121.png"
            github="https://github.com/LuminescentDev/botflop"
            discord="https://discord.gg/nmgtX5z"
            color="blue">
            Discord Bot for server hosts, devs, and admins. Analyzes timings reports & uploads text files to a bin
          </Card>
          <Card
            name="Luminescent Transcript"
            icon="https://avatars.githubusercontent.com/u/86643576?s=200&v=4"
            github="https://github.com/LuminescentDev/LuminescentTranscript"
            color="pink">
            A Discord message transcript viewer (Not public yet, specifically made for Cactie)
          </Card>
          <Card
            name="Burgers on Fleek"
            icon="https://www.burgersonfleek.ca/icon.svg"
            github="https://github.com/saboooor/burgersonfleek"
            link="https://burgersonfleek.ca"
            color="orange">
            Not exactly a project- but if you live in Ontario, this burger spot is amazing guaranteed you will love it, (i made the website)
          </Card>
        </div>
      </div>

      <h1 class="font-bold text-white text-xl sm:text-3xl mt-10">
        Us
      </h1>
      <h1 class="text-sm sm:text-xl pb-10">
        Here are our profiles
      </h1>
      <div class="flex flex-col sm:flex-row gap-4 px-10">
        <Card big
          name="Saboor (@saboor.)"
          width={128}
          icon="https://avatars.githubusercontent.com/u/42164502"
          github="https://github.com/saboooor"
          link="https://sab.luminescent.dev">
          Hey my name's saboor, you can call me sab, I mainly work on a Discord bot named Cactie & make websites like this one and SimplyMC, I am also a Culinary Arts student at NAIT and want to be a chef for a living.
        </Card>
        <Card big
          name="bwmp (@akiradev)"
          width={128}
          icon="https://avatars.githubusercontent.com/u/67001116"
          github="https://github.com/bwmp"
          link="https://akiradev.xyz">
          Hey my name's Oli/bwmp/Akira, I mainly work on VRChat things, Discord bots like Lumin, Basement Bot, and websites like SimplyMC.
        </Card>
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