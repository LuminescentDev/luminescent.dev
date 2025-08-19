import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { Blobs, LogoLuminescentFull } from '@luminescent/ui-qwik';
import { Github, Globe } from 'lucide-icons-qwik';

import { SocialButtons } from '~/components/Nav';
import Projects from '~/components/Projects';

export default component$(() => {

  return <>
    <section class="flex flex-col relative mx-auto max-w-7xl px-4 items-center justify-center mt-40 ">
      <h1 class="relative text-gray-100 text-3xl sm:text-6xl font-bold animate-in fade-in slide-in-from-top-8 anim-duration-1000">
        <div class="font-semibold flex items-center gap-2 sm:gap-5 text-[#f0ccfb] fill-[#f0ccfb] select-none" style="filter: drop-shadow(0 0 1rem #CB6CE6);">
          <LogoLuminescentFull size={80} class="mt-2 hidden sm:flex" />
          <LogoLuminescentFull size={40} class="mt-1 flex sm:hidden" />
        </div>
      </h1>
      <h2 class="text-gray-300 text-lg sm:text-2xl animate-in fade-in slide-in-from-top-16 anim-duration-1000 my-6">
        A special dev org. :3
      </h2>

      <div class="flex gap-2 justify-center mb-12">
        <SocialButtons large />
      </div>
    </section>

    <Projects />

    <section id="projects" class="flex flex-col mx-auto max-w-7xl items-center mt-10">
      <h2 class="text-gray-100 text-3xl font-bold">
        About Us
      </h2>
      <div class="grid sm:grid-cols-2 gap-2 max-w-2xl my-10">
        <div class="lum-card lum-bg-purple-900/30 relative">
          <Blobs color='purple' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
          <img src="https://avatars.githubusercontent.com/u/42164502" height={192} width={192} class="rounded-md mb-5" />
          <h3 class="text-gray-100 text-xl font-bold">
            Saboor (@saboor.)
          </h3>
          <p class="text-gray-400 text-sm">
            Hey my name's saboor, you can call me sab, I mainly make websites like this one and Birdflop and I love all kinds of tech. I am also a Culinary Arts graduate from NAIT.
          </p>
          <div class={{
            'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
            '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-purple-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
            '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
          }}>
            <a href={'https://saboor.ca'} draggable={false}>
              <Globe size={24} />
              Visit page
            </a>
            <a href={'https://github.com/saboooor'} draggable={false}>
              <Github size={24} />
              Github
            </a>
          </div>
        </div>
        <div class="lum-card lum-bg-cyan-800/30 relative">
          <Blobs color='cyan' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
          <img src="https://avatars.githubusercontent.com/u/67001116" height={192} width={192} class="rounded-md mb-5" />
          <h3 class="text-gray-100 text-xl font-bold">
            bwmp (@akiradev)
          </h3>
          <p class="text-gray-400 text-sm">
            Hey my name's Oli/bwmp/Akira, I mainly work on VRChat things, Discord bots like Lumin, Basement Bot, and websites like Birdflop.
          </p>
          <div class={{
            'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
            '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-cyan-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
            '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
          }}>
            <a href={'https://bwmp.dev'} draggable={false}>
              <Globe size={24} />
              Visit page
            </a>
            <a href={'https://github.com/bwmp'} draggable={false}>
              <Github size={24} />
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  </>;
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
