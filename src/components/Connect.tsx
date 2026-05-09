import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Motion';

export default function Connect() {
  return (
    <section id="connect" className="section-shell py-24">
      <Reveal>
        <div className="surface relative overflow-hidden rounded-lg p-6 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="eyebrow">Connect</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-2 text-sm font-semibold text-accent-soft">
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(109,93,252,0.75)]" aria-hidden="true" />
                {profile.availability}
              </div>
              <h2 className="mt-7 max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl">
                Let&apos;s build something impactful together.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                Open to roles in Data Engineering, Backend, and AI-powered product teams. Always up for an
                interesting conversation.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-soft"
              >
                Email Me
                <Mail size={17} aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/70 hover:bg-accent/10"
              >
                LinkedIn
                <Linkedin size={17} aria-hidden="true" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-accent/70 hover:bg-accent/10 hover:text-white"
              >
                GitHub
                <Github size={17} aria-hidden="true" />
                <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-20 border-t border-white/10 pt-6 text-sm text-zinc-500">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Astro, Tailwind CSS, and Framer Motion.</p>
          <p>{profile.location} · Data & Backend Engineering</p>
        </div>
      </footer>
    </section>
  );
}
