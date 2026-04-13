import { FadeInSection } from '@/components/FadeInSection';
import { InfoCard } from '@/components/InfoCard';
import { SectionTitle } from '@/components/SectionTitle';

type AboutData = {
  basicInfo: [string, string][];
  studyBackground: string;
  interests: string[];
  traits: string[];
  skills: string[];
};

type AboutSectionProps = {
  data: AboutData;
};

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <FadeInSection>
          <SectionTitle
            eyebrow="關於我"
            title="關於我"
            description="以資訊管理為核心，逐步累積系統管理、資料處理與企業資訊支援所需的能力。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <InfoCard title="基本資料">
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {data.basicInfo.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <dt className="text-sm font-medium text-slate-500">{label}</dt>
                    <dd className="mt-2 text-base font-semibold text-slate-900">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <p className="text-sm font-semibold text-sky-800">在台就學背景</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{data.studyBackground}</p>
              </div>
            </InfoCard>

            <div className="space-y-6">
              <InfoCard title="興趣方向">
                <div className="mt-5 flex flex-wrap gap-3">
                  {data.interests.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </InfoCard>

              <InfoCard title="個人特質">
                <ul className="mt-5 space-y-3">
                  {data.traits.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard title="已接觸技能">
                <div className="mt-5 flex flex-wrap gap-3">
                  {data.skills.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </InfoCard>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
