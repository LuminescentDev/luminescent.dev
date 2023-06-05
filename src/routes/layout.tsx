import { component$, Slot, useVisibleTask$ } from '@builder.io/qwik';
import Nav from '../components/Nav';

export default component$(() => {
  useVisibleTask$(() => {
    (window as any).clarity = (window as any).clarity || function(...args: any) {
      ((window as any).clarity.q = (window as any).clarity.q || []).push(args);
    };
    const t = document.createElement('script');
    t.async = true;
    t.src = 'https://www.clarity.ms/tag/hf0fh28kj3';
    const y = document.getElementsByTagName('script')[0];
    y.parentNode!.insertBefore(t, y);
  }, { strategy: 'document-idle' });

  return (
    <main>
      <Nav />
      <section class="pt-16">
        <Slot />
      </section>
    </main>
  );
});
