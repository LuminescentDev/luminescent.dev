import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LogoDiscord, LogoLuminescentFull, Nav } from '@luminescent/ui-qwik';
import { GitFork, Github } from 'lucide-icons-qwik';

export default component$(() => {
  return (
    <Nav floating fixed colorClass="lum-bg-lum-input-bg/50 !text-lum-text">
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent rounded-lum-2">
        <div
          class="flex items-center gap-1 fill-[#f0ccfb] font-semibold text-[#f0ccfb]"
          style="filter: drop-shadow(0 0 1rem #CB6CE6);"
        >
          <LogoLuminescentFull size={20} />
        </div>
      </Link>

      <Link
        q:slot="end"
        href="/forks"
        class={{
          'lum-btn lum-bg-transparent hidden sm:flex rounded-lum-2 text-sm': true,
        }}
      >
        <GitFork size={20} /> Fork Graph
      </Link>
      <Link
        q:slot="end"
        href="https://ui.luminescent.dev"
        class={{
          'lum-btn lum-bg-transparent hidden sm:flex rounded-lum-2 text-sm': true,
        }}
      >
        <LogoLuminescentFull size={20} />
        {/* make /ui fit without changing the size of the navbar */}
        <span class="-mt-1 -mb-0.5 -ml-1.5 text-base font-bold">
          / ui
        </span>
      </Link>
      <div q:slot="end" class="hidden gap-2 sm:flex">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/forks" class="lum-btn lum-bg-transparent rounded-lum-2">
        <GitFork size={20} /> Fork Graph
      </Link>
      <a
        q:slot="mobile"
        href="https://ui.luminescent.dev"
        class="lum-btn lum-bg-transparent"
      >
        <div class="flex items-center gap-1 font-semibold">
          <LogoLuminescentFull size={20} /> / ui
        </div>
      </a>
      <div q:slot="mobile" class="flex justify-evenly">
        <SocialButtons />
      </div>
    </Nav>
  );
});

export const SocialButtons = component$(({ large }: { large?: boolean }) => {
  return <>
    <a
      href="https://github.com/LuminescentDev"
      title="GitHub"
      class={{
        'lum-btn lum-bg-transparent': true,
        'p-3': large,
        'rounded-lum-2 p-2': !large,
      }}
    >
      <Github size={large ? 32 : 20} />
    </a>
    <a
      href="/discord"
      title="Discord"
      class={{
        'lum-btn lum-bg-transparent': true,
        'p-3': large,
        'rounded-lum-2 p-2': !large,
      }}
    >
      <LogoDiscord size={large ? 32 : 20} />
    </a>
  </>;
});
