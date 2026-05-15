"use client";

import { GsapReveal } from "@/components/animations/GsapReveal";
import { ServiceThumb } from "@/components/ServiceThumb";
import { servicesPreview } from "@/data/services";
import Link from "next/link";

export function HomeServices() {
  return (
    <section className="section section-line">
      <div className="container-orixo">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <GsapReveal className="lg:col-span-4">
            <span className="section-num">03</span>
          </GsapReveal>
          <GsapReveal className="lg:col-span-8 lg:text-right" y={30}>
            <p className="eyebrow mb-4 lg:ml-auto">Services</p>
            <h2 className="display-lg text-white">What we do best</h2>
          </GsapReveal>
        </div>

        <div className="mt-10 border-t border-[var(--border)]">
          {servicesPreview.map((service, i) => (
            <GsapReveal key={service.id} y={40} delay={i * 0.05}>
              <Link
                href={`/services#${service.id}`}
                className="service-row group grid grid-cols-12 items-center gap-4 py-8 sm:gap-6 sm:py-10"
                data-cursor="hover"
              >
                <span className="col-span-2 font-mono text-sm text-[var(--text-dim)] sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="col-span-10 flex items-center gap-4 sm:col-span-11 sm:col-start-2 lg:col-span-5 lg:col-start-2">
                  <ServiceThumb
                    src={service.thumbnail}
                    alt={service.title}
                    size="sm"
                  />
                  <h3 className="service-row__title text-xl font-semibold text-white transition sm:text-2xl">
                    {service.title}
                  </h3>
                </div>

                <p className="col-span-10 col-start-3 text-sm text-[var(--text-muted)] sm:col-span-5 sm:col-start-7 sm:text-base lg:col-start-7">
                  {service.description}
                </p>

                <span className="col-span-2 hidden justify-end text-[var(--accent)] opacity-0 transition group-hover:opacity-100 sm:flex">
                  →
                </span>
              </Link>
            </GsapReveal>
          ))}
        </div>

        <GsapReveal className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--accent)] transition hover:gap-5"
          >
            All services
            <span aria-hidden>→</span>
          </Link>
        </GsapReveal>
      </div>
    </section>
  );
}
