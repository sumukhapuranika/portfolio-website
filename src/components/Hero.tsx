import { ArrowUpRight, Github, MapPin, FileText } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/portfolio';

const links = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'Resume', href: profile.resume, icon: FileText },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="section-shell flex min-h-screen items-center pb-20 pt-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-zinc-300">
          <MapPin size={15} className="text-accent-soft" aria-hidden="true" />
          {profile.location} · {profile.role}
        </div>

        <p className="eyebrow mb-5">Hello, I am {profile.name}</p>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
          Engineer at the intersection of data, backend & AI
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
          {profile.intro}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-2 text-sm font-semibold text-accent-soft">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(109,93,252,0.75)]" aria-hidden="true" />
          {profile.availability}
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/70 hover:bg-accent/10"
            >
              <Icon size={18} aria-hidden="true" />
              {label}
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
