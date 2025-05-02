import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LogoDiscord, LogoLuminescentFull, Nav } from '@luminescent/ui-qwik';
import { Download, GitFork, Github } from 'lucide-icons-qwik';

export default component$(() => {
  return (
    <Nav floating fixed colorClass="lum-bg-gray-800/50 !text-gray-100">
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent">
        <div class="font-semibold flex items-center gap-1 text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 1rem #CB6CE6);">
          <LogoLuminescentFull width={100} class="mt-1" />
        </div>
      </Link>

      <Link q:slot="end" href="/forks" class={{
        'hidden sm:flex lum-btn lum-bg-transparent': true,
      }}>
        <GitFork size={20} /> Fork Graph
      </Link>
      <a q:slot="end" href="https://ui.luminescent.dev" class="lum-btn lum-bg-transparent">
        <div class="font-semibold flex items-center gap-1">
          <LogoLuminescentFull width={100} class="mt-1" /> / ui
        </div>
      </a>
      <Link q:slot="end" href="/downloads" class={{
        'hidden sm:flex lum-btn lum-bg-transparent lum-pad-equal-sm': true,
      }}>
        <Download size={20} />
      </Link>
      <div q:slot='end' class="hidden sm:flex gap-2">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/forks" class="lum-btn lum-bg-transparent">
        <GitFork size={20} /> Fork Graph
      </Link>
      <a q:slot="mobile" href="https://ui.luminescent.dev" class="lum-btn lum-bg-transparent">
        <div class="font-semibold flex items-center gap-1">
          <LogoLuminescentFull width={100} class="mt-1" /> / ui
        </div>
      </a>
      <div q:slot='mobile' class="flex justify-evenly">
        <SocialButtons />
      </div>
    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return <>
    <a href="https://github.com/LuminescentDev" title="GitHub" class="lum-btn lum-bg-transparent lum-pad-equal-sm">
      <Github size={20} />
    </a>
    <a href="/discord" title="Discord" class="lum-btn lum-bg-transparent lum-pad-equal-sm">
      <LogoDiscord width="20" />
    </a>
  </>;
});
