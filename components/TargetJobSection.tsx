import { FadeInSection } from '@/components/FadeInSection';
import { SectionTitle } from '@/components/SectionTitle';

type TargetJobData = {
  title: string;
  companyType: string;
  location: string;
  nature: string;
  responsibilities: string[];
  requirements: string[];
  bonus: string[];
  reason: string;
  matching: string;
  companyNeeds: string[];
  myStrengths: string[];
  jobLink: string;
};

type TargetJobSectionProps = {
  data: TargetJobData;
};

export function TargetJobSection({ data }: TargetJobSectionProps) {
  return (
    <section id="job" className="section-shell">
      <div className="container-shell">
        <FadeInSection>
          <SectionTitle
            eyebrow="理想職缺"
            title="理想 MIS 工作介紹"
            description="以目前的學習階段來看，我最有興趣的方向是從 MIS 助理工程師開始，逐步累積企業內部資訊支援與系統管理經驗。"
          />

          <div className="mt-10 card-surface overflow-hidden">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">{data.title}</span>
                  <span className="chip">{data.location}</span>
                </div>

                <dl className="mt-6 space-y-4 text-sm text-slate-600">
                  <div>
                    <dt className="font-semibold text-slate-900">公司類型</dt>
                    <dd className="mt-1">{data.companyType}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">工作性質</dt>
                    <dd className="mt-1">{data.nature}</dd>
                  </div>
                </dl>

                <div className="mt-8 rounded-3xl border border-sky-100 bg-sky-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">我的興趣原因</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{data.reason}</p>
                </div>

                <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">我與職缺的匹配分析</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{data.matching}</p>
                </div>

                <a
                  href={data.jobLink}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button mt-6"
                >
                  查看職缺
                </a>
              </div>

              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">工作內容</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {data.responsibilities.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">工作需求</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {data.requirements.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-slate-900">加分條件</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {data.bonus.map((item) => (
                      <span key={item} className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">企業需求</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {data.companyNeeds.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">我的能力</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {data.myStrengths.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
