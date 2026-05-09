import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import { HoverLift, Reveal } from './Motion';

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24">
      <Reveal>
        <p className="eyebrow">Projects</p>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-normal text-white sm:text-4xl">Clean builds with visible engineering depth.</h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Two portfolio projects centered on Python data processing, SQL analysis, REST architecture, and database-backed backend structure.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <HoverLift className="h-full">
              <article className="surface flex h-full flex-col rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-normal text-white">{project.title}</h3>
                  <Github size={22} className="shrink-0 text-accent-soft" aria-hidden="true" />
                </div>
                <p className="mt-4 text-base leading-7 text-zinc-400">{project.description}</p>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.055] px-3 py-1.5 text-xs font-medium text-zinc-200">
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent/70 hover:bg-accent/10"
                >
                  View on GitHub
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </article>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
