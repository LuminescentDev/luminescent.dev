import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { Blobs, Header, LogoBirdflop, LogoLuminescent, LogoLuminescentFull, LogoDiscord } from '@luminescent/ui-qwik';
import { Github, Globe } from 'lucide-icons-qwik';

import Cactie from '../components/images/Cactie.png?jsx';
import Lumin from '../components/images/Lumin.png?jsx';
import Luminara from '../components/images/Luminara.png?jsx';

export default component$(() => {
  return (
    <section class="flex flex-col mx-auto max-w-7xl px-4 items-center justify-center min-h-[calc(100svh)] pt-40">
      <h1 class="relative text-gray-100 text-3xl sm:text-6xl font-bold animate-in fade-in slide-in-from-top-8 anim-duration-1000">
        <div class="font-semibold flex items-center gap-2 sm:gap-5 text-[#f0ccfb] fill-[#f0ccfb] select-none" style="filter: drop-shadow(0 0 3rem #CB6CE6);">
          <LogoLuminescentFull width={400} class="mt-2 hidden sm:flex" />
          <LogoLuminescentFull width={200} class="mt-1 flex sm:hidden" />
        </div>
      </h1>
      <h2 class="text-gray-300 text-lg sm:text-2xl animate-in fade-in slide-in-from-top-16 anim-duration-1000 my-6">
        Yet another dev org.
      </h2>

      <div class="flex gap-2 justify-center">
        <a href="https://luminescent.dev/discord" class="lum-btn lum-bg-transparent lum-pad-equal-lg rounded-xl fill-gray-100 hover:fill-white">
          <Github size={30} />
        </a>
        <a href="https://github.com/luminescentDev/ui" class="lum-btn lum-bg-transparent hover:lum-bg-indigo-700 lum-pad-equal-lg rounded-xl fill-indigo-300 hover:fill-white">
          <LogoDiscord width={30} />
        </a>
      </div>

      <Header subheader="Here are some of the projects we're working on - Hover over them to see more info" class={{
        'justify-center mt-10': true,
      }}>
        Our Projects
      </Header>
      <div class="flex relative w-full overflow-x-hidden my-10">
        <div class="flex gap-2 overflow-x-auto py-2">
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <LogoBirdflop width={200} class="mx-auto mb-5" fillGradient={['#54daf4', '#545eb6']}/>
            <Header subheader="A place for all things Minecraft, including server hosting, and various resources." class={{
              'whitespace-pre-wrap': true,
            }}>
              Birdflop
            </Header>
            <Blobs color='cyan' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-cyan-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://birdflop.com'}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/birdflop/web'}>
                <Github size={24} />
                Github
              </a>
              <a href={'https://discord.gg/nmgtX5z'}>
                <LogoDiscord width="24" />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <Cactie class="mx-auto mb-5" />
            <Header subheader="The last Discord bot you need, Cactie. Moderation, Fun, QOL, Utilities, and More!" class={{
              'whitespace-pre-wrap': true,
            }}>
              Cactie
            </Header>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-cyan-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://cactie.luminescent.dev'}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/saboooor/Cactie'}>
                <Github size={24} />
                Github
              </a>
              <a href={'/discord'}>
                <LogoDiscord width="24" />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='purple' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <Lumin class="mx-auto mb-5" />
            <Header subheader="A silly little moon themed bot. Interactions, Utilities, Fun!" class={{
              'whitespace-pre-wrap': true,
            }}>
              Lumin
            </Header>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-purple-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://lumin.luminescent.dev'}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/bwmp/Lumin'}>
                <Github size={24} />
                Github
              </a>
              <a href={'/discord'}>
                <LogoDiscord width="24" />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class="flex items-center text-[#f0ccfb] fill-[#f0ccfb] text-6xl" style="filter: drop-shadow(0 0 2rem #CB6CE6);">
              <LogoLuminescent width={100} class="mx-auto my-15" /> / ui
            </div>
            <Header subheader="Another component library for Qwik built with Tailwind CSS" class={{
              'whitespace-pre-wrap': true,
            }}>
              Luminescent / ui
            </Header>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-pink-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://ui.luminescent.dev'}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/LuminescentDev/ui'}>
                <Github size={24} />
                Github
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <Luminara class="mx-auto mb-5" />
            <Header subheader="A Minecraft server also known as Nether Depths!" class={{
              'whitespace-pre-wrap': true,
            }}>
              Luminara SMP
            </Header>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-pink-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://mc.luminescent.dev'}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://discord.gg/Mw7fNpdg5N'}>
                <LogoDiscord width="24" />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class="text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 2rem #CB6CE6);">
              <LogoLuminescent width={150} class="mx-auto mt-7 mb-10" />
            </div>
            <Header subheader="A Discord message transcript viewer. (Not public yet, specifically made for Cactie)" class={{
              'whitespace-pre-wrap': true,
            }}>
              Lumi Transcript
            </Header>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-pink-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://github.com/LuminescentDev/LuminescentTranscript'}>
                <Github size={24} />
                Github
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <img src="https://www.burgersonfleek.ca/branding/icon.svg" height={200} width={200} class="mx-auto mb-5" />
            <Header subheader="Not exactly a project- but if you live in Ontario, this burger spot is amazing guaranteed you will love it, (sab made the website)" class={{
              'whitespace-pre-wrap': true,
            }}>
              Burgers on Fleek
            </Header>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-orange-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://burgersonfleek.ca'}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/saboooor/burgersonfleek'}>
                <Github size={24} />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <Header subheader="Here are our profiles" class={{
        'justify-center mt-10': true,
      }}>
        Us
      </Header>
      <div class="grid sm:grid-cols-2 gap-2 max-w-2xl my-10">
        <div class="lum-card lum-bg-purple-900/30 relative">
          <Blobs color='purple' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
          <img src="https://avatars.githubusercontent.com/u/42164502" height={192} width={192} class="rounded-md mb-5" />
          <Header subheader="Hey my name's saboor, you can call me sab, I mainly work on a Discord bot named Cactie & make websites like this one and Birdflop, I am also a Culinary Arts student at NAIT and want to be a chef for a living." class={{
            'whitespace-pre-wrap': true,
          }}>
            Saboor (@saboor.)
          </Header>
          <div class={{
            'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
            '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-purple-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
            '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
          }}>
            <a href={'https://sab.luminescent.dev'}>
              <Globe size={24} />
              Visit page
            </a>
            <a href={'https://github.com/saboooor'}>
              <Github size={24} />
              Github
            </a>
          </div>
        </div>
        <div class="lum-card lum-bg-cyan-800/30 relative">
          <Blobs color='cyan' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
          <img src="https://avatars.githubusercontent.com/u/67001116" height={192} width={192} class="rounded-md mb-5" />
          <Header subheader="Hey my name's Oli/bwmp/Akira, I mainly work on VRChat things, Discord bots like Lumin, Basement Bot, and websites like Birdflop." class={{
            'whitespace-pre-wrap': true,
          }}>
            bwmp (@akiradev)
          </Header>
          <div class={{
            'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
            '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-cyan-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
            '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
          }}>
            <a href={'https://akiradev.me'}>
              <Globe size={24} />
              Visit page
            </a>
            <a href={'https://github.com/bwmp'}>
              <Github size={24} />
              Github
            </a>
          </div>
        </div>
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