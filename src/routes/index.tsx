import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { GlobeOutline, LogoDiscord, LogoGithub } from 'qwik-ionicons';
import { ButtonAnchor, Card, Header, LogoBirdflop, LogoLuminescent, LogoLuminescentFull } from '@luminescent/ui';

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
        <ButtonAnchor square href="https://luminescent.dev/discord" size="xl" transparent>
          <LogoGithub width={30} />
        </ButtonAnchor>
        <ButtonAnchor square href="https://github.com/luminescentDev/ui" size="xl" transparent color="indigo">
          <LogoDiscord width={30} />
        </ButtonAnchor>
      </div>

      <Header subheader="Here are some of the projects we're working on - Hover over them to see more info" class={{
        'justify-center mt-10': true,
      }}>
        Our Projects
      </Header>
      <div class="flex relative w-full overflow-x-hidden my-10">
        <div class="flex gap-4 px-10 overflow-x-auto py-2">
          <Card color="gray" blobs="blue" hover="blur" class={{ 'min-w-64 max-w-64': true }}>
            <LogoBirdflop width={200} class="mx-auto mb-5" fillGradient={['#54daf4', '#545eb6']}/>
            <Header subheader="A place for all things Minecraft, including server hosting, and various resources." class={{
              'whitespace-pre-wrap': true,
            }}>
              Birdflop
            </Header>
            <div class={{
              'flex flex-col w-full text-white font-bold': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-blue-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }} q:slot='blur'>
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
          </Card>
          <Card color="gray" blobs="orange" hover="blur" class={{ 'min-w-64 max-w-64': true }}>
            <img src="https://cactie.luminescent.dev/icon-192x192.png" height={200} width={200} class="mx-auto mb-5" />
            <Header subheader="The last Discord bot you need, Cactie. Moderation, Fun, QOL, Utilities, and More!" class={{
              'whitespace-pre-wrap': true,
            }}>
              Cactie
            </Header>
            <div class={{
              'flex flex-col w-full text-white font-bold': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-orange-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }} q:slot='blur'>
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
          </Card>
          <Card color="gray" blobs="pink" hover="blur" class={{ 'min-w-64 max-w-64': true }}>
            <img src="https://lumin.luminescent.dev/Lumin.png" height={200} width={200} class="mx-auto mb-5" />
            <Header subheader="A silly little moon themed bot. Interactions, Utilities, Fun!" class={{
              'whitespace-pre-wrap': true,
            }}>
              Lumin
            </Header>
            <div class={{
              'flex flex-col w-full text-white font-bold': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-pink-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }} q:slot='blur'>
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
          </Card>
          <Card color="gray" blobs="red" hover="blur" class={{ 'min-w-64 max-w-64': true }}>
            <img src="https://raw.githubusercontent.com/saboooor/Nether-Depths/main/Branding/nd.png" height={200} width={200} class="mx-auto mb-5" />
            <Header subheader="Surpass the limits of the Nether. A former Minecraft server which shut down and turned into a community Discord server" class={{
              'whitespace-pre-wrap': true,
            }}>
              Nether Depths
            </Header>
            <div class={{
              'flex flex-col w-full text-white font-bold': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-red-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }} q:slot='blur'>
              <a href={'/discord'}>
                <LogoDiscord width="24" class="fill-current" />
                Discord
              </a>
            </div>
          </Card>
          <Card color="gray" blobs="blue" hover="blur" class={{ 'min-w-64 max-w-64': true }}>
            <LogoBirdflop width={200} class="mx-auto mb-5" fillGradient={['#54daf4', '#545eb6']}/>
            <Header subheader="Discord Bot for server hosts, devs, and admins. Analyzes timings reports & uploads text files to a bin." class={{
              'whitespace-pre-wrap': true,
            }}>
              Botflop
            </Header>
            <div class={{
              'flex flex-col w-full text-white font-bold': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-blue-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }} q:slot='blur'>
              <a href={'https://github.com/LuminescentDev/botflop'}>
                <LogoGithub width="24" class="fill-current" />
                Github
              </a>
              <a href={'https://discord.gg/nmgtX5z'}>
                <LogoDiscord width="24" class="fill-current" />
                Discord
              </a>
            </div>
          </Card>
          <Card color="gray" blobs="pink" hover="blur" class={{ 'min-w-64 max-w-64': true }}>
            <LogoLuminescent width={200} class="mx-auto mb-5 text-luminescent-300" />
            <Header subheader="A Discord message transcript viewer. (Not public yet, specifically made for Cactie)" class={{
              'whitespace-pre-wrap': true,
            }}>
              Luminescent Transcript
            </Header>
            <div class={{
              'flex flex-col w-full text-white font-bold': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-pink-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }} q:slot='blur'>
              <a href={'https://github.com/LuminescentDev/LuminescentTranscript'}>
                <LogoGithub width="24" class="fill-current" />
                Github
              </a>
            </div>
          </Card>
          <Card color="gray" blobs="orange" hover="blur" class={{ 'min-w-64 max-w-64': true }}>
            <img src="https://www.burgersonfleek.ca/branding/icon.svg" height={200} width={200} class="mx-auto mb-5" />
            <Header subheader="Not exactly a project- but if you live in Ontario, this burger spot is amazing guaranteed you will love it, (sab made the website)" class={{
              'whitespace-pre-wrap': true,
            }}>
              Burgers on Fleek
            </Header>
            <div class={{
              'flex flex-col w-full text-white font-bold': true,
              '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-orange-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
              '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
            }} q:slot='blur'>
              <a href={'https://burgersonfleek.ca'}>
                <GlobeOutline width="24" class="fill-current" />
                Visit page
              </a>
              <a href={'https://github.com/saboooor/burgersonfleek'}>
                <LogoGithub width="24" class="fill-current" />
                Github
              </a>
            </div>
          </Card>
        </div>
      </div>

      <Header subheader="Here are our profiles" class={{
        'justify-center mt-10': true,
      }}>
        Us
      </Header>
      <div class="grid sm:grid-cols-2 gap-4 max-w-2xl my-10">
        <Card color="purple" blobs hover="blur">
          <img src="https://avatars.githubusercontent.com/u/42164502" height={192} width={192} class="rounded-md mb-5" />
          <Header subheader="Hey my name's saboor, you can call me sab, I mainly work on a Discord bot named Cactie & make websites like this one and Birdflop, I am also a Culinary Arts student at NAIT and want to be a chef for a living." class={{
            'whitespace-pre-wrap': true,
          }}>
            Saboor (@saboor.)
          </Header>
          <div class={{
            'flex flex-col w-full text-white font-bold': true,
            '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-purple-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
            '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
          }} q:slot='blur'>
            <a href={'https://burgersonfleek.ca'}>
              <GlobeOutline width="24" class="fill-current" />
              Visit page
            </a>
            <a href={'https://github.com/saboooor/burgersonfleek'}>
              <LogoGithub width="24" class="fill-current" />
              Github
            </a>
          </div>
        </Card>
        <Card color="blue" blobs hover="blur">
          <img src="https://avatars.githubusercontent.com/u/67001116" height={192} width={192} class="rounded-md mb-5" />
          <Header subheader="Hey my name's Oli/bwmp/Akira, I mainly work on VRChat things, Discord bots like Lumin, Basement Bot, and websites like Birdflop." class={{
            'whitespace-pre-wrap': true,
          }}>
            bwmp (@akiradev)
          </Header>
          <div class={{
            'flex flex-col w-full text-white font-bold': true,
            '[&>*]:h-full [&>*]:w-full hover:[&>*]:bg-blue-500/20 [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:transition-all [&>*]:items-center [&>*]:gap-4': true,
            '[&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg': true,
          }} q:slot='blur'>
            <a href={'https://akiradev.me'}>
              <GlobeOutline width="24" class="fill-current" />
              Visit page
            </a>
            <a href={'https://github.com/bwmp'}>
              <LogoGithub width="24" class="fill-current" />
              Github
            </a>
          </div>
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