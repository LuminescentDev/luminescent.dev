import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { Blobs, LogoBirdflop, LogoLuminescent, LogoLuminescentFull, LogoDiscord } from '@luminescent/ui-qwik';
import { Github, Globe } from 'lucide-icons-qwik';

import Cactie from '../components/images/Cactie.png?jsx';
import Lumin from '../components/images/Lumin.png?jsx';
import AetherSMP from '../components/images/AetherSMP.png?jsx';
import Luminara from '../components/images/Luminara.png?jsx';
import TwinkForsale from '../components/images/twinkforsale.png?jsx';
import { SocialButtons } from '~/components/Nav';

export const QwikTag = component$(() => {
  return (
    <p class="lum-btn lum-bg-purple-800/50 rounded-lum text-xs gap-1.5 font-semibold p-1 pr-2">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img src="/qwik.svg" alt="Qwik Logo" width={16} height={16} />
      Qwik
    </p>
  );
});
export const ReactTag = component$(() => {
  return (
    <p class="lum-btn lum-bg-blue-800/50 rounded-lum text-xs gap-1.5 font-semibold p-1 pr-2">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img src="/react.svg" alt="React Logo" width={16} height={16} />
      React
    </p>
  );
});
export const MCTag = component$(() => {
  return (
    <p class="lum-btn lum-bg-green-800/50 rounded-lum text-xs gap-1.5 font-semibold p-1 pr-2">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img src="/minecraft.avif" alt="Minecraft Logo" width={16} height={16} class="rounded-lum-1" />
      Minecraft
    </p>
  );
});

