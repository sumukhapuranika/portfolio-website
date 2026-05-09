import { BriefcaseBusiness, CheckCircle2, GraduationCap } from 'lucide-react';
import { education, proofPoints } from '../data/portfolio';
import { HoverLift, Reveal } from './Motion';

const icons = [BriefcaseBusiness, CheckCircle2, GraduationCap];

export default function Proof() {
  return (
    <section className="section-shell py-16">
      <Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {proofPoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <HoverLift key={point.label} className="h-full">
                <article className="surface h-full rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-2xl font-extrabold tracking-normal text-white">{point.value}</p>
                      <h2 className="mt-2 text-sm font-semibold text-zinc-200">{point.label}</h2>
                    </div>
                    <Icon size={21} className="shrink-0 text-accent-soft" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">{point.detail}</p>
                </article>
              </HoverLift>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.025] p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">{education.degree}</p>
              <p className="mt-1 text-sm text-zinc-400">{education.school}</p>
            </div>
            <p className="text-sm text-zinc-500">
              {education.location} · {education.year}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
