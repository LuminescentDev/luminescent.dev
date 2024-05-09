import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Button, ButtonAnchor, LogoDiscord, LogoLuminescentFull, Nav } from '@luminescent/ui';
import { CubeOutline, DownloadOutline, GitNetworkOutline, LogoGithub } from 'qwik-ionicons';

export default component$(() => {
  return (
    <Nav floating fixed>
      <Link q:slot="start" href="/">
        <Button transparent>
          <div class="font-semibold flex items-center gap-1 text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 1rem #CB6CE6);">
            <LogoLuminescentFull width={100} class="mt-1" />
          </div>
        </Button>
      </Link>

      <Link q:slot="end" href="/forks" class={{
        'hidden sm:flex': true,
      }}>
        <Button transparent>
          <GitNetworkOutline width="24" /> Fork Graph
        </Button>
      </Link>
      <ButtonAnchor q:slot="end" href="https://ui.luminescent.dev" transparent>
        <div class="font-semibold flex items-center gap-1">
          <LogoLuminescentFull width={100} class="mt-1" /> / ui
        </div>
      </ButtonAnchor>
      <Link q:slot="end" href="/downloads" class={{
        'hidden sm:flex': true,
      }}>
        <Button transparent square>
          <DownloadOutline width="24" />
        </Button>
      </Link>
      <ButtonAnchor q:slot="end" square href="https://github.com/LuminescentDev" transparent class={{
        'hidden sm:flex': true,
      }}>
        <LogoGithub width={24} />
      </ButtonAnchor>
      <ButtonAnchor q:slot="end" square href="/discord" transparent class={{
        'hidden sm:flex': true,
      }}>
        <LogoDiscord width={24} />
      </ButtonAnchor>

      <Link q:slot="mobile" href="/forks" >
        <Button transparent class={{ 'w-full': true }}>
          <GitNetworkOutline width="24" /> Fork Graph
        </Button>
      </Link>
      <ButtonAnchor q:slot="mobile" href="https://ui.luminescent.dev" transparent>
        <div class="font-semibold flex items-center gap-1">
          <LogoLuminescentFull width={100} class="mt-1" /> / ui
        </div>
      </ButtonAnchor>
      <div q:slot='mobile' class="flex justify-evenly">
        <ButtonAnchor q:slot="" square href="https://github.com/LuminescentDev" transparent>
          <LogoGithub width={24} />
        </ButtonAnchor>
        <ButtonAnchor q:slot="end" square href="/discord" transparent>
          <LogoDiscord width={24} />
        </ButtonAnchor>
      </div>
    </Nav>
  );
});
