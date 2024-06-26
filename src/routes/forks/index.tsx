import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="flex mx-auto max-w-7xl px-4 items-center justify-center min-h-[calc(100svh)] pt-24">
      <img width="2500" height="1875" class="ease-in-out filter" src={'https://raw.githubusercontent.com/saboooor/fork-graph/main/img.png?v=9'} alt="fork graph" />
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Fork Graph',
  meta: [
    {
      name: 'description',
      content: 'A fork graph that aims to inform people of the recent forks and patches that have been added to each fork of a fork of a fork while also being as chaotic as possible, made by @saboor. on Discord',
    },
    {
      property: 'og:description',
      content: 'A fork graph that aims to inform people of the recent forks and patches that have been added to each fork of a fork of a fork while also being as chaotic as possible, made by @saboor. on Discord',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'og:image',
      content: 'https://raw.githubusercontent.com/saboooor/fork-graph/main/img.png?v=9',
    },
  ],
};