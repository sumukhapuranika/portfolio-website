import { BadgeCheck, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { certifications, education, timeline } from '../data/portfolio';
import { Reveal } from './Motion';

export default function Log() {
  return (
    <section id="log" className="section-shell py-24">
      <Reveal>
        <p className="eyebrow">The Log</p>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-normal text-white sm:text-4xl">A focused progression into data engineering.</h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            From enterprise workflow automation to backend systems, pipelines, and AI-enabled engineering.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px]">
        <div className="relative">
          <div className="absolute bottom-4 left-3 top-4 w-px bg-white/10" aria-hidden="true" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Reveal key={`${item.period}-${item.title}`} delay={index * 0.05}>
                <article className="relative pl-10">
                  <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-ink-950">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.12}>
          <aside className="surface rounded-lg p-6">
            <BriefcaseBusiness size={22} className="text-accent-soft" aria-hidden="true" />
            <h3 className="mt-5 text-lg font-semibold text-white">Experience Notes</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Agile collaboration, REST API integrations, SQL queries, structured business data, code reviews,
              production support, issue debugging, and workflow automation.
            </p>

            <div className="mt-7 border-t border-white/10 pt-6">
              <div className="flex gap-3">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent-soft" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Education</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {education.degree}, {education.school}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    {education.location} · {education.year}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <h4 className="text-sm font-semibold text-white">Certifications</h4>
              <div className="mt-4 space-y-3">
                {certifications.map((certification) => (
                  <div key={certification} className="flex gap-3 text-sm text-zinc-300">
                    <BadgeCheck size={17} className="mt-0.5 shrink-0 text-accent-soft" aria-hidden="true" />
                    <span>{certification}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
