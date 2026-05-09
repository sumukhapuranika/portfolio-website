import { BrainCircuit, Cloud, Database, Server } from 'lucide-react';
import { stackGroups } from '../data/portfolio';
import { HoverLift, Reveal } from './Motion';

const icons = [Database, Server, BrainCircuit, Cloud];

export default function Stack() {
  return (
    <section id="stack" className="section-shell py-24">
      <Reveal>
        <p className="eyebrow">The Stack</p>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-normal text-white sm:text-4xl">Practical tools for reliable systems.</h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            A focused toolkit across data engineering, backend services, analytics, API testing, and delivery workflows.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={group.title} delay={index * 0.06}>
              <HoverLift className="h-full">
                <article className="surface h-full rounded-lg p-5">
                  <Icon size={22} className="text-accent-soft" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{group.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-zinc-400">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </HoverLift>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
