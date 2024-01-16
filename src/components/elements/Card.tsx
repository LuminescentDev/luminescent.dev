import { component$, Slot } from '@builder.io/qwik';
import { LogoGithub, GlobeOutline, LogoDiscord } from 'qwik-ionicons';

export default component$(({ name, icon, link, github, discord, color, big }: any) => {
  return (
    <div class={{
      'flex-1 relative bg-gray-800/50 border rounded-xl group transition-all': true,
      'border-purple-400/10': color === 'purple',
      'border-orange-400/10': color === 'orange',
      'border-pink-400/10': color === 'pink',
      'border-red-400/10': color === 'red',
      'border-blue-400/10': color === 'blue',
      'bg-gray-850 border-gray-800': !color,
    }}>
      <div class={{
        'grid rounded-xl absolute w-full h-full bg-gray-800/50 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-xl': true,
        'text-purple-200': color === 'purple',
        'text-orange-200': color === 'orange',
        'text-pink-200': color === 'pink',
        'text-red-200': color === 'red',
        'text-blue-200': color === 'blue',
        'text-luminescent-100': !color,
      }}>
        {link && (
          <a href={link} class={{
            'flex flex-col justify-center transition-all rounded-xl rounded-b-none font-bold items-center gap-4': true,
            'hover:bg-purple-500/10': color === 'purple',
            'hover:bg-orange-500/10': color === 'orange',
            'hover:bg-pink-500/10': color === 'pink',
            'hover:bg-red-500/10': color === 'red',
            'hover:bg-blue-500/10': color === 'blue',
            'hover:bg-luminescent-500/20': !color,
          }}>
            <GlobeOutline width="24" class="fill-current" />
            Visit page
          </a>
        )}
        {github && (
          <a href={github} class={{
            'flex flex-col justify-center transition-all font-bold items-center gap-4': true,
            'hover:bg-purple-500/10': color === 'purple',
            'hover:bg-orange-500/10': color === 'orange',
            'hover:bg-pink-500/10': color === 'pink',
            'hover:bg-red-500/10': color === 'red',
            'hover:bg-blue-500/10': color === 'blue',
            'hover:bg-luminescent-500/20': !color,
          }}>
            <LogoGithub width="24" class="fill-current" />
            Github
          </a>
        )}
        {discord && (
          <a href={discord} class={{
            'flex flex-col justify-center transition-all rounded-xl rounded-t-none font-bold items-center gap-4': true,
            'hover:bg-purple-500/10': color === 'purple',
            'hover:bg-orange-500/10': color === 'orange',
            'hover:bg-pink-500/10': color === 'pink',
            'hover:bg-red-500/10': color === 'red',
            'hover:bg-blue-500/10': color === 'blue',
            'hover:bg-luminescent-500/20': !color,
          }}>
            <LogoDiscord width="24" class="fill-current" />
            Discord
          </a>
        )}
      </div>
      <div class={{
        'p-8 py-10': true,
        'w-64': !big,
        'w-96': big,
      }}>
        <img src={icon} alt={name} class="mb-10 rounded-lg" draggable={false} width={192} height={192} />
        <h2 class={{
          'text-gray-50 mb-2 text-xl font-bold': true,
          'text-purple-200': color === 'purple',
          'text-orange-200': color === 'orange',
          'text-pink-200': color === 'pink',
          'text-red-200': color === 'red',
          'text-blue-200': color === 'blue',
        }}>
          {name}
        </h2>
        <p class="text-gray-400 mb-2">
          <Slot />
        </p>
        {color && (
          <div class="rounded-xl absolute -z-10 top-0 left-0 w-full h-full transition-all bg-gray-900">
            <div class={{
              'absolute bottom-5 w-32 h-32 rounded-full opacity-20 animate-blob ease-in-out filter blur-xl': true,
              'bg-purple-400': color === 'purple',
              'bg-orange-400': color === 'orange',
              'bg-pink-400': color === 'pink',
              'bg-red-400': color === 'red',
              'bg-blue-400': color === 'blue',
            }}></div>
            <div class={{
              'absolute bottom-5 w-32 h-32 rounded-full opacity-20 animate-blob ease-in-out filter blur-xl': true,
              'animation-delay-2000': true,
              'bg-purple-500': color === 'purple',
              'bg-orange-500': color === 'orange',
              'bg-pink-500': color === 'pink',
              'bg-red-500': color === 'red',
              'bg-blue-500': color === 'blue',
            }}></div>
            <div class={{
              'absolute bottom-5 w-32 h-32 rounded-full opacity-20 animate-blob ease-in-out filter blur-xl': true,
              'animation-delay-4000': true,
              'bg-purple-600': color === 'purple',
              'bg-orange-600': color === 'orange',
              'bg-pink-600': color === 'pink',
              'bg-red-600': color === 'red',
              'bg-blue-600': color === 'blue',
            }}></div>
          </div>
        )}
      </div>
    </div>
  );
});