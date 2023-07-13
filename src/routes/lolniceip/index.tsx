import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';

export const useGetIP = routeLoader$(({ clientConn }) => {
  return {
    ip: clientConn.ip,
  };
});

export default component$(() => {
  const ip = useGetIP();
  const lolip = ip.value.ip?.replace('::ffff:', '') ?? 'UR MOM';
  const number = Math.round(Math.random() * 2) + 1;
  console.log(number);
  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center min-h-[calc(100dvh-64px)]">
      <div class="justify-center align-center mx-auto">
        <div style={{ backgroundImage: `url(/gifs/${number}.gif)` }} class="bg-no-repeat bg-cover">
          <h1 class="animate-rainbow px-[30dvh] pt-[70dvh] pb-10 font-black text-5xl shadow-outline">{lolip}</h1>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Nice IP Loser',
  meta: [
    {
      name: 'description',
      content: 'Click the link its funny',
    },
    {
      property: 'og:description',
      content: 'Click the link its funny',
    },
  ],
};