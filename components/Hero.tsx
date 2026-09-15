import Image from 'next/image';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import HeroCodeBackground from '@/components/HeroCodeBackground';

const socialLinks = [
  {
    href: 'mailto:kristiangabrielcorrea@gmail.com',
    label: 'Email',
    icon: Mail,
  },
  {
    href: 'https://linkedin.com/in/Kristian-Correa',
    label: 'LinkedIn',
    icon: Linkedin,
    external: true,
  },
  {
    href: 'https://github.com/KristianCorrea',
    label: 'GitHub',
    icon: Github,
    external: true,
  },
];

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white px-4 pt-24 pb-16 sm:px-6"
    >
      <HeroCodeBackground />
      <div className="relative z-10 mx-auto w-full max-w-xl text-center">
        <div className="mx-auto mb-8 w-fit">
          <div className="rounded-full bg-white p-2 shadow-md ring-1 ring-gray-200/80">
            <Image
              src="/profile.jpeg"
              alt="Portrait of Kristian Correa"
              width={220}
              height={220}
              priority
              className="h-[180px] w-[180px] rounded-full object-cover object-[center_22%] sm:h-[220px] sm:w-[220px]"
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Kristian Correa
        </h1>
        <p className="mt-2 text-lg font-medium text-gray-500 sm:text-xl">
          Software Engineer
        </p>

        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
          Passionate about building intuitive web experiences and solving
          real-world problems with code.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus-ring"
            aria-label="View Résumé"
          >
            <span>View Résumé</span>
            <ExternalLink size={15} />
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {socialLinks.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:text-gray-900 focus-ring"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
