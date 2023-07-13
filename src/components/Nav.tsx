import { component$, Slot } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import { LogoDiscord, LogoGithub, Menu, GitBranchOutline } from 'qwik-ionicons';
import Logo from '~/components/elements/Logo';
import LoadingIcon from './icons/LoadingIcon';

export default component$(() => {
  return (
    <Nav>
      <MainNav>
        <NavButton href="/forks" extraClass="hidden sm:flex gap-3">
          <GitBranchOutline width="24" class="fill-current" />
          Fork Graph
        </NavButton>
        <NavButton external icon href="https://github.com/LuminescentDev" title="GitHub" extraClass="hidden sm:flex">
          <LogoGithub width="24" class="fill-purple-200" />
        </NavButton>
        <NavButton icon href="/discord" title="Discord" extraClass="hidden sm:flex">
          <LogoDiscord width="24" class="fill-indigo-200" />
        </NavButton>
        <button id="mobile-menu-button" type="button" title="Menu" onClick$={() => {
          const classList = document.getElementById('mobile-menu')?.classList;
          if (classList?.contains('hidden')) classList.replace('hidden', 'flex');
          else classList?.replace('flex', 'hidden');
        }} class="transition ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg text-3xl sm:hidden">
          <Menu width="24" class="fill-current"/>
        </button>
      </MainNav>
      <MobileNav>
        <NavButton mobile href="/forks" extraClass="flex sm:hidden gap-2">
          <GitBranchOutline width="24" class="fill-current" />
          Fork Graph
        </NavButton>
        <div class="flex flex-row">
          <NavButton external mobile icon href="https://github.com/LuminescentDev" title="GitHub" extraClass="flex sm:hidden">
            <LogoGithub width="24" class="fill-purple-200" />
          </NavButton>
          <NavButton mobile icon href="/discord" title="Discord" extraClass="flex sm:hidden">
            <LogoDiscord width="24" class="fill-indigo-200" />
          </NavButton>
        </div>
      </MobileNav>
    </Nav>
  );
});

export const Nav = component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen py-2 bg-gray-900/70 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <Slot />
      </div>
    </nav>
  );
});

export const Brand = component$(() => {
  const location = useLocation();
  return (
    <div class="flex items-center justify-start">
      <Link href="/" class="transition ease-in-out text-gray-300 hover:bg-gray-800 hover:text-white drop-shadow-2xl px-3 pt-3 pb-2 rounded-lg text-lg flex gap-2 items-center whitespace-nowrap">
        <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="h-8 w-32">
          <div style="filter: drop-shadow(0 0 1rem #CB6CE6);">
            <Logo/>
          </div>
        </div>
        <div class={`${location.isNavigating ? '' : '-ml-10 opacity-0'} transition-all`}>
          <LoadingIcon/>
        </div>
      </Link>
    </div>
  );
});

export const MainNav = component$(() => {
  return (
    <div class="relative flex h-16 items-center justify-between">
      <Brand/>
      <div class="flex flex-1 items-center justify-end">
        <div class="flex gap-2 text-gray-300 whitespace-nowrap">
          <Slot/>
        </div>
      </div>
    </div>
  );
});

export const MobileNav = component$(() => {
  return (
    <div id="mobile-menu" class="gap-4 py-4 px-3 bg-black rounded-lg mt-2 hidden flex-col sm:hidden">
      <Slot />
    </div>
  );
});

export const NavButton = component$(({ href, title, icon, external, extraClass, style }: any) => {
  return <>
    {external &&
      <a href={href} title={title} style={style} class={`group transition ease-in-out hover:bg-gray-800 hover:text-white ${icon ? 'text-3xl px-2' : 'px-4'} py-2 rounded-lg items-center ${extraClass}`}>
        <Slot />
      </a>
    }
    {!external &&
      <Link href={href} onClick$={async () => { document.getElementById('mobile-menu')?.classList.replace('flex', 'hidden'); }} title={title} style={style} class={`group transition ease-in-out hover:bg-gray-800 hover:text-white ${icon ? 'text-3xl px-2' : 'px-4'} py-2 rounded-lg items-center ${extraClass}`}>
        <Slot />
      </Link>
    }
  </>;
});