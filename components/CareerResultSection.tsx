import { FadeInSection } from '@/components/FadeInSection';
import { InfoCard } from '@/components/InfoCard';
import { SectionTitle } from '@/components/SectionTitle';

type CareerType = {
  code: string;
  name: string;
  title: string;
  description: string;
  strength: string;
  percent: number;
};

type CareerResultData = {
  title: string;
  hollandCode: string[];
  types: CareerType[];
  summary: string[];
};

type CareerResultSectionProps = {
  data: CareerResultData;
};

export function CareerResultSection({ data }: CareerResultSectionProps) {
  return (
    <section id="career" className="section-shell bg-white">
      <div className="container-shell">
        <FadeInSection>
          <SectionTitle
            eyebrow="職涯測驗"
            title="職涯測驗結果"
            description="根據興趣何倫碼測驗結果整理自己的職涯傾向，並思考這些特質和 MIS 工作之間的關聯。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <InfoCard>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">{data.title}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {data.hollandCode.map((code) => (
                  <span
                    key={code}
                    className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-2xl font-bold text-white"
                  >
                    {code}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {data.summary.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-slate-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </InfoCard>

            <div className="grid gap-5 md:grid-cols-3">
              {data.types.map((item) => (
                <article key={item.code} className="card-surface p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
                      {item.code} {item.name}
                    </span>
                    <span className="text-sm font-medium text-slate-500">{item.percent}%</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>

                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">傾向強度</span>
                      <span className="text-slate-500">{item.strength}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-100">
                      <div className="h-2.5 rounded-full bg-gradient-to-r from-sky-400 to-slate-900" style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
