import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { LogoDiscord, LogoGithub } from 'qwik-ionicons';
import Logo from '~/components/elements/Logo';

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

      <h1 class="font-bold text-white text-2xl sm:text-5xl mt-10">
        Downloads
      </h1>
      <h1 class="text-sm sm:text-xl pb-8">
        This is the place where various downloads will be available
      </h1>
      <h1 class="text-xl sm:text-3xl mt-10">
        Nether Depths
      </h1>
      <h1 class="text-sm sm:text-xl pb-10">
        Here are the downloads for Nether Depths
      </h1>
      <div class="mt-6 mb-12 flex flex-wrap gap-3 justify-center">
        <a href="https://mega.nz/file/6hNSkRTR#eIfUUm4EdQgcKfJSDOGMEgTMcwfg6zZ6NdWoSMTslNQ" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
          Jul 13 2020 Reset | 1.15 - 232 MB
        </a>
        <a href="https://mega.nz/file/Wx1kXZjR#sCO1TYkOupuYvRivRrho4NvRWTIn2cP8erGmVP2pkEA" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
          Feb 3 2021 Reset | 1.16 - 712 MB
        </a>
        <a href="https://mega.nz/file/34klnLCY#3-KFSVDcwBrBdH998AEb1rFyjxfOGAen5jlihgBQp3k" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
          May 26 2022 Reset | 1.18 - 1.1 GB
        </a>
        <a href="https://mega.nz/file/PhUQDCLS#YD2e7cNq2YaUhMdKfJGsJ4OPkpqYbNou36LgT3S6VfE" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
          Jan 20 2023 Slimefun Shutdown | 1.19 - 3.3 GB
        </a>
        <a href="https://mega.nz/file/blNl0ZiB#h3NLZlB0GYeyrnrvWZzi9DZiLrjryJ1b3GZhIWP0ctE" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
          Jun 13 2023 Zen Reset | 1.19 - 134 MB
        </a>
        <a href="https://mega.nz/file/mtcR3CpQ#-V8MD-7llQsdodsCMsyV5wkPIUlnHToHyxWZ-bdfZww" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
          Sept 13 2023 Shutdown | 1.20 - 3.5 GB
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