import { FadeInSection } from '@/components/FadeInSection';
import { InfoCard } from '@/components/InfoCard';
import { SectionTitle } from '@/components/SectionTitle';

type ResumeData = {
  profile: [string, string][];
  education: Array<{ title: string; period: string; description: string }>;
  skills: string[];
  languages: [string, string][];
  projects: Array<{ title: string; stack: string; description: string }>;
  activities: string;
  certificates: string[];
};

type ResumeSectionProps = {
  data: ResumeData;
};

export function ResumeSection({ data }: ResumeSectionProps) {
  return (
    <section id="resume" className="section-shell">
      <div className="container-shell">
        <FadeInSection>
          <SectionTitle
            eyebrow="履歷"
            title="履歷"
            description="以學生階段的學習成果為主，整理基本資料、技能、專案經驗與未來規劃中的能力累積方向。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <InfoCard title="基本資料">
                <dl className="mt-5 space-y-4">
                  {data.profile.map(([label, value]) => (
                    <div key={label} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                      <dt className="text-sm font-medium text-slate-500">{label}</dt>
                      <dd className="text-right text-sm font-semibold text-slate-800">{value}</dd>
                    </div>
                  ))}
                </dl>
              </InfoCard>

              <InfoCard title="技能">
                <div className="mt-5 flex flex-wrap gap-3">
                  {data.skills.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </InfoCard>

              <InfoCard title="語言能力">
                <div className="mt-5 space-y-3">
                  {data.languages.map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      <span className="font-semibold text-slate-900">{label}</span>
                      <span className="mx-2 text-slate-300">｜</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </div>

            <div className="space-y-6">
              <div className="card-surface p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-slate-900">學歷</h3>
                <div className="mt-6 space-y-5">
                  {data.education.map((item) => (
                    <div key={item.title} className="relative border-l-2 border-sky-200 pl-5">
                      <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-sky-500" />
                      <p className="text-sm font-semibold text-sky-700">{item.period}</p>
                      <h4 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-surface p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-slate-900">專案經驗</h3>
                <div className="mt-6 space-y-5">
                  {data.projects.map((item) => (
                    <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                        <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-600">{item.stack}</span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="card-surface p-6">
                  <h3 className="text-lg font-semibold text-slate-900">校內活動／學習參與</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{data.activities}</p>
                </div>

                <div className="card-surface p-6">
                  <h3 className="text-lg font-semibold text-slate-900">證照／規劃方向</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    {data.certificates.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