export const OliTag = component$(() => {
  return (
    <p class="lum-btn lum-bg-purple-800/50 rounded-lum text-xs gap-1.5 font-semibold p-1 pr-2">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img src="https://avatars.githubusercontent.com/u/67001116" alt="@bwmp" width={16} height={16} class="rounded-lum-1" />
      bwmp
    </p>
  );
});
export const SabTag = component$(() => {
  return (
    <p class="lum-btn lum-bg-cyan-800/50 rounded-lum text-xs gap-1.5 font-semibold p-1 pr-2">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img src="https://avatars.githubusercontent.com/u/42164502" alt="@saboooor" width={16} height={16} class="rounded-lum-1" />
      sab
    </p>
  );
});

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const container = document.getElementById('auto-scroll-container');
    const offsetChild = document.getElementById('offset');
    if (!container || !offsetChild) return;
    const padding = 10; // Padding to add to the offset

    let hovering = false;

    let translateX = 0;
    // Automatically scroll without user interaction, append each child when it moves out of the container for infinite scrolling
    const scrollInterval = setInterval(() => {
      if (hovering) return;
      translateX += 60; // Adjust speed as needed
      container.style.transform = `translateX(-${translateX}px)`;
      // append the first child to the end of the container when it moves out of view
      const secondChild = container.children[1] as HTMLElement;
      const offset = (secondChild?.clientWidth * 2) + offsetChild.clientWidth + padding;
      const offsetWidth = secondChild?.clientWidth + offsetChild.clientWidth + padding;
      if (translateX > offset) {
        container.appendChild(secondChild);
        // add width of second child to offset
        offsetChild.style.width = `${offsetWidth}px`;
      }
    }, 1000);

    // check if container is being hovered
    container.addEventListener('mouseenter', () => {
      hovering = true;
      container.addEventListener('mouseleave', () => {
        hovering = false;
      });
    });

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  });

  return (
    <section class="flex flex-col mx-auto max-w-7xl px-4 items-center justify-center min-h-[calc(100svh)] pt-40">
      <h1 class="relative text-gray-100 text-3xl sm:text-6xl font-bold animate-in fade-in slide-in-from-top-8 anim-duration-1000">
        <div class="font-semibold flex items-center gap-2 sm:gap-5 text-[#f0ccfb] fill-[#f0ccfb] select-none" style="filter: drop-shadow(0 0 3rem #CB6CE6);">
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

      <h2 class="text-gray-100 text-3xl font-bold mb-2">
        Our Projects
      </h2>
      <p class="text-gray-400 text-center">
        Here are some of the projects we're working on<br/>
        Hover over them to see more info<br/>
      </p>

      <div class="flex relative w-full overflow-x-hidden my-10">
        <div id="auto-scroll-container" class="flex gap-2 py-2 select-none transition-transform duration-1000 ease-linear">
          <div id="offset"/>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <LogoBirdflop size={200} class="mx-auto mb-5" fillGradient={['#54daf4', '#545eb6']}/>
            <h3 class="text-gray-100 text-xl font-bold">
              Birdflop
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <SabTag /><OliTag /><QwikTag /><ReactTag /><MCTag />
            </div>
            <p class="text-gray-400 text-sm">
              A registered 501(c)(3) nonprofit server host aiming to provide affordable and accessible hosting and resources.
            </p>
            <Blobs color='cyan' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-cyan-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://birdflop.com'} draggable={false}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/birdflop/web'} draggable={false}>
                <Github size={24} />
                Github
              </a>
              <a href={'https://discord.gg/nmgtX5z'} draggable={false}>
                <LogoDiscord size={24} />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <img src="/mineplace.svg" alt="Mineplace Logo" width={200} height={200} class="mx-auto mb-5" />
            <h3 class="text-gray-100 text-xl font-bold">
              Mineplace
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <SabTag /><OliTag /><QwikTag /><MCTag />
            </div>
            <p class="text-gray-400 text-sm">
              A 3d version of r/place in Minecraft, powered by Birdflop Hosting.
            </p>
            <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-cyan-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://mineplace.me'} draggable={false}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/LuminescentDev/mineplace'} draggable={false}>
                <Github size={24} />
                Github
              </a>
              <a href={'https://discord.gg/qNj5kMwE'} draggable={false}>
                <LogoDiscord size={24} />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <Cactie class="mx-auto mb-5" />
            <h3 class="text-gray-100 text-xl font-bold">
              Cactie
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <SabTag /><QwikTag />
            </div>
            <p class="text-gray-400 text-sm">
              The last Discord bot you need, Cactie. Moderation, Fun, QOL, Utilities, and More!
            </p>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-cyan-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://cactie.luminescent.dev'} draggable={false}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/saboooor/Cactie'} draggable={false}>
                <Github size={24} />
                Github
              </a>
              <a href={'/discord'} draggable={false}>
                <LogoDiscord size={24} />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='purple' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <Lumin class="mx-auto mb-5" />
            <h3 class="text-gray-100 text-xl font-bold">
              Lumin
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <OliTag /><QwikTag />
            </div>
            <p class="text-gray-400 text-sm">
              A silly little moon themed bot. Interactions, Utilities, Fun!
            </p>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-purple-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://lumin.luminescent.dev'} draggable={false}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/bwmp/Lumin'} draggable={false}>
                <Github size={24} />
                Github
              </a>
              <a href={'/discord'} draggable={false}>
                <LogoDiscord size={24} />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <TwinkForsale class="mx-auto mb-5" />
            <h3 class="text-gray-100 text-xl font-bold">
              twink.forsale
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <OliTag /><QwikTag />
            </div>
            <p class="text-gray-400 text-sm">
              The cutest, most uwu file sharing service and bio site ever! I made this 80% with ai cuz i could (´｡• ᵕ •｡`) ♡
            </p>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-purple-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://twink.forsale'} draggable={false}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/LuminescentDev/twinkforsale'} draggable={false}>
                <Github size={24} />
                Github
              </a>
              <a href={'https://discord.gg/hNVkv4M674'} draggable={false}>
                <LogoDiscord size={24} />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <Luminara class="mx-auto mb-5" />
            <h3 class="text-gray-100 text-xl font-bold">
              Luminara
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <SabTag /><QwikTag /><MCTag />
            </div>
            <p class="text-gray-400 text-sm">
              A Friendly Semi-Vanilla Minecraft Server also known as Nether Depths!
            </p>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-pink-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://luminaramc.org'} draggable={false}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://discord.gg/Mw7fNpdg5N'} draggable={false}>
                <LogoDiscord size={24} />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='yellow' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <AetherSMP class="mx-auto mb-5" />
            <h3 class="text-gray-100 text-xl font-bold">
              Aether SMP
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <OliTag /><QwikTag /><MCTag />
            </div>
            <p class="text-gray-400 text-sm">
              A Survival Minecraft server featuring custom Aether-themed world generation!
            </p>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-pink-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://aethersmp.com'} draggable={false}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://discord.gg/r4ZFkajnqa'} draggable={false}>
                <LogoDiscord size={24} />
                Discord
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class="flex items-center text-[#f0ccfb] fill-[#f0ccfb] text-6xl" style="filter: drop-shadow(0 0 2rem #CB6CE6);">
              <LogoLuminescent size={150} class="my-8.5" /> ui
            </div>
            <h3 class="text-gray-100 text-xl font-bold">
              Luminescent / ui
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <SabTag /><QwikTag /><ReactTag />
            </div>
            <p class="text-gray-400 text-sm">
              A component library for Qwik and React built with Tailwind CSS
            </p>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-pink-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://ui.luminescent.dev'} draggable={false}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/LuminescentDev/ui'} draggable={false}>
                <Github size={24} />
                Github
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <img src="https://www.burgersonfleek.ca/branding/icon.svg" height={200} width={200} class="mx-auto mb-5" />
            <h3 class="text-gray-100 text-xl font-bold">
              Burgers on Fleek
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <SabTag /><QwikTag />
            </div>
            <p class="text-gray-400 text-sm">
              The burgers you are craving.™ Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. est. 2019
            </p>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-orange-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://burgersonfleek.ca'} draggable={false}>
                <Globe size={24} />
                Visit page
              </a>
              <a href={'https://github.com/saboooor/burgersonfleek'} draggable={false}>
                <Github size={24} />
                Github
              </a>
            </div>
          </div>
          <div class="lum-card lum-bg-gray-800/30 relative min-w-64 max-w-64">
            <Blobs color='pink' class={{ 'absolute overflow-clip rounded-lg -z-10': true }} style={{ transform: 'translateZ(-10px)' }}/>
            <div class="text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 2rem #CB6CE6);">
              <LogoLuminescent size={150} class="mx-auto mt-7 mb-10" />
            </div>
            <h3 class="text-gray-100 text-xl font-bold">
              Lumi Transcript
            </h3>
            <div class="flex gap-2 items-center flex-wrap">
              <SabTag /><QwikTag />
            </div>
            <p class="text-gray-400 text-sm">
              A Discord message transcript viewer. (Not public yet, specifically made for Cactie)
            </p>
            <div class={{
              'lum-card lum-bg-gray-900/50 absolute inset-0 !p-2 !gap-2 !border-0 !text-white w-full h-full z-10 backdrop-blur-xl transition duration-300 hover:duration-75 ease-out opacity-0 hover:opacity-100': true,
              '[&>*]:h-full [&>*]:w-full [&>*]:lum-btn [&>*]:lum-bg-transparent [&>*]:hover:lum-bg-pink-900/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-2': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }}>
              <a href={'https://github.com/LuminescentDev/LuminescentTranscript'} draggable={false}>
                <Github size={24} />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

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
            <a href={'https://akiradev.me'} draggable={false}>
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