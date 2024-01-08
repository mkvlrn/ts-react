import { Github } from '#/components/index/github.js';
import { Logo } from '#/components/index/logo.js';
import { Tagline } from '#/components/index/tagline.js';
import { Title } from '#/components/index/title.js';

// biome-ignore lint/nursery/noDefaultExport: generouted expects it
export default function Home() {
  return (
    <main className='flex h-screen bg-[#2f4858] text-[#daf7dc]'>
      <div className='m-auto'>
        <Title />
        <Tagline />
        <Logo />
        <Github />
      </div>
    </main>
  );
}
