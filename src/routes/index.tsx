import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { GlobeOutline, LogoDiscord, LogoGithub } from 'qwik-ionicons';
import { Blobs, Header, LogoBirdflop, LogoLuminescent, LogoLuminescentFull } from '@luminescent/ui-qwik';

export default component$(() => {
  return (
    <section class="flex flex-col mx-auto max-w-7xl px-4 items-center justify-center min-h-[calc(100svh)] pt-40">
      <h1 class="relative text-gray-100 text-3xl sm:text-6xl font-bold animate-in fade-in slide-in-from-top-8 anim-duration-1000">
        <div style="filter: drop-shadow(0 0 3rem #CB6CE6);">
          <div class="font-semibold flex items-center gap-2 sm:gap-5 text-[#f0ccfb] fill-[#f0ccfb] select-none" style="filter: drop-shadow(0 0 5rem #CB6CE6);">
            <LogoLuminescentFull width={400} class="mt-2 hidden sm:flex" />
            <LogoLuminescentFull width={200} class="mt-1 flex sm:hidden" />
          </div>
        </div>
      </h1>
      <h2 class="text-gray-300 text-lg sm:text-2xl animate-in fade-in slide-in-from-top-16 anim-duration-1000 my-6">
        Yet another dev org.
      </h2>

      <div class="flex gap-2 justify-center">
        <a href="https://luminescent.dev/discord" class="lum-btn lum-bg-transparent lum-pad-equal-lg rounded-xl fill-gray-100 hover:fill-white">
          <LogoGithub width={30} />
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
        <div class="flex gap-4 px-10 overflow-x-auto py-2">
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <LogoBirdflop width={200} class="mx-auto mb-5" fillGradient={['#54daf4', '#545eb6']}/>
            <Header subheader="A place for all things Minecraft, including server hosting, and various resources." class={{
              'whitespace-pre-wrap': true,
            }}>
              Birdflop
            </Header>
            <Blobs color='cyan' class={{ 'absolute overflow-clip rounded-lg': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-0 !gap-0 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-blue-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://birdflop.com'}>
                <GlobeOutline width="24" class="fill-current" />
                Visit page
              </a>
              <a href={'https://github.com/birdflop/web'}>
                <LogoGithub width="24" class="fill-current" />
                Github
              </a>
              <a href={'https://discord.gg/nmgtX5z'}>
                <LogoDiscord width="24" class="fill-current" />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <img src="https://cactie.luminescent.dev/icon-192x192.png" height={200} width={200} class="mx-auto mb-5" />
            <Header subheader="The last Discord bot you need, Cactie. Moderation, Fun, QOL, Utilities, and More!" class={{
              'whitespace-pre-wrap': true,
            }}>
              Cactie
            </Header>
            <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-0 !gap-0 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-orange-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://cactie.luminescent.dev'}>
                <GlobeOutline width="24" class="fill-current" />
                Visit page
              </a>
              <a href={'https://github.com/saboooor/Cactie'}>
                <LogoGithub width="24" class="fill-current" />
                Github
              </a>
              <a href={'/discord'}>
                <LogoDiscord width="24" class="fill-current" />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <img src="https://lumin.luminescent.dev/Lumin.png" height={200} width={200} class="mx-auto mb-5" />
            <Header subheader="A silly little moon themed bot. Interactions, Utilities, Fun!" class={{
              'whitespace-pre-wrap': true,
            }}>
              Lumin
            </Header>
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-0 !gap-0 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-pink-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://lumin.luminescent.dev'}>
                <GlobeOutline width="24" class="fill-current" />
                Visit page
              </a>
              <a href={'https://github.com/bwmp/Lumin'}>
                <LogoGithub width="24" class="fill-current" />
                Github
              </a>
              <a href={'/discord'}>
                <LogoDiscord width="24" class="fill-current" />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <img src="https://raw.githubusercontent.com/saboooor/Nether-Depths/main/Branding/nd.png" height={200} width={200} class="mx-auto mb-5" />
            <Header subheader="wip. A former Minecraft server known as Nether Depths which shut down and after a year has been revived as Luminara!" class={{
              'whitespace-pre-wrap': true,
            }}>
              Luminara SMP
            </Header>
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-0 !gap-0 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-pink-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://discord.gg/Mw7fNpdg5N'}>
                <LogoDiscord width="24" class="fill-current" />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <div class="text-[#f0ccfb] fill-[#f0ccfb]">
              <LogoLuminescent width={200} class="mx-auto mb-5" />
            </div>
            <Header subheader="A Discord message transcript viewer. (Not public yet, specifically made for Cactie)" class={{
              'whitespace-pre-wrap': true,
            }}>
              Luminescent Transcript
            </Header>
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-0 !gap-0 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-pink-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://github.com/LuminescentDev/LuminescentTranscript'}>
                <LogoGithub width="24" class="fill-current" />
                Github
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <img src="https://www.burgersonfleek.ca/branding/icon.svg" height={200} width={200} class="mx-auto mb-5" />
            <Header subheader="Not exactly a project- but if you live in Ontario, this burger spot is amazing guaranteed you will love it, (sab made the website)" class={{
              'whitespace-pre-wrap': true,
            }}>
              Burgers on Fleek
            </Header>
            <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-0 !gap-0 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-orange-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://burgersonfleek.ca'}>
                <GlobeOutline width="24" class="fill-current" />
                Visit page
              </a>
              <a href={'https://github.com/saboooor/burgersonfleek'}>
                <LogoGithub width="24" class="fill-current" />
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
      <div class="grid sm:grid-cols-2 gap-4 max-w-2xl my-10">
        <div class="lum-card lum-bg-purple-900/30 relative">
          <img src="https://avatars.githubusercontent.com/u/42164502" height={192} width={192} class="rounded-md mb-5" />
          <Header subheader="Hey my name's saboor, you can call me sab, I mainly work on a Discord bot named Cactie & make websites like this one and Birdflop, I am also a Culinary Arts student at NAIT and want to be a chef for a living." class={{
            'whitespace-pre-wrap': true,
          }}>
            Saboor (@saboor.)
          </Header>
          <Blobs color='purple' class={{ 'absolute overflow-clip rounded-lg': true }} style={{ transform: 'translateZ(-10px)' }}/>
          <div class={{
            'lum-card lum-bg-gray-900/50 absolute inset-0 !p-0 !gap-0 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
            '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-orange-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
            '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
          }}>
            <a href={'https://sab.luminescent.dev'}>
              <GlobeOutline width="24" class="fill-current" />
              Visit page
            </a>
            <a href={'https://github.com/saboooor'}>
              <LogoGithub width="24" class="fill-current" />
              Github
            </a>
          </div>
        </div>
        <div class="lum-card lum-bg-cyan-800/30 relative">
          <img src="https://avatars.githubusercontent.com/u/67001116" height={192} width={192} class="rounded-md mb-5" />
          <Blobs color='cyan' class={{ 'absolute overflow-clip rounded-lg': true }} style={{ transform: 'translateZ(-10px)' }}/>
          <Header subheader="Hey my name's Oli/bwmp/Akira, I mainly work on VRChat things, Discord bots like Lumin, Basement Bot, and websites like Birdflop." class={{
            'whitespace-pre-wrap': true,
          }}>
            bwmp (@akiradev)
          </Header>
          <div class={{
            'lum-card lum-bg-gray-900/50 absolute inset-0 !p-0 !gap-0 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
            '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-blue-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
            '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
          }}>
            <a href={'https://akiradev.me'}>
              <GlobeOutline width="24" class="fill-current" />
              Visit page
            </a>
            <a href={'https://github.com/bwmp'}>
              <LogoGithub width="24" class="fill-current" />
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