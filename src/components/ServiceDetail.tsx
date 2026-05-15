import { ServiceThumb } from "@/components/ServiceThumb";
import type { Service } from "@/data/services";
import { ButtonOrixo } from "@/components/ui/ButtonOrixo";

type ServiceDetailProps = {
  service: Service;
  index: number;
};

export function ServiceDetail({ service, index }: ServiceDetailProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      id={service.id}
      className="scroll-mt-28 border-b border-[var(--border)] py-14 sm:py-20 last:border-b-0"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <span className="font-mono text-sm text-[var(--accent)]">{num}</span>
          <div className="mt-6 flex items-start gap-4">
            <ServiceThumb
              src={service.thumbnail}
              alt={service.title}
              size="md"
            />
            <div>
              <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                {service.tag}
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                {service.title}
              </h2>
            </div>
          </div>
          <p className="mt-3 text-[var(--text-muted)] leading-relaxed">
            {service.summary}
          </p>
        </div>

        <div className="lg:col-span-8">
          <p className="text-[var(--text-muted)] leading-relaxed">{service.description}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                What we do
              </h3>
              <ul className="mt-4 space-y-3">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm text-[var(--text-muted)] leading-relaxed"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                You receive
              </h3>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-sm text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--text-muted)]">
              <span className="font-medium text-white">Best for: </span>
              {service.idealFor}
            </p>
            <ButtonOrixo href="/contact" variant="outline">
              Discuss {service.title}
            </ButtonOrixo>
          </div>
        </div>
      </div>
    </article>
  );
}
