import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { ButtonAnchor, Header } from '@luminescent/ui';

export default component$(() => {
  return (
    <section class="flex flex-col mx-auto max-w-7xl px-4 items-center justify-center min-h-[calc(100svh)] pt-24">
      <Header subheader="This is the place you can find world files for Nether Depths, our old Minecraft server" class={{
        'justify-center mt-10': true,
      }}>
        Downloads
      </Header>
      <div class="mt-6 mb-12 flex flex-wrap gap-3 justify-center">
        <ButtonAnchor href="https://mega.nz/file/6hNSkRTR#eIfUUm4EdQgcKfJSDOGMEgTMcwfg6zZ6NdWoSMTslNQ">
          Jul 13 2020 Reset | 1.15 - 232 MB
        </ButtonAnchor>
        <ButtonAnchor href="https://mega.nz/file/Wx1kXZjR#sCO1TYkOupuYvRivRrho4NvRWTIn2cP8erGmVP2pkEA">
          Feb 3 2021 Reset | 1.16 - 712 MB
        </ButtonAnchor>
        <ButtonAnchor href="https://mega.nz/file/34klnLCY#3-KFSVDcwBrBdH998AEb1rFyjxfOGAen5jlihgBQp3k">
          May 26 2022 Reset | 1.18 - 1.1 GB
        </ButtonAnchor>
        <ButtonAnchor href="https://mega.nz/file/PhUQDCLS#YD2e7cNq2YaUhMdKfJGsJ4OPkpqYbNou36LgT3S6VfE">
          Jan 20 2023 Slimefun Shutdown | 1.19 - 3.3 GB
        </ButtonAnchor>
        <ButtonAnchor href="https://mega.nz/file/blNl0ZiB#h3NLZlB0GYeyrnrvWZzi9DZiLrjryJ1b3GZhIWP0ctE">
          Jun 13 2023 Zen Reset | 1.19 - 134 MB
        </ButtonAnchor>
        <ButtonAnchor href="https://mega.nz/file/mtcR3CpQ#-V8MD-7llQsdodsCMsyV5wkPIUlnHToHyxWZ-bdfZww">
          Sept 13 2023 Shutdown | 1.20 - 3.5 GB
        </ButtonAnchor>
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