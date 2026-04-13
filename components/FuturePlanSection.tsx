import { FadeInSection } from '@/components/FadeInSection';
import { InfoCard } from '@/components/InfoCard';
import { SectionTitle } from '@/components/SectionTitle';

type FuturePlanData = {
  plans: Array<{ title: string; period: string; items: string[] }>;
  certificates: string[];
};

type FuturePlanSectionProps = {
  data: FuturePlanData;
};

export function FuturePlanSection({ data }: FuturePlanSectionProps) {
  return (
    <section id="future" className="section-shell bg-white">
      <div className="container-shell">
        <FadeInSection>
          <SectionTitle
            eyebrow="未來規劃"
            title="未來規劃"
            description="從目前的大二階段出發，逐步建立技術能力、實作經驗與職涯方向，讓自己更接近 MIS 與資訊整合相關工作。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {data.plans.map((plan) => (
              <article key={plan.title} className="card-surface p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">{plan.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{plan.title}</h3>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <InfoCard title="證照規劃" className="mt-6">
            <div className="mt-5 flex flex-wrap gap-3">
              {data.certificates.map((item) => (
                <span key={item} className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800">
                  {item}
                </span>
              ))}
            </div>
          </InfoCard>
        </FadeInSection>
      </div>
    </section>
  );
}
